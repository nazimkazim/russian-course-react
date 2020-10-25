import React from 'react';
import styled from 'styled-components';
import { speak } from '../Pronunciation';
const ReactMarkdown = require('react-markdown');


const Header = styled.div`
  width:auto;
  height:auto;
  & > p {
    font-size:26px;
    font-weight:semi-bold;
  }
`;

const SubjectPronounWrapper = styled.button`
  width:auto;
  height:auto;
  padding:3px;
  background: transparent;
  background-color:#A8DADC;
  margin-right:5px;
  cursor:pointer;
  border:0;
  outline:none;
  border-radius:2px;
`;

const Container = styled.ul`
  display:flex;
  flex-direction:column;
  align-items:center;
  width:100%;
  min-height:auto;
  /* background-color:red; */
  padding:10px;
  border-radius:20px;
  border:2px solid #F1FAEE;
`;

const Item = styled.li`
  display:flex;
  align-items:center;
  width:100%;
  height:auto;
  padding:2px;
  /* background-color:blue; */
  margin-bottom:2px;
  border-radius:5px;
  border-bottom:2px solid #F1FAEE;
  cursor:pointer;
`;

export default function VerbConjugationTemplate({ set }) {
  return (
    <Container>
      <Header>
        <ReactMarkdown source={ set.verb } escapeHtml={ false } />
        <small>{set.tense}</small>
      </Header>
      {set.set.map((s, i) => (
        <Item key={ s + i }>
          <SubjectPronounWrapper value={ s } onClick={ (e) => { speak(e, 'ru-RU'); } }>{ s.split(" ")[0] }</SubjectPronounWrapper>
          <ReactMarkdown style={ { fontSize: '20px' } } source={ s.split(" ")[1] && s.split(" ")[1] } escapeHtml={ false } />
        </Item>
      )) }
    </Container>
  );
}

