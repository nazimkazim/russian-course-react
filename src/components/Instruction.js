import React, { useState } from 'react';
import styled from 'styled-components';

const Text = styled.span`
    color:#212121;
    font-weight:bold;
    font-size:20px;
    margin-bottom:15px;
    display:block;
    cursor:pointer;
`;


export default function Instruction(props) {
    const [isShown, setToggle] = useState(true);
    return (<>
        <Text onClick={ () => setToggle(!isShown) }>{props.letter && `${props.letter})` } { isShown ? props.name : props.engName }</Text>
    </>
    );
}