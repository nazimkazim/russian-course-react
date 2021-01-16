import React, { useState } from 'react';
import styled from 'styled-components';

const Root = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  max-width: 300px;
  height: 100%;
  background-color: #28151E;
  padding: 15px;
  overflow:'scroll';
  margin-left: 5px;
  margin-right: 5px;
  -webkit-box-shadow: -5px 0px 3px -2px rgba(46, 33, 46, 1);
  -moz-box-shadow: -5px 0px 3px -2px rgba(46, 33, 46, 1);
  box-shadow: -5px 0px 3px -2px rgba(46, 33, 46, 1);
  border-radius: 3px;
`
function Board(props) {
  // const [cards, setCards] = useState([]);
  // console.log({cards}, props.set);

  const drop = e => {
    e.preventDefault();
    const card_id = e.dataTransfer.getData('card_id');
    const card = document.getElementById(card_id);
    card.style.display = 'flex';
    e.target.appendChild(card);
    // setCards([...cards, card_id]);
    props.handleCardAppend(card_id);
  };

  const dragOver = e => {
    e.preventDefault();
  };
  return (
    <Root id={ props.id } onDrop={ drop } onDragOver={ dragOver } className={ props.className }>
      {props.children }
      
    </Root>
  );
}

export default Board;
