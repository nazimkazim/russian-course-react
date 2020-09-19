import React, { useState } from 'react';


export default function ChipComponent(props) {

  const handleClick = (e) => {
    e.preventDefault();
    props.setSelectedWord(e.target.value);
    //console.log(props.engPhrases);
    let newData = [...props.engPhrases].map((item) => {
      if (item.word === e.target.value) {
        return Object.assign({}, item, { active: true });
      } else {
        return Object.assign({}, item, { active: false });
      }
    });
    props.setMixedEngPhrases(newData)
  };

  return (
    <>
      <button disabled={ props.correctAnswer } className={ `custom-chip ${props.active && 'active'}` } value={ props.label } onClick={ handleClick }>{ props.label }</button>
    </>
  );
}

//const newitems = [...items].map(el => (el.id === id ? Object.assign({}, el, { turned:!el.turned }) : el))