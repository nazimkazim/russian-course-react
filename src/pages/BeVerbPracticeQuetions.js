import React from 'react'
import styled from 'styled-components'
import BeVerbQuestionsPractice from '../components/BeVerbQuestionsPractice/Index'

const Container = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  padding:100px;
  width:100vw;
  min-height:100vh;
  /* background-color:grey; */
  @media (max-width: 414px) {
    padding:10px;
  }
`

export default function BeVerbPracticeQuestionsPage() {
  return (
    <Container>
      <BeVerbQuestionsPractice/>
    </Container>
  )
}