import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
let _ = require("lodash");


const Container = styled.div`
  display:flex;
  max-width:300px;
  height:auto;
  padding:5px;
  background-color:blue;
`
const Half = styled.div`
  flex:0.5;
  height:100%;
  background-color:yellow;
`

const Word = styled.div`
  width:100%;
  height:auto;
  padding:1px;
  background-color:grey;
  margin-top:1px;
`

function MatchWords({data}) {
  const [wordsOne, setWordsOne] = useState([])
  const [wordsTwo, setWordsTwo] = useState([])
  useEffect(()=> {
    const wordsOneArr = []
    const wordsTwoArr = []
    data.forEach((obj) => {
      wordsOneArr.push(obj.word1)
      wordsTwoArr.push(obj.word2)
    })
    setWordsOne(_.shuffle(wordsOneArr))
    setWordsTwo(_.shuffle(wordsTwoArr))
  }, [])
  console.log(data)
  console.log(wordsOne)
  console.log(wordsTwo)
  return (
    <Container>
      <Half>{wordsOne.map((word) => (
        <Word>{word}</Word>
      ))}</Half>
      <Half>{wordsTwo.map((word) => (
        <Word>{word}</Word>
      ))}</Half>
    </Container>
  )
}

export default MatchWords
