import React, { useState, useEffect } from 'react';
import { data } from '../data/testData';
import styled from 'styled-components';

const Container = styled.ul`
  display:flex;
  flex-direction:row;
  min-width:300px;
  height:300px;
  background-color:lightgrey;
`;

const ListItem = styled.li`
  width:100px;
  height:30px;
  /* background-color:blue; */
`;

const Auls = styled.ul`
  width:200px;
  height:30px;
  backgorund-color:brown;
`;
function TestAssignment() {
  const [auls, setAuls] = useState([]);
  const [city, setCity] = useState('')

  useEffect(() => {
    setCity(data[0].city)
  })

  const handleAuls = (id) => {
    console.log(id);
    const filteredAuls = data[0].regions.filter(aul => {
      return aul.id === id;
    });
    setAuls(filteredAuls[0]);
  };

  //console.log(data);
  console.log(auls);
  return (
    <div>
      <Container>
      {data[0].regions.map((obj) => (
        <>
          <li>{city}</li>
          <ListItem onClick={ (id) => handleAuls(obj.id) } key={ obj.id } id={ obj.id }>{ obj.region }
            <Auls>
              { auls.auls && auls.auls.map((aul) => (
                <li>{ aul.aul }</li>
              )) }
            </Auls>
          </ListItem>
          </>
      )) }
      </Container>
    </div>
  );
}

export default TestAssignment;
