import React from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components';

const Lists = [
  {
    name: "Диаграма глагола Be (настоящее, прошлое, будущее)",
    description: 'На этом уроке вы поймете как работает глагол BE в Английском языке на интуитивном уровне с помощью диаграммы. В также выучите вокабуляр связанный с наименованиями мест, предлог in/at, и выражения времени, например last wweek, next month и так далее',
    link:'diagrams/be-verb'
  },
  {
    name: "Диаграма глагола Be (настоящее, прошлое, будущее)",
    description: 'На этом уроке вы поймете как работает глагол BE в Английском языке на интуитивном уровне с помощью диаграммы. В также выучите вокабуляр связанный с наименованиями мест, предлог in/at, и выражения времени, например last wweek, next month и так далее'
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
  padding:100px;
  background-color:${styles.bckColor};
`;

const ListContainer = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items:center;
  width:80vw;
  padding:100px;
  min-height:100vh;
  background-color:${styles.listContanerBckColor};
`;

const ListItem = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  margin-bottom:10px;
  max-width:80vw;
  padding:10px;
  min-height:100px;
  background-color:${styles.bckColor};
`;

export default function Diagrams() {
  return (
    <Container>
      <ListContainer>
        { Lists.map(item => (
          <ListItem>
            <span>{item.name }</span>
            <span>{item.description }</span>
            <Link to={item.link}>Перейти к диаграмме</Link>
          </ListItem>
        )) }
      </ListContainer>
    </Container>
  );
}
