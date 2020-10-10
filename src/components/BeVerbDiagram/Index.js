import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

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
  margin-top:30px;
  width:100%;
  height:100%;
  background-color:brown;
`;

const ExpressionList = styled.li`
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
  min-width:100px;
  min-height:30px;
  padding:10px;
  background-color:white;
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




export default function Index({ data }) {
  const [places, setPlaces] = useState(null);
  const [subjectPronouns, setSubjectPronouns] = useState(null);
  const [tenses, setTenses] = useState(null);
  const [selectPlace, setSelectPlace] = useState('');
  const [selectPronoun, setSelectPronoun] = useState('');
  const [selectTense, setSelectTense] = useState('');

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
  };

  const selectPronounHandle = (e) => {
    e.preventDefault();
    //console.log(e.target.value);
    setSelectPronoun(e.target.value);
  };

  const handleSelectTense = (e) => {
    e.preventDefault();
    setSelectTense(e.target.value);
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

  //console.log(showExpressions())

  const conjugatePronoun = (pronoun) => {
    switch (pronoun) {
      case "I":
        return "I am";
      case "You":
        return "You are";
      case "He":
        return "He is";
      case "She":
        return "She is";
      case "It":
        return "It is";
      case "We":
        return "We are";
      case "They":
        return "They are";
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
              {/* <img src={ place.picUrl } /> */ }
            </Image>
          )) }
        </BlockContainer>
        <BlockContainer>
          <ExpressionsContainer>
            { showExpressions(selectTense) && showExpressions(selectTense).map((expr) => (
              <ExpressionList>
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
        <SentenceContainer>{ selectPronoun && conjugatePronoun(selectPronoun) } { " " } { selectPlace && (`in the ${selectPlace}`) }</SentenceContainer>
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

    </Container>
  );
}
