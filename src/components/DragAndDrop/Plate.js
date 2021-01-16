import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 60px;
  border-radius: 8px;
  background-color: white;
  margin-bottom: 3px;
  > img {
    width:30px;
  }
`;

function Plate({ name, img }) {
  return (
    <Root>
      {name }
      <img src={ img } />
    </Root>
  );
}

export default Plate;
