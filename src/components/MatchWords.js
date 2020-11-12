import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { uid } from 'react-uid';
let _ = require("lodash");


const Container = styled.div`
  display:flex;
  max-width:320px;
  border-radius:16px;
  height:auto;
  padding:5px;
  border-top:4px solid #1CB0F6;
  border-bottom:4px solid #1CB0F6;
  border-left:2px solid #1CB0F6;
  border-right:2px solid #1CB0F6;
  /* background-color:blue; */
`;
const Half = styled.div`
  flex:0.5;
  height:100%;
  padding:3px;
  /* background-color:yellow; */
`;

const Word = styled.button`
  display:flex;
  justify-content:center;
  cursor:pointer;
  align-items:center;
  border-top:2px solid #1CB0F6;
  border-bottom:2px solid #1CB0F6;
  border-left:1px solid #1CB0F6;
  border-right:1px solid #1CB0F6;
  width:100%;
  height:auto;
  padding:5px;
  font-size:14px;
  outline:none;
  border-radius:6px;
  background-color:${(props) => props.clicked ? '#AFCEFE' : '' };
  margin-top:2px;
  &:hover {
    background-color:#C3DBFE;
    transition:.6s;
  }
`;

function MatchWords({ data }) {
  const [wordsOne, setWordsOne] = useState([]);
  const [wordsTwo, setWordsTwo] = useState([]);
  useEffect(() => {
    const wordsOneArr = [];
    const wordsTwoArr = [];
    data.forEach((obj) => {
      wordsOneArr.push({ word: obj.word1, id: `p-${uid(obj)}`, clicked: false });
      wordsTwoArr.push({ word: obj.word2, id: `s-${uid(obj)}`, clicked: false });
    });
    setWordsOne(_.shuffle(wordsOneArr));
    setWordsTwo(_.shuffle(wordsTwoArr));
  }, []);
  //console.log(data);
  console.log(wordsOne);
  //console.log(wordsTwo);

  const onClickWordsOne = (e) => {
    const val = e.target.value;
    const id = e.target.id;
    const newWordsOneArr = [...wordsOne].map((item) => {
      if (item.id === id) {
        console.log('true');
        return Object.assign({}, item, { clicked: true });
      } else {
        return item
      }
    });
    /* newWordsOneArr.map((item) => item.id === id ? Object.assign({}, item, { clicked:true }) : item) */

    setWordsOne(newWordsOneArr);
  };
  return (
    <Container>
      <Half>{ wordsOne.map((word) => (
        <Word key={ word.id } clicked={word.clicked} value={ word.word } id={ word.id } onClick={ (e) => { onClickWordsOne(e); } }>{ word.word }</Word>
      )) }</Half>
      <Half>{ wordsTwo.map((word) => (
        <Word key={ word.id }>{ word.word }</Word>
      )) }</Half>
    </Container>
  );
}

export default MatchWords;
