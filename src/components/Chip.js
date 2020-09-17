import React, { useState } from 'react';


export default function ChipComponent(props) {
  

  const handleClick = (e) => {
    e.preventDefault();
    props.setSelectedWord(e.target.value);
  };
  
  return (
    <>
      <button className="custom-chip" value={ props.label } onClick={ handleClick }>{ props.label }</button>
    </>
  );
}