import React from 'react';
import styled from 'styled-components'

const Root = styled.div`
  display: flex;
  padding: 5px 5px;
  align-items:center;
  background-color: #f3f3f3;
  cursor: pointer;
  margin-bottom: 5px;
  border-radius: 3px;
  > img {
    width:20px;
    height:20px;
    margin-right:5px;
  }
`

function Card(props) {
  const dragStart = e => {
    const target = e.target;
    //console.log(target.dataset.type);
    e.dataTransfer.setData('card_id', target.id);
    setTimeout(() => {
      target.style.display = 'none';
    }, 0);
  };

  const dragOver = e => {
    e.stopPropagation();
  };
  return (
    <Root id={ props.id } onDragStart={ dragStart } onDragOver={ dragOver } className={ props.className } draggable={ props.draggable }>
      <img src='https://res.cloudinary.com/nzmai/image/upload/v1610789164/russian%20course/general/cursor.png'/>{props.children }
    </Root>
  );
}

export default Card;
