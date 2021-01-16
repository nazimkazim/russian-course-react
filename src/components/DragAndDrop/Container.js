import React, { useState, useEffect } from 'react';
import Board from './Board';
import Card from './Card';
import Plate from './Plate';
import styled from 'styled-components';
const _ = require('lodash');

const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content:center;
  flex-direction:column;
  width: 100%;
  max-width: 768px;
  height: 500px;
  overflow: hidden;
  margin: 0 auto;
  padding: 15px;
  border: 1px solid #fef8eb;
  -webkit-box-shadow: 0px 0px 13px 2px rgba(232, 208, 232, 1);
  -moz-box-shadow: 0px 0px 13px 2px rgba(232, 208, 232, 1);
  box-shadow: 0px 0px 13px 2px rgba(232, 208, 232, 1);
  border-radius: 18px;
`;

const BoardsContainer = styled.div`
  display:flex;
  align-items:center;
  justify-content: space-between;
  width:100%;
  height:100%;
`

const Button = styled.button`
  display:flex;
  justify-content:center;
  align-items:center;
  margin-top:30px;
  width:100px;
  height:20px;
  background-color:#00b4d8;
  color:white;
  padding:18px;
  border-radius:3px;
  cursor:pointer;
  text-transform:uppercase;
  border:none;
  outline:none;
`

function Container({ data, name1, name2, img1, img2 }) {
  const [formattedArr, setFormattedArr] = useState([]);
  const [males, setMales] = useState([]);
  const [females, setFemales] = useState([]);
  const [btnDisabled, setBtnDisabled] = useState(true)

  useEffect(() => {
    if (males.length + females.length === formattedArr.length) {
      setBtnDisabled(false)
    } else {
      setBtnDisabled(true)
    }
    //console.log(males, females, formattedArr);
  }, [males, females]);

  const handleAppendToMales = (cardId) => {
    setMales((prevCards) => [...prevCards, cardId]);
    setFemales((prevCards) => prevCards.filter((card) => card !== cardId));
  };

  const handleAppendToFemales = (cardId) => {
    setFemales((prevCards) => [...prevCards, cardId]);
    setMales((prevCards) => prevCards.filter((card) => card !== cardId));
  };

  const handleAppendToCardsHolder = (cardId) => {
    setFemales((prevCards) => prevCards.filter((card) => card !== cardId));
    setMales((prevCards) => prevCards.filter((card) => card !== cardId));
  };

  //console.log(data);
  //const set1 = Object.keys(data)[0]
  //const set2 = Object.keys(data)[1]
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
    <Root className="flexbox">
      <BoardsContainer>
      <Board id="board-1" handleCardAppend={ handleAppendToCardsHolder } overflowed={ true }>
        { formattedArr.map(item => (
          <Card id={ item } className="card" draggable="true">
            <p>{ item }</p>
          </Card>
        )) }
      </Board>
      <Board id="board-2" handleCardAppend={ handleAppendToMales } >
        <Plate name={ name1 } img={ img1 } />
      </Board>
      <Board id="board-3" handleCardAppend={ handleAppendToFemales } >
        <Plate name={ name2 } img={ img2 } />
      </Board>
      </BoardsContainer>
      <button class="button is-info" title="Disabled button" disabled={`${btnDisabled}`}>проверить</button>
    </Root>
  );
}

export default Container;
