import React, { useEffect, useState } from "react";
import Card from "./Card";
import slide from "../../data/media/slide.wav";
import notification from "../../data/media/notification.wav";
import denied from "../../data/media/denied.mp3";
import { useCountdownTimer } from 'use-countdown-timer';
import Notification from '../../components/Notification';

function Index({ data }) {
  const [cards, setCards] = useState([]);
  const [pairs, setPairs] = useState([]);
  const [clicks, setClicks] = useState(0);
  const [memoryGameSet, setSet] = useState(0);
  const [memoryGameStarted, setGameStart] = useState(false);

  const { countdown, start, reset  } = useCountdownTimer({
    timer: 1000 * 60,
    onExpire: function () {
    }
  });

  useEffect(() => {
    const arr = data[memoryGameSet].set.map((item, index) => ({
      value: item.value,
      pic: item.pic,
      turned: false,
      matched: false,
      index,
      gameStarted: false
    }));
    setCards(arr);
  }, [data, memoryGameSet]);

  useEffect(() => {
    if (pairs.length === 2) {
      if (pairs[0] === pairs[1]) {
        const newCards = [...cards];
        newCards.forEach((card) => {
          if (card.value === pairs[0]) {
            card.matched = true;
            setTimeout(() => {
              let sound = new Audio(notification);
              sound.play();
            }, 500);
          }
        });
        setCards(newCards);
        setPairs([]);
      } else {
        setTimeout(() => {
          const newCards = [...cards];
          newCards.forEach((card) => {
            if (card.value === pairs[0] || card.value === pairs[1]) {
              card.turned = false;
            }
          });
          setPairs([]);
          setCards(newCards);
          let sound = new Audio(denied);
          sound.play();
        }, 1000);
      }
    }
  }, [pairs, cards]);


  const handleCardClick = (card, index) => {
    if (pairs.length < 2) {
      const newCards = [...cards];
      if (!newCards[index].turned) {
        let sound = new Audio(slide);
        sound.play();
        newCards[index].turned = true;
        setClicks(clicks + 1);
        setCards(newCards);
        setPairs([...pairs, card.value]);
      }
    }

  };

  const showNotification = () => {
    return (
      <Notification message="please start the game" type="error" />
    );
  };

  return (
    <div>
      <div className="memory-game-info-container">
        <div className="memory-game-info">
          <span className="tag is-link is-large">
            <div>{ countdown / 1000 }</div>
          </span>
        </div>
        <div className="memory-game-info">
          <div className="button is-link" onClick={ () => {
            setGameStart(true)
            start();
          }}>start game</div>
        </div>
        <div className="memory-game-info">
          <div className="field">
            <div className="control">
              <div className="select is-primary">
                <select onChange={ (e) => {
                  setSet(e.target.value);
                  setClicks(0);
                  setGameStart(false);
                  reset()
                } }>
                  { data.map((option, index) => (
                    <option key={ index } value={ index }>{ option.name }</option>
                  )) }
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="memory-game-info">
          <span className="tag is-link is-large">Flips { clicks }</span>
        </div>
      </div>
      <div className="memory-game-container">
        { cards &&
          cards.map((card, index) => (
            <div
              key={index}
              onClick={ () => {
                if (memoryGameStarted) {
                  handleCardClick(card, index);
                } else {
                  showNotification();
                }
              } }
            >
              <Card key={ index } item={ card } id={ index } />
            </div>
          )) }
      </div>
    </div>
  );
}
export default Index;