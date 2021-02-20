import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
  display: flex;
  padding: 5px 5px;
  align-items:center;
  background-color: #f3f3f3;
  cursor: pointer;
  margin-bottom: 5px;
  border-radius: 3px;
  width:100%;
  > img {
    width:20px;
    height:20px;
    margin-right:5px;
  }
`;

function Card({ id, className, draggable, isCorrect, children, isNotCorrect }) {
  let drop = new Audio('https://res.cloudinary.com/nzmai/video/upload/v1611066440/russian%20course/Sound/sound_ex_machina_Button_Tick.mp3')
  const dragStart = e => {
    const target = e.target;
    //console.log(target.dataset.type);
    e.dataTransfer.setData('card_id', target.id);
    setTimeout(() => {
      target.style.display = 'none';
    }, 0);
    drop.play()
  };

  const dragOver = e => {
    e.stopPropagation();
  };
  return (
    <Root id={ id } onDragStart={ dragStart } onDragOver={ dragOver } className={ className } draggable={ draggable }>
      {isCorrect ? <img src='https://res.cloudinary.com/nzmai/image/upload/v1611065237/russian%20course/general/checked.png' /> : <img src='https://res.cloudinary.com/nzmai/image/upload/v1610789164/russian%20course/general/cursor.png' /> && isNotCorrect ? <img src='https://res.cloudinary.com/nzmai/image/upload/v1611065236/russian%20course/general/cancel.png' /> : <img src='https://res.cloudinary.com/nzmai/image/upload/v1610789164/russian%20course/general/cursor.png' /> }
      {children }
      { }
    </Root>
  );
}

export default Card;
