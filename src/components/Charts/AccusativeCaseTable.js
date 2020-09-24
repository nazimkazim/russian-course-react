import React from 'react';
import styled from 'styled-components';
import MaleIcon from '../../images/male-avatar.svg';
import FemaleIcon from '../../images/female-avatar.svg';
import ObjectIcon from '../../images/neuter-avatar.svg';
import PluralIcon from '../../images/crowd-of-users.svg';
const ReactMarkdown = require('react-markdown');

const data = [
  {
    gender: 'он',
    icon: MaleIcon,
    body: [
      {
        type: 'человек',
        rules: [
          `согласная + -а`,
          `-й, -ь -> -я`,
        ]
      },
      {
        type: 'вещь',
        rules: [
          '<span>x</span>'
        ]
      }

    ]
    ,
    examples: [
      'Я слушаю президента',
      'Я слушаю джаз'
    ]
  },
  {
    gender: 'она',
    icon: FemaleIcon,
    body: [
      {
        type: 'человек',
        rules: [
          `-а -> -у`,
          `-я -> -ю`,
        ]
      },
      {
        type: 'вещь',
        rules: [
          '-ь х'
        ]
      }

    ]
    ,
    examples: [
      'Я слушаю музыку',
      'Я люблю семью',
      'Я люблю ночь'
    ]
  },
  {
    gender: 'оно',
    icon: ObjectIcon,
    body: [
      {
        type: 'вещь',
        rules: [
          'Х'
        ]
      }

    ]
    ,
    examples: [
      'Я не люблю кино'
    ]
  },
  {
    gender: 'они',
    icon: PluralIcon,
    body: [
      {
        type: 'вещь',
        rules: [
          'Х'
        ]
      }
    ]
    ,
    examples: [
      'Я вижу машины'
    ]
  }
];

const theme = {
  bg: '#E2EEF3',
  primaryColor: '#12242B',
  borderRadius: '8px',
  iconSmall:'10%',
  iconMedium:'20%',
  iconLarge:'30%'
};  

const Container = styled.div`
  display:grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width:100%;
`;

const Column = styled.div`
  display:grid;
  grid-gap: 1rem;
  flex-grow: 1;
  align-content:stretch;
  flex-direction:column;
`;

const Box1 = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  border:2px solid ${theme.primaryColor};
  border-radius:${theme.borderRadius};
  align-items:center;
  width:100%;
  box-sizing:border-box;
  padding:10px;
  background-color:${theme.bg};
`;

const Header = styled.h1`
  font-size:24px;
  color:${theme.primaryColor};
`;

const Box2 = styled.div`
  display:flex;
  flex-direction:column;
  align-item:flex-end;
  border:2px solid ${theme.primaryColor};
  border-radius:${theme.borderRadius};
  box-sizing:border-box;
  padding:5px;
  width:100%;
  background-color:${theme.bg};
`;

const Box3 = styled.div`
  display:flex;
  flex-direction:column;
  border:1px solid black;
  box-sizing:border-box;
  padding:10px;
  width:100%;
  background-color:yellow;
`;

const Icon = styled.img`
  width:${props => props.size || '40%'};
`;

const RuleContainer = styled.ul`
  width:100%;
  background-color:white;
  border-radius:${theme.borderRadius};
`

const RuleItem = styled.li`
  width:100%;
  background-color:black;
`

export default function AccusativeCaseTable() {
  return (
    <Container>
      {
        data.map(item => (
          <Column style={ { 'gridTemplateRows': 'repeat(3, minmax(100px, auto))' } }>
            <Box1>
              <Icon src={ item.icon } size={theme.iconLarge} />
              <Header>{ item.gender }</Header>
            </Box1>
            <Box2>
              { item.body.map((content) => (
                <>
                  <RuleContainer>
                      { content.type === 'человек' && <Icon src={ MaleIcon } size={theme.iconMedium} /> }
                      { content.type === 'человек' && content.rules.map((rule) => (
                        <RuleItem>
                          <ReactMarkdown
                            source={ rule }
                            escapeHtml={ false }
                          />
                        </RuleItem>
                      ))
                      }
                  </RuleContainer>
                  <RuleContainer>
                      { content.type === 'вещь' && <Icon src={ ObjectIcon } size={theme.iconMedium} /> }
                      { content.type === 'вещь' && content.rules.map((rule) => (
                        <RuleItem>
                          <ReactMarkdown
                            source={ rule }
                            escapeHtml={ false }
                          />
                        </RuleItem>
                      ))
                      }
                  </RuleContainer>
                </>
              )) }
            </Box2>
            <Box3>
              { item.examples.map((example) => (
                <li>{ example }</li>
              )) }
            </Box3>
          </Column>
        ))
      }
    </Container>


  );
}
