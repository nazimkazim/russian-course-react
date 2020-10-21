import React, {useState} from 'react';
import styled, { css, keyframes } from 'styled-components';
import { beVerbQuestionsPracticeData1 } from '../../data/BeVerbQuestionsPractice';


const questions = [
  'What is your / his / her name?',
  'How old is he / she?',
  'What is his / her age?',
  'What is his / her profession?',
  'What is his / her favourite food?',
  'What is his / her hobby?'
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

const Cover = styled.div`
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
`
const Question = styled.span`
  color:#fff;
  font-size:1.8em;
  font-weight:bold;
  transition: 3s;
`

const ToggleCover = styled.button`
  cursor:pointer;
  position:absolute;
  width:50px;
  border-radius:50%;
  border:none;
  outline:none;
  height:50px;
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
`


function Index() {
  const [expandQuestions, setExpandQuestions] = useState(false)
  

  console.log(expandQuestions)

  return (
    <>
      <QuestionsContainer>
        <Cover expanded={expandQuestions}/>
        <ToggleCover onClick={e => setExpandQuestions(expandQuestions => !expandQuestions)}>Cl</ToggleCover>
        {questions.map((question, i) => (
          <Question key={i}>{question}</Question>
        ))}
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
