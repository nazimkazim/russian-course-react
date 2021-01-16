import React, { useState, useEffect } from 'react';
import Board from './Board';
import Card from './Card';
import Plate from './Plate'
import './styles.css';
const _ = require('lodash');

function Container({ data, name1, name2, img1, img2 }) {
  const [formattedArr, setFormattedArr] = useState([]);

  const [ males, setMales ] = useState([]);
  const [ females, setFemales ] = useState([]);

  const handleAppendToMales = (cardId) => {
    setMales((prevCards) => [...prevCards, cardId]);
    setFemales((prevCards) => prevCards.filter((card) => card !== cardId));
  }

  const handleAppendToFemales = (cardId) => {
    setFemales((prevCards) => [...prevCards, cardId]);
    setMales((prevCards) => prevCards.filter((card) => card !== cardId));
  }

  const handleAppendToCardsHolder = (cardId) => {
    setFemales((prevCards) => prevCards.filter((card) => card !== cardId));
    setMales((prevCards) => prevCards.filter((card) => card !== cardId));
  }

  useEffect(() => {
    console.log({ males, females, formattedArr })
  }, [males, females])
 
  console.log(data);
  const set1 = Object.keys(data)[0]
  const set2 = Object.keys(data)[1]
  //console.log(set1);
  //console.log(Object.keys(data));
  useEffect(() => {
    let arr = [];
    arr.push(data["set1"]);
    arr.push(data["set2"]);
    setFormattedArr(_.shuffle(arr.flat()));
  }, []);
  //console.log(formattedArr);
  return (
    <div className="flexbox">
      <Board id="board-1" handleCardAppend={handleAppendToCardsHolder} overflowed={true}>
        { formattedArr.map(item => (
          <Card id={item} className="card" draggable="true">
            <p>{item}</p>
          </Card>
        )) }
      </Board>
      <Board id="board-2" handleCardAppend={handleAppendToMales} >
        <Plate name={name1} img={img1}/>
      </Board>
      <Board id="board-3" handleCardAppend={handleAppendToFemales} >
      <Plate name={name2} img={img2}/>
      </Board>
    </div>
  );
}

export default Container;
