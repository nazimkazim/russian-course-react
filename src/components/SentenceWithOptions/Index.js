import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
  display:flex;
`;

function Index({ data }) {
  //console.log(data);

  const [answer, setAnswer] = React.useState([]);

  const chooseOption = (e, option) => {
    console.log('chosen', option);
    let optionName = e.target.name;

    /* if (optionName === 'option1') {
      setAnswer(prevState => [...prevState, {
        status: option.status,
        id: option.id
      }]);
    } */
    /* if (optionName === 'option1') {
      data[0].options1.forEach(item => {
        if (item.id === option.id) {
          console.log('success');
        }
      })
    } */
  };
  console.log(answer);
  return (
    <div>
      {
        <Root>
          <div>{ data[0].start }</div>
          {/* <div onClick={ () => chooseOption(data[0].options1.option1) }>{ data[0].options1.option1.word }</div> /
          <div onClick={ () => chooseOption(data[0].options1.option2) }>{ data[0].options1.option2.word }</div> */}
          <div class="control">
            <label class="radio">
              <input type="radio" name="option1" onChange={ (e) => chooseOption(e, data[0].options1.option1) } checked={data[0].options1.option1.checked} />
              { data[0].options1.option1.word }
            </label>
            <label class="radio">
              <input type="radio" name="option1" onChange={ (e) => chooseOption(e, data[0].options1.option2) } checked={data[0].options1.option1.checked} />
              { data[0].options1.option2.word }
            </label>
          </div>
          <div>{ data[0].middle }</div>
          <div>{ data[0].options2.option1.word }</div> /
          <div>{ data[0].options2.option2.word }</div>
          <div>{ data[0].end }</div>
        </Root>
      }
    </div>
  );
}

export default Index;
