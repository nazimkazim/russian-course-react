import React from 'react'
import styled from 'styled-components'
import BeVerbDiagram from '../components/BeVerbDiagram/Index'
import {diagramData} from '../data/BeVerbDiagramData';

const Container = styled.div`
  display:flex;
  justify-content:center;
  padding:100px;
  width:100vw;
  min-height:100vh;
  /* background-color:grey; */
  @media (max-width: 414px) {
    padding:10px;
  }
`

export default function BeVerbDiagramPage() {
  return (
    <Container>
      <BeVerbDiagram data={diagramData}/>
    </Container>
  )
}
