import React from 'react';
import { speakStr } from '../Pronunciation';
import ReactHtmlParser from 'react-html-parser';
import styled from 'styled-components';
const image = 'https://res.cloudinary.com/nzmai/image/upload/v1612020411/russian%20course/general/sound-waves.png'
const _ = require('lodash');

const Container = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  width:100%;
  /* background-color:red; */
  height:300px;
  min-height:300px;
  border-radius:16px;
  /* border: 10px double #D8D9E5; */
  -webkit-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
  box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
`;
const TopStripe = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  /* background-color:red; */
  width:100%;
  min-height:40px;
  font-size:60px;
  -webkit-box-shadow: 0px 2px 4px -2px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 2px 4px -2px rgba(0,0,0,0.75);
  box-shadow: 0px 2px 4px -2px rgba(0,0,0,0.75);
`;

const OptionsContainer = styled.div`
  display:flex;
  width:40%;
  justify-content:space-evenly;
  align-items:center;
  height:calc(100% - 60px);
  /* background-color:red; */
`;

const Button = styled.button`
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

function Index({ data }) {
  const [index, setIndex] = React.useState(0);
  const [options, setOptions] = React.useState([]);
  const [clicked, setClicked] = React.useState('');

  React.useEffect(() => {
    let optionsArr = [];
    optionsArr.push(data[index].num);
    let filtered = data.filter(item => item.num !== data[index].num);
    for (let i = 0; i < 3; i++) {
      optionsArr.push(filtered[i].num);
    }
    setOptions(_.shuffle(optionsArr));
  }, [index]);

  //console.log(data);
  //console.log('new formed arr', options);

  const prononuceHandler = (e) => {
    speakStr(e.target.value, 'ru-Ru');
    setClicked(e.target.value);
  };

  if (Number(clicked) === data[index].num) {
    console.log('trueeee');
  }

  //console.log(typeof clicked);

  return (
    <Container>
      <TopStripe>
        { ReactHtmlParser(data[index].num) }
      </TopStripe>
      <OptionsContainer>
        { options.map(item => (<Button value={ item } clicked={ item === Number(clicked) } icon={ image } onClick={ (e) => prononuceHandler(e) }></Button>)) }
      </OptionsContainer>
    </Container>
  );
}

export default Index;
