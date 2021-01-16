import React, { useState, useEffect } from 'react';
import Board from './Board';
import Card from './Card';
import Plate from './Plate';
import styled from 'styled-components';
import './styles.css';
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
`;

/* const Button = styled.button`
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
` */

function Container({ data, name1, name2, img1, img2 }) {
  const [formattedArr, setFormattedArr] = useState([]);
  const [set1, setSet1] = useState([]);
  const [set2, setSet2] = useState([]);
  const [btnDisabled, setBtnDisabled] = useState(true);

  useEffect(() => {
    if (set1.length + set2.length === formattedArr.length) {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
    }
    //console.log(males, females, formattedArr);
  }, [set1, set2]);

  useEffect(() => {
    setBtnDisabled(true);
  }, []);

  const handleAppendToSet1 = (cardId) => {
    setSet1((prevCards) => [...prevCards, cardId]);
    setSet2((prevCards) => prevCards.filter((card) => card !== cardId));
  };

  const handleAppendToSet2 = (cardId) => {
    setSet2((prevCards) => [...prevCards, cardId]);
    setSet1((prevCards) => prevCards.filter((card) => card !== cardId));
  };

  const handleAppendToCardsHolder = (cardId) => {
    setSet2((prevCards) => prevCards.filter((card) => card !== cardId));
    setSet1((prevCards) => prevCards.filter((card) => card !== cardId));
  };

  const checkAnswer = () => {
    console.log(set1.sort());
    console.log(set2.sort());
    let set1_origin = data["set1"].sort();
    let set2_origin = data["set2"].sort();
    console.log(set1_origin, set2_origin);
    if (_.isEqual(set1.sort(), set1_origin.sort()) && _.isEqual(set2.sort(), set2_origin.sort())) {
      console.log('this is correct');
    } else {
      console.log('this is not correct');
    }
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
        <Board id="board-2" handleCardAppend={ handleAppendToSet1 } >
          <Plate name={ name1 } img={ img1 } />
        </Board>
        <Board id="board-3" handleCardAppend={ handleAppendToSet2 } >
          <Plate name={ name2 } img={ img2 } />
        </Board>
      </BoardsContainer>
      <button class="button is-info" disabled={ btnDisabled } onClick={ checkAnswer }>проверить</button>
    </Root>
  );
}

export default Container;
