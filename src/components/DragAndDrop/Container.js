import React from 'react';
import Board from './Board';
import Card from './Card';
import './styles.css';

function Container() {
  return (
    <div className="flexbox">
      <Board id="board-1" className="board">
        <Card id="card-2" className="card" draggable="true">
          <p>Card two</p>
        </Card>
        <Card id="card-1" className="card" draggable="true">
          <p>Card one</p>
        </Card>
      </Board>
      <Board id="board-2" className="board">
      </Board>
      <Board id="board-3" className="board">
      </Board>
    </div>
  );
}

export default Container;
