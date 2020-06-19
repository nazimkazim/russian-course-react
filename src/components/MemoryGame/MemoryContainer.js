import React, { useEffect, useState } from "react";
import Card from "./Card";

function Index({ data }) {
  const [cards, setCards] = useState([]);
  const [pairs, setPairs] = useState([]);
  
  useEffect(() => {
    const arr = data.map((item,index) => ({
      value: item.value,
      pic: item.pic,
      turned: false,
      matched:false,
      index
    }));
    setCards(arr);
  }, [data]);

  useEffect(() => {
    if (pairs.length === 2) {
      if (pairs[0] === pairs[1]) {
        const newCards = [...cards]
        newCards.forEach((card) => {
          if (card.value === pairs[0]) {
            card.matched = true
          } 
        })
        setCards(newCards)
        setPairs([])
      } else {
        setTimeout(() => {
          const newCards = [...cards]
          newCards.forEach((card) => {
            if (card.value === pairs[0] || card.value === pairs[1]) {
              card.turned = false
            } 
        })
          setCards(newCards)
          setPairs([])
        }, 1000)
      }
    }
    if (pairs.length > 2) {

    }
  },[pairs,cards])

  
  
  return (
    <div className="memory-game-container">
      { cards &&
        cards.map((card, index) => (
          <div
            onClick={ () => {
              const newCards = [...cards];
              if (!newCards[index].turned) {
                newCards[index].turned = true;
                setCards(newCards);
                setPairs([...pairs, card.value])
              }
              
            } }
          >
            <Card key={ index } item={ card } id={ index } />
          </div>
        )) }
    </div>
  );
}
export default Index;