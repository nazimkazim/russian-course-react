import React from 'react';
import styled from 'styled-components';
import './styles.css';

const Root = styled.div`
  display:flex;
  flex-direction:column;
  margin:0 auto;
  max-width:420px;
  height:320px;
  min-height:300px;
  /* border:2px solid #2a9d8f; */
  border-radius:8px;
`;

const ContentHolder = styled.div`
  display:flex;
  /* flex-wrap: wrap; */
  justify-content:start;
  align-items:center;
  /* background-color:blue; */
  width:100%;
  height:80%;
`;

const FinishGameContainer = styled.div`
  display:flex;
  /* flex-wrap: wrap; */
  justify-content:center;
  align-items:center;
  /* background-color:blue; */
  width:100%;
  height:80%;
  font-weight:bold;
  font-size:24px;
`

const ButtonHolder = styled.div`
  display:flex;
  /* background-color:red; */
  align-items:center;
  width:100%;
  height:20%;
  border-top:3px solid #264653;
`;

const Label = styled.label`
  cursor:pointer;
  background-color:${props => props.checkedItem ? '#2a9d8f' : ''};
  padding:5px;
  color:${props => props.checkedItem ? 'white' : ''};
  border:2px solid ${props => props.checkedItem ? '#264653' : '#d8e2dc'};
  border-bottom:3px solid #264653;
  margin-right:3px;
  font-size:18px;
  border-radius:3px;
`;

const Phrase = styled.div`
  cursor:pointer;
  padding:5px;
  /* border:2px solid #d8e2dc; */
  margin-right:3px;
  font-size:18px;
`;


function Index({ data }) {
  //console.log(data);
  const [option1, setOption1] = React.useState([]);
  const [option2, setOption2] = React.useState([]);
  const [buttonDisabled, setButtonDisabled] = React.useState(true);
  let [currentIndex, setCurrentIndex] = React.useState(0);
  const [isCorrect, setIsCorrect] = React.useState(false);
  const [isNotCorrect, setIsNotCorrect] = React.useState(false);
  const winSound = new Audio('https://res.cloudinary.com/nzmai/video/upload/v1611066674/russian%20course/Sound/little_robot_sound_factory_Jingle_Win_Synth_00.mp3');
  const loseSound = new Audio('https://res.cloudinary.com/nzmai/video/upload/v1611067160/russian%20course/Sound/multimedia_game_sound_retro_lose_tone_002_52984.mp3');


  //console.log(answer);
  const checkAnswer = (status1, status2) => {
    if (status1 && status2) {
      winSound.play();
      setIsCorrect(true);
      setIsNotCorrect(false);
    }
    if (status1 === false && status2 === true || status2 === false && status1 === true || status2 === false && status1 === false) {
      loseSound.play();
      setIsNotCorrect(true);
      setIsCorrect(false);
    }
  };

  React.useEffect(() => {
    const option1Ans = data[currentIndex].options1.find(({ id }) => id === option1);
    const status1 = option1Ans && option1Ans.status;
    const option2Ans = data[currentIndex].options2.find(({ id }) => id === option2);
    const status2 = option2Ans && option2Ans.status;
    if (status1 && status2 || status1 === true && status2 === false || status2 === false && status1 === false) {
      setButtonDisabled(false);
    }
    checkAnswer(status1, status2);
  }, [option1, option2]);


  const goToNext = () => {
    setCurrentIndex(currentIndex += 1);
    setButtonDisabled(true);
    setIsCorrect(false);
    setIsNotCorrect(false);
  };


  return (
    <Root>
      <progress class="progress is-primary" value={ currentIndex } max={ data.length }></progress>
      {isCorrect && '😄 Good Job' }
      {isNotCorrect && '😥 Try Again' }
      {currentIndex >= data.length ? (<FinishGameContainer>Amazing!!! 👏👏👏</FinishGameContainer>) : (<ContentHolder>
        <Phrase>{ data[currentIndex].start }</Phrase>
        { data[currentIndex].options1.map(option => {
          //console.log(option1 === option.id);
          return (
            <Label checkedItem={ option1 === option.id }>
              <input type="radio" name="option1" onChange={ (e) => setOption1(option.id) } checked={ option1 === option.id } />
              { option.word }
            </Label>
          );
        }) }

        <Phrase>{ data[currentIndex].middle }</Phrase>
        { data[currentIndex].options2.map(option => (
          <Label checkedItem={ option2 === option.id }>
            <input type="radio" name="option2" onChange={ (e) => setOption2(option.id) } checked={ option2 === option.id } />
            { option.word }
          </Label>
        )) }
        <Phrase>{ data[currentIndex].end }</Phrase>
      </ContentHolder>)}
      
      <ButtonHolder>
        <button className="button is-primary" disabled={ buttonDisabled } onClick={ goToNext }>Next</button>
      </ButtonHolder>
    </Root>

  );
}

export default Index;
