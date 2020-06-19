import React, { useEffect, useState } from "react";
import CountdownTimer from "react-component-countdown-timer";
import Card from "./Card";
import slide from "../../data/media/slide.wav";
import notification from "../../data/media/notification.wav";
import denied from "../../data/media/denied.mp3";

function Index({ data }) {
  const [cards, setCards] = useState([]);
  const [pairs, setPairs] = useState([]);
  const [seconds, setSeconds] = useState(61);

  useEffect(() => {
    const arr = data.map((item, index) => ({
      value: item.value,
      pic: item.pic,
      turned: false,
      matched: false,
      index
    }));
    setCards(arr);
  }, [data]);

  useEffect(() => {
    if (pairs.length === 2) {
      if (pairs[0] === pairs[1]) {
        const newCards = [...cards];
        newCards.forEach((card) => {
          if (card.value === pairs[0]) {
            card.matched = true;
            setTimeout(() => {
              let sound = new Audio(notification)
              sound.play()
            }, 500)
            
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
          setCards(newCards);
          setPairs([]);
          let sound = new Audio(denied)
          sound.play()
        }, 1000);
      }
    }
    if (pairs.length > 2) {

    }
  }, [pairs, cards]);
  

  var settings = {
    count: seconds,
    border: true,
    showTitle: true,
    noPoints: true,
    hideDay: true,
    hideHours: true
  };


  return (
    <div>
      
      <div className="memory-game-info-container">
        <div className="memory-game-info">
          <span class="tag is-link is-large">
            <CountdownTimer {...settings} />
          </span>
        </div>
        <div className="memory-game-info">
          <button className="button is-primary" onClick={() => {setSeconds(50)}}>start game</button>
        </div>
        <div className="memory-game-info">
          <span class="tag is-link is-large">Flips</span>
        </div>
      </div>
      <div className="memory-game-container">
        { cards &&
          cards.map((card, index) => (
            <div
              onClick={ () => {
                const newCards = [...cards];
                if (!newCards[index].turned) {
                  let sound = new Audio(slide);
                  sound.play()
                  newCards[index].turned = true;
                  setCards(newCards);
                  setPairs([...pairs, card.value]);
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