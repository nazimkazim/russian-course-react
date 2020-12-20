import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Continer = styled.div`
  position:relative;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  max-width:600px;
  min-height:200px;
  border-radius:6px;
  background: rgb(34,193,195);
  background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(238,237,233,1) 100%);
  margin:0 auto;
`;

const OptionContainer = styled.div`
  display:flex;
  flex-direction:column;
  min-width:100px;
  min-height:80px;
  /* background-color:yellow; */
`;

const OptionName = styled.h1`
  font-size:16px;
  font-weight:bold;
`

const Rules = styled.div`
  display:flex;
  flex-direction:column;
  /* background-color:blue; */
`;

const Word = styled.h1`
  font-size:20px;
  text-transform:uppercase;
`

const Rule = styled.div`
  display:flex;
  cursor:pointer;
  align-items:center;
  width:100%;
  height:auto;
  padding-top:7px;
  padding-bottom:7px;
  padding-left:5px;
  padding-right:5px;
  margin-bottom:10px;
  background-color:#FFFFFF;
  -webkit-box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.75);
  box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.75);
  border-radius:5px;
  & > label {
    margin-left:3px;
  }

  & > label > input {
    margin-right:6px;
  }

  & > label > p {
    font-size:16px;
    font-weight:normal;
  }

`;

const Incrementer = styled.div`
  position:absolute;
  display:flex;
  align-items:center;
  justify-content:center;
  top:5px;
  left:5px;
  min-width:40px;
  min-height:40px;
  color:white;
  padding:4px;
  background: rgb(166,128,213);
  background: radial-gradient(circle, rgba(166,128,213,1) 0%, rgba(112,141,245,1) 100%);
  border-radius:50%;
`;

function Index({ data }) {
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState([]);
  const [option1, setOption1] = useState('');
  const [option2, setOption2] = useState('');
  const [isFinished, setIsFinished] = useState(false);


  const chooseAnswer = (e) => {
    //console.log(e.target.value, e.target.name);
    //console.log(`option1 ${option1}`,`option2 ${option2}`);
    //setAnswer([...answer, e.target.idx]);
    if (e.target.name === 'option1') {
      setOption1(e.target.value);
    }
    if (e.target.name === 'option2') {
      setOption2(e.target.value);
    }
  };

  useEffect(() => {
    setAnswer([parseInt(option1), parseInt(option2)]);
  }, [option1, option2]);

  console.log(answer);

  const correctAnswer = () => {
    let arr = [];
    data[index].choices[0].options.map((item, index) => {
      if (item.correct === true) {
        arr.push(index);
      }
    });
    data[index].choices[1].options.map((item, index) => {
      if (item.correct === true) {
        arr.push(index);
      }
    });
    return arr;
  };
  //console.log(correctAnswer());
  console.log(index, data.length, data.length === index, isFinished);

  const checkAnswer = () => {
    if (answer.join('') === correctAnswer().join('')) {
      console.log('ok');
      if (index <= data.length - 1) {
        setIndex(index + 1);
        setOption1('');
        setOption2('');
        if (index === data.length - 1) {
          setIsFinished(true);
        }
      }
    }
  };
  return (
    <Continer>
      <Incrementer>{ index }/{ data.length }</Incrementer>
      {data[index] && <Word>{data[index].word}</Word> }
      {!isFinished ? <OptionContainer>
        { data[index].choices.map((choice) => (
          <>
            <OptionName>{ choice.name }</OptionName>
            <Rules key={ choice.name } class="control">{ choice.options.map((option, index) => (
              <Rule>
                <label className="radio">
                  <input type="radio" name={ option.name } value={ index } onClick={ chooseAnswer } />
                  <p>{ option.title }</p>
                </label>
              </Rule>
            )) }</Rules>
          </>
        )) }
      </OptionContainer> : <p>Game is finished</p> }

      {!isFinished ? <button onClick={ checkAnswer }>Check answer</button> : <button onClick={ checkAnswer }>Start again</button> }
    </Continer>
  );
}

export default Index;
