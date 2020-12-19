import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Continer = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  max-width:600px;
  min-height:200px;
  background-color:lightblue;
`;

const OptionContainer = styled.div`
  display:flex;
  flex-direction:column;
  min-width:60px;
  min-height:60px;
  background-color:yellow;
`;

const Rules = styled.div`
  display:flex;
  flex-direction:column;
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
  console.log(index, data.length === index, isFinished);

  const checkAnswer = () => {
    if (answer.join('') === correctAnswer().join('')) {
      console.log('ok');
      if (index < data.length) {
        setIndex(index + 1);
      } else if (index === data.length) {
        setIsFinished(true);
      }
    }
  };
  return (
    <Continer>
      {data[index] && data[index].word }
      {!isFinished ? <OptionContainer>
        { data[index].choices.map((choice) => (
          <>
            <span>{ choice.name }</span>
            <Rules key={ choice.name } class="control">{ choice.options.map((option, index) => (
              <label class="radio">
                <input type="radio" name={ option.name } value={ index } onClick={ chooseAnswer } />
                { option.title }
              </label>
            )) }</Rules>
          </>
        )) }
      </OptionContainer> : <p>Game is finished</p> }

      <button onClick={ checkAnswer }>Check answer</button>
    </Continer>
  );
}

export default Index;
