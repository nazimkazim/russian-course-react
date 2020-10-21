import React, { useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { beVerbQuestionsPracticeData1 } from '../../data/BeVerbQuestionsPractice';
import { speak, speakStr } from '../Pronunciation';



const togglePronouns = (adjectivePronoun, subjectPronoun) => {
  const questions = [
    `What is ${adjectivePronoun} name?`,
    `How old is ${subjectPronoun}?`,
    `What is ${adjectivePronoun} age?`,
    `What is ${adjectivePronoun} profession?`,
    `What is ${adjectivePronoun} favourite food?`,
    `What is ${adjectivePronoun} hobby?`
  ];
  return  questions
};


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

const expand = keyframes`
  from {
    transform: scale(0.1)
  }

  to {
    transform: scale(1)
  }
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
  width:600px;
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
  width:48%;
  height:100%;
  background:#fff;
  border-radius:20px;
`

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
  background:grey;
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


function Index() {
  const [expandQuestions, setExpandQuestions] = useState(false);


  console.log(expandQuestions);

  return (
    <>
      <PronounsTable>
        <Section>

        </Section>
        <Section>

        </Section>
      </PronounsTable>
      <QuestionsContainer>
        <Cover expanded={ expandQuestions }><p>Ask and answer the questions</p></Cover>
        <ToggleCover onClick={ e => setExpandQuestions(expandQuestions => !expandQuestions) }>T</ToggleCover>
        { togglePronouns('his', 'he').map((question, i) => (
          <Question value={ question } key={ i } onClick={ (e) => speakStr(question) }>{ question }</Question>
        )) }
      </QuestionsContainer>
      <Card>
        <Content>
          <Header>{ beVerbQuestionsPracticeData1[0].name } { beVerbQuestionsPracticeData1[0].surname }</Header>
          <Item><strong>Age:</strong> { beVerbQuestionsPracticeData1[0].age }</Item>
          <Item><strong>Country:</strong> { beVerbQuestionsPracticeData1[0].country }</Item>
          <Item><strong>Profession:</strong> { beVerbQuestionsPracticeData1[0].profession }</Item>
          <Item><strong>Favourite food:</strong> { beVerbQuestionsPracticeData1[0].food.map((food, i) => (
            <small key={ i }>{ food }{ " " }</small>
          )) }</Item>
          <Item><strong>Hobbies:</strong> { beVerbQuestionsPracticeData1[0].hobbies.map((hobby, i) => (
            <small key={ i }>{ hobby }{ " " }</small>
          )) }
          </Item>
        </Content>
        <img src={ beVerbQuestionsPracticeData1[0].image } />
      </Card>
    </>
  );
}

export default Index;
