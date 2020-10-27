import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { speak, speakStr } from '../Pronunciation';
import AnalogueClock from '../AnalogueClock';

const Container = styled.div`
  display:flex;
  flex-direction:column;
  width:900px;
  height:900px;
  @media (max-width: 414px) {
    width:100%;
    min-height:1200px !important;
  }
  /* background-color:blue; */
`;

const ColumnTop = styled.div`
  display:flex;
  width:100%;
  height:33.3333%;
  /* background-color:yellow; */
  @media (max-width: 414px) {
    display:flex;
    width:100% !important;
    height:600px;
  }
`;

const ColumnMiddle = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width:100%;
  height:33.3333%;
  border-right:1px solid black;
  border-left:1px solid black;
  /* background-color:yellow; */
`;

const ColumnBottom = styled.div`
  display:flex;
  justify-content:center;
  width:100%;
  height:33.3333%;
  border:1px solid black;
  /* background-color:yellow; */
  @media (max-width: 414px) {
    width:100%;
  }
`;

const BlockContainer = styled.div`
  display:flex;
  flex-wrap:wrap;
  width:33.3333%;
  height:100%;
  border: ${props => props.border && '1px solid black'};
  border-right:${props => props.noSideBorderRight && 'none'};
  border-left:${props => props.noSideBorderRight && 'none'};
  /* background-color:red; */
  @media (max-width: 414px) {
    width:100%;
    justify-content:center;
  }
`;

const ExpressionsContainer = styled.ul`
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items:center;
  margin-top:10px;
  width:100%;
  height:100%;
  /* background-color:brown; */
`;

const ExpressionList = styled.button`
  display:flex;
  justify-content:flex-start;
  align-items:center;
  width:90%;
  cursor:pointer;
  height:auto;
  background:url(${props => props.img1}), url(${props => props.img2});
  background-position: left center, center center;
  background-repeat: no-repeat, no-repeat;
  background-size: 180px 30px, 40px 30px;
  border:2px solid #ADFFD8;
  border-radius:8px;
  padding:20px;
  background-color:#C2FFE2;
  margin-bottom:3px;
  @media (max-width: 414px) {
    width:95%;
    background-position: left center, center right;
    background-repeat: no-repeat, no-repeat;
    background-size: 117px 30px, 115px 30px;
  }
`;


const Image = styled.button`
  display:flex;
  cursor:pointer;
  flex:1 1 70px;
  height:auto;
  background-color:white;
  border-radius:5px;
  outline: 1px solid #fff;
  background-image:url(${props => props.img});
  background-repeat: no-repeat;
  background-size: 60px 60px;
  background-position: center;
  @media (max-width: 414px) {
    background-size: 40px 40px;
  }
`;

const SentenceContainer = styled.div`
  display:flex;
  align-items:center;
  flex-wrap: wrap;
  justify-content:center;
  min-width:600px;
  min-height:100px;
  padding:10px;
  border-bottom:2px solid #C2FFE2;
  /* background-color:black; */
  margin-bottom:10px;
  @media (max-width: 414px) {
    min-width:100% !important;
  }
`;

const TimeLineContainer = styled.div`
  position:relative;
  display:flex;
  align-items:center;
  justify-content:space-around;
  margin-top:10px;
  width:500px;
  height:16px;
  /* background-color:red; */
  @media (max-width: 414px) {
    max-width:90% !important;
  }
`;

const TimeLineArrow = styled.div`
  position:absolute;
  width:100%;
  height:3px;
  background-color:#001214;
`;

const TimeLineMarksContainer = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  margin-top:20px;
  width:auto;
  height:auto;
  padding:3px;
`;

const rotate = keyframes`
  from {
    transform:rotate(0deg);
  }

  to {
    transform:rotate(360deg);
  }
`;

const background = keyframes`
  from {background-color: #C2FFE3;}
  to {background-color: #00B862;}
`;

const TimeLineMarks = styled.button`
  cursor:pointer;
  display:flex;
  justify-self:flex-start;
  z-index:3;
  animation: ${props => props.highlighted && rotate} 2s infinite, ${props => props.highlighted && background} 2s infinite;
  transition:background-color 2s ease-in-out;
  transition:border 2s ease-in-out;
  width:30px;
  height:30px;
  border-radius:50%;
  background-color:#00CC69;
  border:2px solid ${props => props.highlighted ? '00140B' : '#5CFFB0'};
`;

const SoundButton = styled.button`
  margin-right: auto;
  cursor:pointer;
  background-image:url('https://res.cloudinary.com/nzmai/image/upload/v1602920937/be-verb-diagram/time-expressions/microphone.svg');
  background-repeat: no-repeat;
  background-color:transparent;
  border:none;
  outline:none;
  background-size: cover;
  background-position: center;
  width:60px;
  height:60px;
`;

const Tag = styled.span`
  display:flex;
  cursor:pointer;
  margin-right:10px;
  border:2px solid #ADFFD8;
  border-radius:6px;
  justify-content:center;
  align-items:center;
  padding:10px;
  min-width:100px;
  height:50px;
  font-size:22px;
  font-weight:bold;
  background-color:#C2FFE2;
  @media (max-width: 414px) {
    padding:5px;
    min-width:80px;
    font-size:16px;
  }
`;

export default function Index({ data }) {
  const [places, setPlaces] = useState(null);
  const [subjectPronouns, setSubjectPronouns] = useState(null);
  const [hour, setHour] = useState('');
  const [minute, setMinute] = useState('');
  const [tenses, setTenses] = useState(null);
  const [selectPlace, setSelectPlace] = useState('');
  const [selectPronoun, setSelectPronoun] = useState('');
  const [selectTense, setSelectTense] = useState('');
  const [selectExpression, setSelectExpression] = useState('');
  const [chooseTense, setChooseTense] = useState(false);



  useEffect(() => {
    setPlaces(data.places);
    setSubjectPronouns(data.subjectPronouns);
    setTenses(data.tenses);
  }, [data.places, data.subjectPronouns, data.tenses]);

  //console.log(tenses);
  //console.log(selectTense);

  const selectPlaceHandle = (e) => {
    e.preventDefault();
    //console.log(e.target.value);
    setSelectPlace(e.target.value);
    speak(e, 'en-EN');
  };

  const selectPronounHandle = (e) => {
    e.preventDefault();
    //console.log(e.target.value);
    setSelectPronoun(e.target.value);
    speak(e, 'en-EN');
  };

  const handleSelectTense = (e) => {
    e.preventDefault();
    setSelectTense(e.target.value);
    setChooseTense(false);
    setSelectExpression('');
  };

  const handleExpressionList = (e) => {
    e.preventDefault();
    setSelectExpression(e.target.value);
    speak(e, 'en-EN');
  };

  const showExpressions = (tense) => {
    if (tense) {
      const expr = tenses && tenses.filter((item) => {
        return item.tense === tense;
      });
      //console.log(expr[0])
      return expr[0].expressions;
    } else {
      return '';
    }
  };

  const formatTime = (hour, minute) => {
    const prefix = 'at';
    if (hour && minute === "") {
      return `${prefix} ${hour} o'clock`;
    }

    if (hour && minute === 'five') {
      return `${prefix} ${hour} o ${minute}`;
    }

    if (hour && minute) {
      return `${prefix} ${hour} ${minute}`;
    }
  };

  const listenSentenceHandle = () => {
    const beVerb = conjugatePronoun(selectPronoun, selectTense);
    if (beVerb) {
      let sentence = `${selectPronoun} ${beVerb} in the ${selectPlace} ${selectExpression && selectExpression} ${formatTime(hour, minute)}`;
      //console.log(sentence);
      speakStr(sentence, 'en-En');
      setChooseTense(false);
    } else {
      setChooseTense(true);
    }
  };





  //console.log(showExpressions())

  const conjugatePronoun = (pronoun, tense) => {
    if (pronoun === "I" && tense === "present") {
      return "am";
    } else if (pronoun === "You" && tense === "present") {
      return "are";
    } else if (pronoun === "He" && tense === "present") {
      return "is";
    } else if (pronoun === "She" && tense === "present") {
      return "is";
    } else if (pronoun === "We" && tense === "present") {
      return "are";
    } else if (pronoun === "They" && tense === "present") {
      return "are";
    } else if (pronoun === "It" && tense === "present") {
      return "is";
    } else if (pronoun === "I" && tense === "past") {
      return "was";
    } else if (pronoun === "You" && tense === "past") {
      return "were";
    } else if (pronoun === "He" && tense === "past") {
      return "was";
    } else if (pronoun === "She" && tense === "past") {
      return "was";
    } else if (pronoun === "It" && tense === "past") {
      return "was";
    } else if (pronoun === "They" && tense === "past") {
      return "were";
    } else if (pronoun === "We" && tense === "past") {
      return "were";
    } else if (pronoun === "I" && tense === "future") {
      return "will be";
    } else if (pronoun === "You" && tense === "future") {
      return "will be";
    } else if (pronoun === "He" && tense === "future") {
      return "will be";
    } else if (pronoun === "She" && tense === "future") {
      return "will be";
    } else if (pronoun === "It" && tense === "future") {
      return "will be";
    } else if (pronoun === "We" && tense === "future") {
      return "will be";
    } else if (pronoun === "They" && tense === "future") {
      return "will be";
    }
  };

  return (
    <Container>
      <ColumnTop>
        <BlockContainer border={ true }>
          { places && places.map(place => (
            <Image value={ place.word } img={ place.picUrl } onClick={ (e) => { selectPlaceHandle(e); } }>
              {/* <img src={ place.picUrl } /> */ }
            </Image>
          )) }
        </BlockContainer>
        <BlockContainer border={ true } noSideBorderRight={ true }>
          { subjectPronouns && subjectPronouns.map(pronoun => (
            <Image value={ pronoun.word } img={ pronoun.picUrl } onClick={ (e) => { selectPronounHandle(e); } }>
            </Image>
          )) }
        </BlockContainer>
        <BlockContainer border={ true }>
          <ExpressionsContainer>
            { showExpressions(selectTense) && showExpressions(selectTense).map((expr) => (
              <ExpressionList value={ expr.name } img1={ expr.pics[0] } img2={ expr.pics[1] } onClick={ (e) => { handleExpressionList(e); } }>
              </ExpressionList>
            )) }
          </ExpressionsContainer>
        </BlockContainer>
      </ColumnTop>
      <ColumnMiddle>
        <SentenceContainer>
          <SoundButton onClick={ listenSentenceHandle } />
          <Tag>{ selectPronoun && selectPronoun }</Tag>
          <Tag>{ selectPronoun && conjugatePronoun(selectPronoun, selectTense) }</Tag>
          <Tag>{ selectPlace && (`in the ${selectPlace}`) }</Tag>
          <Tag>{ selectExpression && selectExpression }</Tag>
          <Tag>{ formatTime(hour, minute) }</Tag>
        </SentenceContainer>
        <TimeLineContainer>
          <TimeLineArrow />
          { tenses && tenses.map((tense) => (
            <TimeLineMarksContainer>
              <TimeLineMarks highlighted={ chooseTense } value={ tense.tense } onClick={ (e) => { handleSelectTense(e); } } />
              <span>{ tense.tense }</span>
            </TimeLineMarksContainer>
          )) }
        </TimeLineContainer>
      </ColumnMiddle>
      <ColumnBottom>
        <BlockContainer>
          <AnalogueClock setHour={ setHour } setMinute={ setMinute } />
        </BlockContainer>
      </ColumnBottom>
    </Container>
  );
}
