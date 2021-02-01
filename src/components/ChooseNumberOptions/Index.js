import React from 'react';
import { speakStr } from '../Pronunciation';
import ReactHtmlParser from 'react-html-parser';
import styled from 'styled-components';
const image = 'https://res.cloudinary.com/nzmai/image/upload/v1612020411/russian%20course/general/sound-waves.png';
const _ = require('lodash');

const Container = styled.div`
  position:relative;
  display:flex;
  flex-direction:column;
  align-items:center;
  width:100%;
  /* background-color:red; */
  height:300px;
  min-height:300px;
  border-radius:16px;
  margin-top:${props => props.marginTop}px;
  -webkit-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
  box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
`;
const TopStripe = styled.div`
  position:relative;
  display:flex;
  align-items:center;
  justify-content:center;
  /* background-color:red; */
  width:100%;
  min-height:40px;
  font-size:60px;
  /* border-bottom:3px solid #59a5d8; */
  -webkit-box-shadow: 0px 2px 4px -2px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 2px 4px -2px rgba(0,0,0,0.75);
  box-shadow: 0px 2px 4px -2px rgba(0,0,0,0.75);
`;

const TopStripeBottomBorder = styled.div`
  position:absolute;
  bottom:0;
  left:0;
  width:${props => props.barWidth}%;
  height:2px;
  background-color:#59a5d8;
`;

const OptionsContainer = styled.div`
  display:flex;
  width:40%;
  justify-content:space-evenly;
  align-items:center;
  height:calc(100% - 60px);
  /* background-color:red; */
`;

const ButtonOption = styled.button`
  display:flex;
  justify-content:center;
  align-items:center;
  width:60px;
  height:60px;
  border-radius:6px;
  border:none;
  /* background-color:#1d3557; */
  cursor:pointer;
  border:${props => props.clicked && '2px solid #1d3557'};
  background-repeat: no-repeat;
  background-size: 30px 30px;
  background-position: center;
  &&:focus {
    outline:0;
  }
  background-image:url(${props => props.icon});
  -webkit-box-shadow: 0px 2px 4px -2px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 2px 4px -2px rgba(0,0,0,0.75);
  box-shadow: 0px 2px 4px -2px rgba(0,0,0,0.75);
`;

const Button = styled.button`
  display:flex;
  align-items:center;
  justify-content:center;
  cursor:pointer;
  text-transform:uppercase;
  padding:10px 10px;
  background-color:#D7FFF1;
  border-radius:6px;
  border:none;
  &&:focus {
    outline:0;
  }
  &&:hover {
    background-color:#F5F5F5;
  }
`;

const ButtonsSections = styled.div`
  display:flex;
  cursor:pointer;
  justify-content:center;
  align-items:center;
  width:100%;
  height:80px;
  background-color:#14C3E3;
  border-bottom-left-radius:16px;
  border-bottom-right-radius:16px;
  -webkit-box-shadow: 0px 0px 4px 0px rgba(13,13,13,1);
  -moz-box-shadow: 0px 0px 4px 0px rgba(13,13,13,1);
  box-shadow: 0px 0px 4px 0px rgba(13,13,13,1);
  & ${Button}:nth-child(1) {
    margin-right:10px;
  }
`;

const WinTitle = styled.p`
  font-size:24px;
  font-weight:bold;
  color:#775144;
  padding:35px 0px;
  text-transform:uppercase;
`;

function Index({ data, marginTop }) {
  const [index, setIndex] = React.useState(0);
  const [options, setOptions] = React.useState([]);
  const [clicked, setClicked] = React.useState('');
  const [answerIsTrue, setAnswerIsTrue] = React.useState(false);
  const [barWidth, setBarwidth] = React.useState(0);
  const [incorrect, setIncorrect] = React.useState(false);
  const soundWin = new Audio('https://res.cloudinary.com/nzmai/video/upload/v1611066674/russian%20course/Sound/little_robot_sound_factory_Jingle_Win_Synth_00.mp3');
  const soundClick = new Audio('https://res.cloudinary.com/nzmai/video/upload/v1611066440/russian%20course/Sound/sound_ex_machina_Button_Tick.mp3');
  const denied = new Audio('https://res.cloudinary.com/nzmai/video/upload/v1612193861/russian%20course/Sound/denied_lkposi.mp3')

  React.useEffect(() => {
    let optionsArr = [];
    if (data[index]) {
      optionsArr.push(data[index].num);
      let filtered = data.filter(item => item.num !== data[index].num);
      for (let i = 0; i < 3; i++) {
        optionsArr.push(filtered[i].num);
      }
      setOptions(_.shuffle(optionsArr));
    }
  }, [index]);

  //console.log(data);
  //console.log('new formed arr', options);

  const prononuceHandler = (e) => {
    speakStr(e.target.value, 'ru-Ru');
    setClicked(e.target.value);
    soundClick.play();
  };

  const checkAnswer = () => {
    if (Number(clicked) === data[index].num) {
      setAnswerIsTrue(true);
      soundWin.play();
    } else {
      setIncorrect(true);
      denied.play()
    }
  };

  const nextQuestion = () => {
    let barWidth = 100 / data.length;
    setIndex(prevState => prevState + 1);
    setBarwidth(prevState => prevState + barWidth);
    setAnswerIsTrue(false);
    setClicked('');
  };

  const startAgain = () => {
    setIndex(0);
    setOptions([]);
    setClicked('');
    setAnswerIsTrue(false);
    setBarwidth(0);
  };

  return (
    <Container marginTop={marginTop}>
      <TopStripe>
        { data[index] ? ReactHtmlParser(data[index].num) : <WinTitle>Good job</WinTitle> }
        <TopStripeBottomBorder barWidth={ barWidth } />
      </TopStripe>
      <OptionsContainer>
        { data[index] && options.map(item => (<ButtonOption value={ item } clicked={ item === Number(clicked) } incorrect={ incorrect } icon={ image } onClick={ (e) => prononuceHandler(e) }></ButtonOption>)) }
      </OptionsContainer>
      <ButtonsSections>
        { data[index] ? (<><Button onClick={ checkAnswer } disabled={ `${!clicked ? 'disabled' : ''}` }>check</Button>
          <Button onClick={ nextQuestion } disabled={ `${!answerIsTrue ? 'disabled' : ''}` }>next</Button></>) : <Button onClick={ startAgain }>Start again</Button> }

      </ButtonsSections>
    </Container>
  );
}

export default Index;
