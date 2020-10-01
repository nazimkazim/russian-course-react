import React, { useState } from 'react';
import styled from 'styled-components';

const Text = styled.span`
    color:#212121;
    font-weight:bold;
    font-size:20px;
    height:auto;
    width:100%;
    margin-bottom:15px;
    display:flex;
    cursor:pointer;
`;


export default function Instruction(props) {
    const [isShown, setToggle] = useState(true);
    return (<>
        <Text onClick={ () => setToggle(!isShown) }>{props.letter && `${props.letter})` } { isShown ? props.name : props.engName }</Text>
    </>
    );
}