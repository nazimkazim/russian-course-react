import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Lists = [
  {
    name: "Диаграма глагола Be (настоящее, прошлое, будущее)",
    description: 'На этом уроке вы поймете как работает глагол BE в Английском языке на интуитивном уровне с помощью диаграммы. В также выучите вокабуляр связанный с наименованиями мест, предлог in/at, и выражения времени, например last wweek, next month и так далее',
    link: 'diagrams/be-verb'
  },
  {
    name: "Диаграма глагола Be (настоящее, прошлое, будущее)",
    description: 'На этом уроке вы поймете как работает глагол BE в Английском языке на интуитивном уровне с помощью диаграммы. В также выучите вокабуляр связанный с наименованиями мест, предлог in/at, и выражения времени, например last wweek, next month и так далее',
    link:'diagrams/be-verb-practice-questions'
  }
];

const styles = {
  bckColor: 'white',
  listContanerBckColor: 'grey'
};

const Container = styled.div`
  display:flex;
  justify-content:center;
  align-items:flex-start;
  width:100vw;
  min-height:100vh;
  margin-top:100px;
`;

const Title = styled.span`
  font-size:24px;
  font-weight:bold;
  color:white;
`

const Description = styled.span`
  font-size:16px;
  color:white;
`

const Button = styled.button`
  cursor:pointer;
  padding:10px;
  margin-top:10px;
  border-radius:8px;
  outline:none;
  border:none;
  background: #4246af;
  color:white;
  font-size:16px;
  font-weight:bold;
  text-transform:uppercase;
  -webkit-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
  box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
  &:hover {
    transform:scale(1.01);
    transition:8s ease-in-out;
  }
`

const ListContainer = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items:center;
  width:80vw;
  min-height:100vh;
  /* background-color:${styles.listContanerBckColor}; */
`;

const ListItem = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  margin-bottom:10px;
  max-width:80vw;
  padding:30px;
  min-height:100px;
  -webkit-box-shadow: 2px 0px 7px 3px rgba(199,191,199,0.86);
  -moz-box-shadow: 2px 0px 7px 3px rgba(199,191,199,0.86);
  box-shadow: 2px 0px 7px 3px rgba(199,191,199,0.86);
  border-radius: 29px 29px 29px 29px;
  -moz-border-radius: 29px 29px 29px 29px;
  -webkit-border-radius: 29px 29px 29px 29px;
  border: 0px outset #000000;
  background: rgb(235,15,15);
  background: linear-gradient(90deg, rgba(235,15,15,1) 0%, rgba(37,35,175,0.6923144257703081) 100%);
`;

export default function Diagrams() {
  return (
    <Container>
      <ListContainer>
        { Lists.map(item => (
          <ListItem>
            <Title>{ item.name }</Title>
            <Description>{ item.description }</Description>
            <Link to={ item.link }><Button>Перейти к диаграмме</Button></Link>
          </ListItem>
        )) }
      </ListContainer>
    </Container>
  );
}
