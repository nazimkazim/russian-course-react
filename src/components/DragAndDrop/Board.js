import React, { useState } from 'react';
import styled from 'styled-components';

function Board(props) {
  const [cards, setCards] = useState([]);

  console.log(cards);
  const drop = e => {
    e.preventDefault();
    const card_id = e.dataTransfer.getData('card_id');
    const card = document.getElementById(card_id);
    card.style.display = 'block';
    e.target.appendChild(card);
    setCards([...cards, card_id]);
  };

  const dragOver = e => {
    e.preventDefault();
  };
  return (
    <div id={ props.id } onDrop={ drop } onDragOver={ dragOver } className={ props.className }>
      {props.children }
    </div>
  );
}

export default Board;
