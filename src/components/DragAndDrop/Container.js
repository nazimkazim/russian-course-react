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
  min-height: 500px;
  overflow: hidden;
  margin: 0 auto;
  padding: 15px;
  border: 1px solid #fef8eb;
  -webkit-box-shadow: 0px 0px 13px 2px rgba(232, 208, 232, 1);
  -moz-box-shadow: 0px 0px 13px 2px rgba(232, 208, 232, 1);
  box-shadow: 0px 0px 13px 2px rgba(232, 208, 232, 1);
  border-radius: 18px;

  @media (max-width: 414px) {
    overflow-x:scroll;
  }
`;

const BoardsContainer = styled.div`
  display:flex;
  justify-content: space-between;
  width:100%;
  min-height:100%;
`;


const Container = ({ data, name1, name2, img1, img2 }) => {
  const [formattedArr, setFormattedArr] = useState([]);
  const [set1, setSet1] = useState([]);
  const [set2, setSet2] = useState([]);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isNotCorrect, setIsNotCorrect] = useState(false);
  //console.log(formattedArr);

  let win = new Audio('https://res.cloudinary.com/nzmai/video/upload/v1611066674/russian%20course/Sound/little_robot_sound_factory_Jingle_Win_Synth_00.mp3')
  let lose = new Audio('https://res.cloudinary.com/nzmai/video/upload/v1611067160/russian%20course/Sound/multimedia_game_sound_retro_lose_tone_002_52984.mp3')

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

  //console.log(isCorrect, isNotCorrect);

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
    //console.log(set1.sort());
    //console.log(set2.sort());
    //console.log(set1_origin, set2_origin);
    let set1_origin = data["set1"].sort();
    let set2_origin = data["set2"].sort();
    if (_.isEqual(set1.sort(), set1_origin.sort()) && _.isEqual(set2.sort(), set2_origin.sort())) {
      //console.log('this is correct');
      setIsCorrect(true);
      win.play()
    } else {
      //console.log('this is not correct');
      setIsNotCorrect(true)
      lose.play()
    }
  };

  const startAgain = () => {
    setFormattedArr([]);
    formSets();
    setSet1([]);
    setSet2([]);
    setBtnDisabled(true);
    const board1 = document.getElementById("board-1");
    const board2 = document.getElementById("board-2");
    const board3 = document.getElementById("board-3");
    for (let index = 0; index < board1.children.length; index++) {
      board1.children[index].style.display = 'none';
    };
    hideCards(board2);
    hideCards(board3);
    window.location.reload();
  };

  const hideCards = (board) => {
    for (let index = 0; index < board.children.length; index++) {
      if (index !== 0) {
        board.children[index].style.display = 'none';
      }
    };
  };

  const formSets = () => {
    let arr = [];
    arr.push(data["set1"]);
    arr.push(data["set2"]);
    setFormattedArr(_.shuffle(arr.flat()));
  };

  useEffect(() => {
    formSets();
  }, []);

  //console.log(data);
  //const set1 = Object.keys(data)[0]
  //const set2 = Object.keys(data)[1]
  //console.log(set1);
  //console.log(Object.keys(data));
  //console.log(formattedArr);
  return (
    <Root className="flexbox">
      <BoardsContainer>
        <Board id="board-1" handleCardAppend={ handleAppendToCardsHolder } overflowed={ true }>
          { formattedArr && formattedArr.map(item => (
            <Card isCorrect={isCorrect} isNotCorrect={isNotCorrect} id={ item } className="card" draggable="true">
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
      <button className="button is-success" onClick={ checkAnswer } onClick={ startAgain }>start again</button>
      <button className="button is-info" disabled={ btnDisabled } onClick={ checkAnswer }>check</button>
    </Root>
  );
};

export default Container;
