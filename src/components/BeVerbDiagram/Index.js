import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display:flex;
  flex-direction:column;
  width:900px;
  height:900px;
  background-color:blue;
`;

const ColumnTop = styled.div`
  display:flex;
  width:100%;
  height:33.3333%;
  background-color:yellow;
`;

const ColumnMiddle = styled.div`
  display:flex;
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
  background-color:red;
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




export default function Index({ data }) {
  const [places, setPlaces] = useState(null);
  const [subjectPronouns, setSubjectPronouns] = useState(null);
  const [selectPlace, setSelectPlace] = useState('');
  const [selectPronoun, setSelectPronoun] = useState('');
  useEffect(() => {
    setPlaces(data.places);
    setSubjectPronouns(data.subjectPronouns);
  }, [places, subjectPronouns]);

  //console.log(subjectPronouns);

  const selectPlaceHandle = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setSelectPlace(e.target.value);
  };

  const selectPronounHandle = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setSelectPronoun(e.target.value);
  };

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
      </ColumnTop>
      <ColumnMiddle>
        <div>{ selectPronoun && conjugatePronoun(selectPronoun) } { " " } { selectPlace && (`in the ${selectPlace}`) }</div>
      </ColumnMiddle>

    </Container>
  );
}
