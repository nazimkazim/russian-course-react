import React, {useRef} from 'react';
import styled from 'styled-components';

const Clock = styled.div`
  width:100%;
  height:100%;
  display:flex;
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
`;

const Hr = styled.div`
  display:flex;
  justify-content:center;
  border-radius:50%;
  position:absolute;
  width:160px;
  height:160px;
  &:before {
    content:'';
    position:absolute;
    width:8px;
    height:80px;
    background:#848484;
    z-index:10;
    border-radius:6px 6px 0 0;
  }
`;

const Minute = styled.div`
  position:absolute;
  width:190px;
  height:190px;
`;

const Mn = styled.div`
  display:flex;
  justify-content:center;
  border-radius:50%;
  position:absolute;
  width:190px;
  height:190px;
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

const Second = styled.div`
  position:absolute;
`;


function AnalogueClock() {
  const hourRef = useRef()
  const dragHourArrow = () => {
    console.log('dragg')
    console.log(hourRef.current)
    hourRef.current.style.transform = `rotateZ(15deg)`
  }
  return (
    <Clock>
      <Hour>
        <Hr id="hr" ref={hourRef} onClick={(e) => {dragHourArrow(e)}}></Hr>
      </Hour>
      <Minute>
        <Mn></Mn>
      </Minute>
      <Second>
      </Second>
    </Clock>
  );
}

export default AnalogueClock;
