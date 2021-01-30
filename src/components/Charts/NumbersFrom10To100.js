import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import './NumbersFrom10To100.css'

const numData = {
  "1to9": [
    {
      num: 1,
      word: 'од<strong>и</strong>н',
      id: uuidv4()
    },
    {
      num: 2,
      word: 'дв<strong>а</strong>',
      id: uuidv4()
    }, {
      num: 3,
      word: 'тр<strong>и</strong>',
      id: uuidv4()
    },
    {
      num: 4,
      word: 'чет<strong>ы</strong>ре',
      id: uuidv4()
    }, {
      num: 5,
      word: 'п<strong>я</strong>ть',
      id: uuidv4()
    }, {
      num: 6,
      word: 'ш<strong>е</strong>сть',
      id: uuidv4()
    }, {
      num: 7,
      word: 'с<strong>е</strong>мь',
      id: uuidv4()
    }, {
      num: 8,
      word: 'в<strong>о</strong>семь',
      id: uuidv4()
    }, {
      num: 9,
      word: 'д<strong>е</strong>вять',
      id: uuidv4()
    }
  ],
  "10to19": [,
    {
      num: 11,
      word: 'од<strong>и</strong>н<span class="highlighted">надцать</span>',
      id: uuidv4()
    }, {
      num: 12,
      word: 'две<span class="highlighted">н<strong>а</strong>дцать</span>',
      id: uuidv4()
    },
    {
      num: 13,
      word: 'три<span class="highlighted">н<strong>а</strong>дцать</span>',
      id: uuidv4()
    }, {
      num: 14,
      word: 'чет<strong>ы</strong>р<span class="highlighted">надцать</span>',
      id: uuidv4()
    }, {
      num: 15,
      word: 'пят<span class="highlighted">н<strong>а</strong>дцать</span>',
      id: uuidv4()
    }, {
      num: 16,
      word: 'шест<span class="highlighted">н<strong>а</strong>дцать</span>',
      id: uuidv4()
    }, {
      num: 17,
      word: 'сем<span class="highlighted">н<strong>а</strong>дцать</span>',
      id: uuidv4()
    }, {
      num: 18,
      word: 'восем<span class="highlighted">н<strong>а</strong>дцать</span>',
      id: uuidv4()
    }, {
      num: 19,
      word: 'девят<span class="highlighted">н<strong>а</strong>дцать</span>',
      id: uuidv4()
    }
  ],
  "20to90": [
    {
      num: 10,
      word: 'д<strong>е</strong>сять',
      id: uuidv4()
    },
    {
      num: 20,
      word: 'дв<strong>а</strong><span class="highlighted">дцать<span>',
      id: uuidv4()
    }, {
      num: 30,
      word: 'тр<strong>и</strong><span class="highlighted">дцать<span>',
      id: uuidv4()
    },
    {
      num: 40,
      word: 'с<strong>о</strong>рок',
      id: uuidv4()
    }, {
      num: 50,
      word: 'пять<span class="highlighted">дес<strong>я</strong>т<span>',
      id: uuidv4()
    }, {
      num: 60,
      word: 'шесть<span class="highlighted">дес<strong>я</strong>т<span>',
      id: uuidv4()
    }, {
      num: 70,
      word: 'с<strong>е</strong>мь<span class="highlighted">десят<span>',
      id: uuidv4()
    }, {
      num: 80,
      word: 'в<strong>о</strong>семь<span class="highlighted">десят<span>',
      id: uuidv4()
    }, {
      num: 90,
      word: 'девян<strong>о</strong>сто',
      id: uuidv4()
    }
  ]
};

const Columns = styled.div`
  margin-top:${props => props.marginTopProp};
  -webkit-box-shadow: 4px 8px 12px -8px rgba(0,0,0,0.75);
  -moz-box-shadow: 4px 8px 12px -8px rgba(0,0,0,0.75);
  box-shadow: 4px 8px 12px -8px rgba(0,0,0,0.75);
  border-top: 6px double #5fa8d3;
  border-bottom: 6px double #5fa8d3;
  border-radius: 24px 24px 24px 24px;
  margin:0 auto;
`;

const Column = styled.div`
  position:relative;
  background-color:${props => props.bgColor};
  border-top-left-radius:${props => props && props.borderTopLeftRadius};
  border-bottom-left-radius:${props => props.borderBottomLeftRadius};
  border-right:${props => props.borderRight};
  border-top-right-radius:${props => props.borderTopRightRadius};
  border-bottom-right-radius:${props => props.borderBottomRightRadius};
  cursor:pointer;
  padding:0;
`;

const ListContainer = styled.ul`
  background-color:transparent;
  width:100%;
  height:100%;
  overflow:hidden !important;
  padding-left:25px;
`

const ListItem = styled.li`
  display:flex;
  font-size:18px;
  margin-top:5px;
`

const Digit = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  width:40px;
  height:40px;
  border-radius:50%;
  background-color:white;
  border: 6px double #1C6EA4;
  border-radius: 24px 24px 24px 24px;
  margin-right:10px;
  margin-bottom:5px;
  padding:6px;
`
const Highlighted = styled.span`
  color:red;
`



function NumbersFrom10To100({marginTop}) {
  return (
    <Columns className="columns" marginTopProp = {marginTop}>
      <Column
        borderTopLeftRadius="24px"
        borderBottomLeftRadius="24px"
        bgColor="#cae9ff"
        borderRight="2px solid #1b4965"
        className="column"
      >
        <ListContainer>
          { numData['1to9'].map(num => (
            <ListItem key={ num.id }><Digit>{ num.num }</Digit> {ReactHtmlParser(num.word)}</ListItem>
          )) }
        </ListContainer>
      </Column>
      <Column
        className="column"
        bgColor="#bee9e8"
        borderRight="2px solid #1b4965"
      >
        <ListContainer>
          { numData['10to19'].map(num => (
            <ListItem key={ num.id }><Digit>{ num.num }</Digit> {ReactHtmlParser(num.word)}</ListItem>
          )) }
        </ListContainer>
      </Column>
      <Column 
        className="column"
        bgColor="#f4d35e"
        borderTopRightRadius="24px"
        borderBottomRightRadius="24px"
      >
        <ListContainer>
          { numData['20to90'].map(num => (
            <ListItem key={ num.id }><Digit>{ num.num }</Digit> {ReactHtmlParser(num.word)}</ListItem>
          )) }
        </ListContainer>
      </Column>
    </Columns>
  );
}

export default NumbersFrom10To100;
