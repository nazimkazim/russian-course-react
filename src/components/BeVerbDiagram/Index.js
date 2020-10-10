import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { speak } from '../Pronunciation';

const Container = styled.div`
  display:flex;
  flex-direction:column;
  width:900px;
  height:900px;
  /* background-color:blue; */
`;

const ColumnTop = styled.div`
  display:flex;
  width:100%;
  height:33.3333%;
  background-color:yellow;
`;

const ColumnMiddle = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width:100%;
  height:33.3333%;
  background-color:yellow;
`;

const ColumnBottom = styled.div`
  display:flex;
  width:100%;
  height:33.3333%;
  background-color:yellow;
`;

const BlockContainer = styled.div`
  display:flex;
  flex-wrap:wrap;
  width:33.3333%;
  height:100%;
  /* background-color:red; */
`;

const ExpressionsContainer = styled.ul`
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items:center;
  margin-top:10px;
  width:100%;
  height:100%;
  background-color:brown;
`;

const ExpressionList = styled.button`
  display:flex;
  justify-content:flex-start;
  align-items:center;
  width:90%;
  height:auto;
  padding:10px;
  background-color:grey;
  margin-bottom:3px;
`;

const ExprImgContainer = styled.div`
  display:flex;
  width:auto;
  height:100%;
  background-color:blue;
  padding:5px;
  & > img {
    width:30px;
    cursor:pointer;
  }

`;

const Image = styled.button`
  display:flex;
  flex:1 1 70px;
  height:auto;
  background-color:white;
  background-image:url(${props => props.img});
  background-repeat: no-repeat;
  background-size: 60px 60px;
  background-position: center;
`;

const SentenceContainer = styled.div`
  display:flex;
  align-items:center;
  min-width:100px;
  min-height:30px;
  padding:10px;
  background-color:white;
  margin-bottom:10px;
`;

const TimeLineContainer = styled.div`
  position:relative;
  display:flex;
  align-items:center;
  justify-content:space-around;
  margin-top:10px;
  width:500px;
  height:16px;
  background-color:red;
`;

const TimeLineArrow = styled.div`
  position:absolute;
  width:100%;
  height:3px;
  background-color:blue;
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

const TimeLineMarks = styled.button`
  z-index:3;
  width:30px;
  height:30px;
  border-radius:50%;
  background-color:white;
`;

const SoundButton = styled.button`
  width:20px;
  height:20px;
  background-color:black;
`;




export default function Index({ data }) {
  const [places, setPlaces] = useState(null);
  const [subjectPronouns, setSubjectPronouns] = useState(null);
  const [tenses, setTenses] = useState(null);
  const [selectPlace, setSelectPlace] = useState('');
  const [selectPronoun, setSelectPronoun] = useState('');
  const [selectTense, setSelectTense] = useState('');
  const [selectExpression, setSelectExpression] = useState('');

  useEffect(() => {
    setPlaces(data.places);
    setSubjectPronouns(data.subjectPronouns);
    setTenses(data.tenses);
  }, [places, subjectPronouns, tenses]);

  console.log(tenses);
  console.log(selectTense);

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

  const listenSentenceHandle = () => {
    const str = conjugatePronoun(selectPronoun, selectTense);
  };

  //console.log(showExpressions())

  const conjugatePronoun = (pronoun, tense) => {
    if (pronoun === "I" && tense === "present") {
      return "I am";
    } else if (pronoun === "You" && tense === "present") {
      return "You are";
    } else if (pronoun === "He" && tense === "present") {
      return "He is";
    } else if (pronoun === "She" && tense === "present") {
      return "She is";
    } else if (pronoun === "We" && tense === "present") {
      return "We are";
    } else if (pronoun === "They" && tense === "present") {
      return "They are";
    } else if (pronoun === "It" && tense === "present") {
      return "It is";
    } else if (pronoun === "I" && tense === "past") {
      return "I was";
    } else if (pronoun === "You" && tense === "past") {
      return "You were";
    } else if (pronoun === "He" && tense === "past") {
      return "He was";
    } else if (pronoun === "She" && tense === "past") {
      return "She was";
    } else if (pronoun === "It" && tense === "past") {
      return "It was";
    } else if (pronoun === "They" && tense === "past") {
      return "They were";
    } else if (pronoun === "We" && tense === "past") {
      return "We were";
    } else if (pronoun === "I" && tense === "future") {
      return "I will be";
    } else if (pronoun === "You" && tense === "future") {
      return "You will be";
    } else if (pronoun === "He" && tense === "future") {
      return "He will be";
    } else if (pronoun === "She" && tense === "future") {
      return "She will be";
    } else if (pronoun === "It" && tense === "future") {
      return "It will be";
    } else if (pronoun === "We" && tense === "future") {
      return "We will be";
    } else if (pronoun === "They" && tense === "future") {
      return "They will be";
    }
  };

  return (
    <Container>
      <ColumnTop>
        <BlockContainer>
          { places && places.map(place => (
            <Image value={ place.word } img={ place.picUrl } onClick={ (e) => { selectPlaceHandle(e); } }>
              {/* <img src={ place.picUrl } /> */ }
            </Image>
          )) }
        </BlockContainer>
        <BlockContainer>
          { subjectPronouns && subjectPronouns.map(pronoun => (
            <Image value={ pronoun.word } img={ pronoun.picUrl } onClick={ (e) => { selectPronounHandle(e); } }>
            </Image>
          )) }
        </BlockContainer>
        <BlockContainer>
          <ExpressionsContainer>
            { showExpressions(selectTense) && showExpressions(selectTense).map((expr) => (
              <ExpressionList value={ expr.name } onClick={ (e) => { handleExpressionList(e); } }>
                <ExprImgContainer>
                  <img src={ expr.pics[0] } /> <img src={ expr.pics[1] } />
                </ExprImgContainer>
                { expr.name }
              </ExpressionList>
            )) }
          </ExpressionsContainer>
        </BlockContainer>
      </ColumnTop>
      <ColumnMiddle>
        <SentenceContainer>
          <SoundButton onClick={ listenSentenceHandle } />
          { selectPronoun && conjugatePronoun(selectPronoun, selectTense) } { " " } { selectPlace && (`in the ${selectPlace}`) } { selectExpression && selectExpression }
        </SentenceContainer>
        <TimeLineContainer>
          <TimeLineArrow />
          { tenses && tenses.map((tense) => (
            <TimeLineMarksContainer>
              <TimeLineMarks value={ tense.tense } onClick={ (e) => { handleSelectTense(e); } } />
              <span>{ tense.tense }</span>
            </TimeLineMarksContainer>
          )) }
        </TimeLineContainer>
      </ColumnMiddle>
      <ColumnBottom>
            <BlockContainer>
              hf
            </BlockContainer>
      </ColumnBottom>
    </Container>
  );
}
