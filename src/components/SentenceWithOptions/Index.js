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
  justify-content:center;
  align-items:center;
  /* background-color:blue; */
  width:100%;
  height:80%;
`;

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
`


function Index({ data }) {
  //console.log(data);
  const [option1, setOption1] = React.useState([]);
  const [option2, setOption2] = React.useState([]);

  //console.log(answer);
  const checkAnswer = () => {
    const option1Ans = data[0].options1.find(({ id }) => id === option1);
    const status1 = option1Ans && option1Ans.status;
    const option2Ans = data[0].options2.find(({ id }) => id === option2);
    const status2 = option2Ans && option2Ans.status;
    if (status1 && status2) {
      console.log('you won');
    }
  };


  return (
    <Root>
      <ContentHolder>
        <Phrase>{ data[0].start }</Phrase>
        <div class="control">
          { data[0].options1.map(option => {
            //console.log(option1 === option.id);
            return (
              <Label checkedItem={ option1 === option.id }>
                <input type="radio" name="option1" onChange={ (e) => setOption1(option.id) } checked={ option1 === option.id } />
                { option.word }
              </Label>
            );
          }) }
        </div>
        <Phrase>{ data[0].middle }</Phrase>
        { data[0].options2.map(option => (
          <Label checkedItem={ option2 === option.id }>
            <input type="radio" name="option2" onChange={ (e) => setOption2(option.id) } checked={ option2 === option.id } />
            { option.word }
          </Label>
        )) }
        <Phrase>{ data[0].end }</Phrase>
      </ContentHolder>
      <ButtonHolder>
        <button className="button is-primary" onClick={ checkAnswer }>Check</button>
      </ButtonHolder>
    </Root>

  );
}

export default Index;
