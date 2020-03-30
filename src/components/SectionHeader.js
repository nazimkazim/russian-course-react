import React, {useState} from 'react'
import styled from 'styled-components'

const Section = styled.div`
    width:100%;
    height:100px;
    background-color:#4CAF50;
    display: flex;
    align-items: center;
    margin-bottom:30px;
    justify-content: center;
    border-bottom:5px solid #C8E6C9;
`

const Text = styled.span`
    color:#212121;
    font-weight:bold;
    font-size:30px;
    display:block;
    cursor:pointer;
`


export default function SectionHeader(props) {
    const [isShown, setToggle] = useState(true)
    return (
        <Section>
            <Text onClick={() => setToggle(!isShown)}>{isShown ? props.name : props.engName}</Text>
        </Section>
    )
}
