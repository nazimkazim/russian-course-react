import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { beVerbQuestionsPracticeData1 } from '../../data/BeVerbQuestionsPractice';
import { speakStr } from '../Pronunciation';



const togglePronouns = (adjectivePronoun, subjectPronoun) => {
  const questions = [
    `What is ${adjectivePronoun} name?`,
    `How old is ${subjectPronoun}?`,
    `What is ${adjectivePronoun} age?`,
    `Where is ${subjectPronoun} from?`,
    `What is ${adjectivePronoun} profession?`,
    `What is ${adjectivePronoun} favourite food?`,
    `What is ${adjectivePronoun} hobby?`
  ];
  return questions;
};

const usefulPhrases = [
  {
    eng: 'I think it is',
    rus: 'Я думаю это'
  },
  {
    eng: 'I guess it is',
    rus: 'Я полагаю это'
  },
  {
    eng: `I don't know, but maybe it is`,
    rus: 'Я не знаю, но может быть это'
  }
];

const Content = styled.div`
  position:relative;
  width:50%;
  left:20%;
  padding:20px 20px 20px 40px;
  transition:0.5s;
  opacity:0;
  visibility:hidden;
`;

const Card = styled.div`
  position:relative;
  width:600px;
  height:350px;
  margin:20px;
  display:flex;
  justify-content:flex-start;
  align-items:center;
  border-radius:20px;
  background:linear-gradient(135deg, #d41e31, #491f8f);
  & img {
    position:absolute;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    height:300px;
    transition:0.5s;
  }

  &:hover img {
    left:90%;
    height:400px;
  }

  &:hover ${Content} {
    left:0%;
    opacity:1;
    visibility:visible;
  }
`;

const Header = styled.h2`
  color:#fff;
  text-transform:uppercase;
  font-size:2.2em;
  lineheight:1em;
`;

const Item = styled.span`
  color:#fff;
  font-size:1.3em;
  display:block;
`;


const QuestionsContainer = styled.div`
  position:relative;
  margin-right:10px;
  width:600px;
  height:350px;
  background-color:blue;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  border-radius:20px;
  background:linear-gradient(135deg, #d41e31, #491f8f);
`;

const PronounsTable = styled.div`
  position:relative;
  margin-right:10px;
  width:300px;
  height:350px;
  background-color:blue;
  display:flex;
  justify-content:space-around;
  align-items:center;
  padding:10px;
  border-radius:20px;
  background:linear-gradient(135deg, #d41e31, #491f8f);
`;

const Section = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
  width:100%;
  height:100%;
  background:#AFAFDC;
  border-radius:20px;
  overflow:hidden;
`;

const PTItem = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  padding:10px;
  /* background-color:lightgray; */
  width:100%;
  font-size:1.4em;
  margin-bottom:5px;
  border-bottom:1px solid #B7D3F2;
`;

const PTItemPhraseEng = styled.span`
  cursor:pointer;
  color:black;
  padding:3px;
  background-color:#B7D3F2;
  border-radius:3px;
  border:1px solid black;
`;

const PTItemPhraseRus = styled.span`
  cursor:pointer;
  color:black;
  padding:3px;
  background-color:#B7D3F2;
  border-radius:3px;
  border:1px solid black;
`;

const Cover = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  position:absolute;
  border-radius:20px;
  top:0;
  left:0;
  opacity:1;
  transition:1s ease-in-out;
  transform:${props => (props.expanded ? 'scaleX(0)' : 'scaleX(1)')};
  width:600px;
  height:350px;
  background:linear-gradient(135deg, #d41e31, #491f8f);
  & p {
    font-size:2.3em;
    color:#fff;
    font-weight:bold;
    visibility:${props => (!props.expanded ? 'visible' : 'hidden')};
  }
`;
const Question = styled.span`
  cursor:pointer;
  color:#fff;
  font-size:1.8em;
  font-weight:bold;
  transition: 3s;
  &:hover {
    color:lightgray;
    text-decoration:underline;
  }
`;

const ToggleCover = styled.button`
  cursor:pointer;
  position:absolute;
  width:50px;
  border-radius:50%;
  border:none;
  outline:none;
  height:50px;
  background:transparent;
  top:5px;
  left:5px;
  transition:0.8s;
  -webkit-box-shadow: -1px 2px 5px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: -1px 2px 5px 0px rgba(0,0,0,0.75);
  box-shadow: -1px 2px 5px 0px rgba(0,0,0,0.75);
  &:hover {
    -webkit-box-shadow: -1px 7px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: -1px 7px 5px 0px rgba(0,0,0,0.75);
    box-shadow: -1px 7px 5px 0px rgba(0,0,0,0.75);
  }
`;

const DotsContainer = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  position:absolute;
  min-width:100px;
  min-height:20px;
  background-color:#879AE4;
  border-radius:30px;
  top:3px;
  left:20px;
  padding:3px;
  z-index:100;
`;

const Dot = styled.div`
  cursor:pointer;
  width:10px;
  height:10px;
  background-color:white;
  border-radius:50%;
  margin-right:5px;
`;




function Index() {
  const [expandQuestions, setExpandQuestions] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);


  console.log(expandQuestions);

  return (
    <>
      <PronounsTable>
        <Section>
          { usefulPhrases.map((item, idx) => (
            <PTItem key={ idx }>
              <PTItemPhraseEng onClick={ () => { speakStr(item.eng, 'en-En'); } }>{ item.eng }</PTItemPhraseEng>
              - <PTItemPhraseRus onClick={ () => { speakStr(item.rus, 'ru-RU'); } }>{ item.rus }</PTItemPhraseRus>
            </PTItem>
          )) }
        </Section>
      </PronounsTable>
      <QuestionsContainer>
        <Cover expanded={ expandQuestions }><p>Ask and answer the questions</p></Cover>
        <ToggleCover onClick={ e => setExpandQuestions(expandQuestions => !expandQuestions) }>T</ToggleCover>
        { togglePronouns(beVerbQuestionsPracticeData1[currentIdx].pronouns[0], beVerbQuestionsPracticeData1[currentIdx].pronouns[1]).map((question, i) => (
          <Question value={ question } key={ i } onClick={ (e) => speakStr(question) }>{ question }</Question>
        )) }
      </QuestionsContainer>
      <Card>
        <DotsContainer>
          { beVerbQuestionsPracticeData1.map((dot, idx) => (
            <Dot key={ idx } onClick={ () => { setCurrentIdx(idx); } }></Dot>
          )) }
        </DotsContainer>
        <Content>
          <Header>{ beVerbQuestionsPracticeData1[currentIdx].name } { beVerbQuestionsPracticeData1[currentIdx].surname }</Header>
          <Item><strong>Age:</strong> { beVerbQuestionsPracticeData1[currentIdx].age }</Item>
          <Item><strong>Country:</strong> { beVerbQuestionsPracticeData1[currentIdx].country }</Item>
          <Item><strong>Profession:</strong> { beVerbQuestionsPracticeData1[currentIdx].profession }</Item>
          <Item><strong>Favourite food:</strong> { beVerbQuestionsPracticeData1[currentIdx].food.map((food, i) => (
            <small key={ i }>{ food }{ " " }</small>
          )) }</Item>
          <Item><strong>Hobbies:</strong> { beVerbQuestionsPracticeData1[currentIdx].hobbies.map((hobby, i) => (
            <small key={ i }>{ hobby }{ " " }</small>
          )) }
          </Item>
        </Content>
        <img src={ beVerbQuestionsPracticeData1[currentIdx].image } />
      </Card>
    </>
  );
}

export default Index;
