import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { uid } from 'react-uid';
import { speakStr } from '../components/Pronunciation';
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
  background-color:${(props) => props.clicked ? '#AFCEFE' : ''};
  margin-top:2px;
  &:hover {
    background-color:#C3DBFE;
    transition:.6s;
  }
`;

function MatchWords({ data }) {
  const [wordsOne, setWordsOne] = useState([]);
  const [wordsTwo, setWordsTwo] = useState([]);
  const [allPairs, setAllPairs] = useState([]);
  const [selectedWords, setSelectedWords] = useState([]);
  const [isMatch, setIsMatch] = useState(false);
  useEffect(() => {
    const wordsOneArr = [];
    const wordsTwoArr = [];
    const allPairs = [];
    data.forEach((obj) => {
      wordsOneArr.push({ word: obj.word1, id: `p-${uid(obj)}`, clicked: false, disabled: false });
      wordsTwoArr.push({ word: obj.word2, id: `s-${uid(obj)}`, clicked: false, disabled: false });
      allPairs.push(obj.pair);
    });
    setWordsOne(_.shuffle(wordsOneArr));
    setWordsTwo(_.shuffle(wordsTwoArr));
    setAllPairs(allPairs);
  }, []);
  //console.log(data);
  console.log(wordsOne);
  console.log(wordsTwo);
  //console.log(allPairs);
  console.log(selectedWords);
  //console.log(isMatch);

  useEffect(() => {
    if (selectedWords.length === 2) {
      const arraysEqual = (a, b) => {
        return a.sort().toString() === b.sort().toString();
      };
      allPairs.forEach(pair => {
        if (arraysEqual(pair, selectedWords)) {
          setIsMatch(true);
        } else {
          const newWordsOneArr = [...wordsOne].map((item) => {
            if (item.word === selectedWords[0] || item.word === selectedWords[1]) {
              console.log('true93');
              return Object.assign({}, item, { disabled: false, clicked: false });
            } else {
              return item;
            }
          });

          const newWordsTwoArr = [...wordsTwo].map((item) => {
            if (item.word === selectedWords[0] || item.word === selectedWords[1]) {
              console.log('true102');
              return Object.assign({}, item, { disabled: false, clicked: false });
            } else {
              return item;
            }
          });
          setWordsOne(newWordsOneArr);
          setWordsTwo(newWordsTwoArr);
        }
      });
    }

    if (selectedWords.length > 2) {
      setSelectedWords([]);
    }
  }, [selectedWords]);

  useEffect(() => {
    if (isMatch) {
      setSelectedWords([]);
      setIsMatch(false);
      const newWordsOneArr = [...wordsOne].map((item) => {
        if (item.word === selectedWords[0] || item.word === selectedWords[1]) {
          console.log('true93');
          return Object.assign({}, item, { disabled: true, clicked:true });
        } else {
          return item;
        }
      });

      const newWordsTwoArr = [...wordsTwo].map((item) => {
        if (item.word === selectedWords[0] || item.word === selectedWords[1]) {
          console.log('true102');
          return Object.assign({}, item, { disabled: true, clicked:true });
        } else {
          return item;
        }
      });
      setWordsOne(newWordsOneArr);
      setWordsTwo(newWordsTwoArr);
    } else {
      setIsMatch(false);
      setSelectedWords([]);
    }
  }, [isMatch]);

  const onClickWordsOne = (e) => {
    const val = e.target.value;
    const id = e.target.id;
    speakStr(val, 'ru-Ru');
    const newWordsOneArr = [...wordsOne].map((item) => {
      if (item.id === id) {
        //console.log('true');
        return Object.assign({}, item, { clicked: true });
      } else {
        return item;
      }
    });
    setWordsOne(newWordsOneArr);
    setSelectedWords(words => [...words, val]);
  };

  const onClickWordsTwo = (e) => {
    const val = e.target.value;
    const id = e.target.id;
    speakStr(val, 'ru-Ru');
    const newWordsTwoArr = [...wordsTwo].map((item) => {
      if (item.id === id) {
        //console.log('true');
        return Object.assign({}, item, { clicked: true });
      } else {
        return item;
      }
    });
    setWordsTwo(newWordsTwoArr);
    setSelectedWords(words => [...words, val]);
  };

  return (
    <Container>
      <Half>{ wordsOne.map((word) => (
        <Word key={ word.id } clicked={ word.clicked } value={ word.word } id={ word.id } onClick={ (e) => { onClickWordsOne(e); } } disabled={ word.disabled }>{ word.word }</Word>
      )) }</Half>
      <Half>{ wordsTwo.map((word) => (
        <Word key={ word.id } clicked={ word.clicked } value={ word.word } id={ word.id } onClick={ (e) => { onClickWordsTwo(e); } } disabled={ word.disabled }>{ word.word }</Word>
      )) }</Half>
    </Container>
  );
}

export default MatchWords;
