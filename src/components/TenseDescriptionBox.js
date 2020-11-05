import React from 'react'
import styled from 'styled-components'

const Box = styled.div`
  display:flex;
  flex-direction:column;
  text-align:center;
  align-self:center;
  width:120px;
  min-height:50px;
  padding:5px;
  border-radius:6px;
  border:1px solid grey;
`

const Header = styled.h1`
  font-weight:bold;
`

const Small = styled.small`
  font-weight:normall;
`

function TenseDescriptionBox({word, tense}) {
  return (
    <Box>
      {word && <Header>{word}</Header>}
      {tense && <Small>{tense}</Small>}
    </Box>
  )
}

export default TenseDescriptionBox
