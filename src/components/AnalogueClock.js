import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';

const Clock = styled.div`
  width:100%;
  height:100%;
  display:flex;
  position:relative;
  justify-content:center;
  align-items:center;
  background:#fff url('https://res.cloudinary.com/nzmai/image/upload/v1602513284/be-verb-diagram/clock.png');
  background-size:cover;
  border-radius:50%;
  border:2px solid #fff;
  box-shadow:inset 0 0 30px rgba(0,0,0,0.1), 0 20px 20px rgba(0,0,0,0.2), 0 0 4px rgba(255,255,255,1);
  &::before {
    content:'';
    position:absolute;
    width:15px;
    height:15px;
    background:#848484;
    border:2px solid #fff;
    z-index:10000;
    border-radius:50%;
  }
`;

const Hour = styled.div`
  position:absolute;
  width:160px;
  height:160px;
  display:flex;
  justify-content:center;
  pointer-events: none; 
`;

const Hr = styled.div`
  display:flex;
  justify-content:center;
  border-radius:50%;
  position:absolute;
  top:80px;
  pointer-events: auto; 
  transition: all 0.3s ease-out;
  transform: ${props => (props.deg && `rotate(${props.deg}deg)`)};
  &:before {
    content:'';
    position:absolute;
    width:8px;
    height:80px;
    background:#848484;
    z-index:10;
    border-radius:6px 6px 0 0;
    &:hover {
      background-color:yellow;
    }
  }
`;

const Minute = styled.div`
  position:absolute;
  width:190px;
  height:190px;
  display:flex;
  justify-content:center;
  pointer-events: none; 

`;

const Mn = styled.div`
  display:flex;
  justify-content:center;
  border-radius:50%;
  position:absolute;
  top:90px;
  pointer-events: auto; 
  transition: all 0.3s ease-out;
  transform: ${props => (props.deg && `rotate(${props.deg}deg)`)};
  &:before {
    content:'';
    position:absolute;
    width:4px;
    height:90px;
    background:#d6d6d6;
    z-index:11;
    border-radius:6px 6px 0 0;
  }
`;

function AnalogueClock({setHour}) {
  const [hourArrowRotation, setHourArrowRotation] = useState(180);
  const [hourCounter, setHourCounter] = useState(0);
  const [minuteArrowRotation, setMinuteArrowRotation] = useState(180);
  const [mouseIsDown, setMouseIsDown] = useState(false);

  const hours = ["twelve","one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven"]
  const minutes = ["","five", "ten", "fifteen", "twenty", "twenty five", "thirty", "thirty five", "forty", "forty five", "fifty", "fifty five"] 
  
  useEffect(() => {
    setHourCounter(0)
    setHour(hours[hourCounter])
  }, [])

  //console.log(hourArrowRotation % 180, minuteArrowRotation % 180)
  console.log(hours[hourCounter])

  return (
    <Clock>
      <Hour>
        <Hr id="hr" deg={ hourArrowRotation } onClick={ () => { 
          setHourArrowRotation(hourArrowRotation + 30)
          setHourCounter(hourCounter + 1)
          setHour(hours[hourCounter])
        } }></Hr>
      </Hour>
      <Minute>
        <Mn  id="mn" deg={ minuteArrowRotation } onClick={ () => {
          setMouseIsDown(true)
          if (mouseIsDown) setMinuteArrowRotation(minuteArrowRotation + 30)
        } }></Mn>
      </Minute>
    </Clock>
  );
}

export default AnalogueClock;
