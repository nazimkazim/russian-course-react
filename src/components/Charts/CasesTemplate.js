import React from 'react';
import styled from 'styled-components';
import MaleIcon from '../../images/male-avatar.svg';
import ObjectIcon from '../../images/neuter-avatar.svg';
const ReactMarkdown = require('react-markdown');

const theme = {
  bg: '#E2EEF3',
  primaryColor: '#12242B',
  borderRadius: '8px',
  iconSmall: '10%',
  iconMedium: '20%',
  iconLarge: '30%'
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
  align-item:flex-end;
  border:2px solid ${theme.primaryColor};
  border-radius:${theme.borderRadius};
  box-sizing:border-box;
  padding:5px;
  width:100%;
  background-color:${theme.bg};
`;

const Icon = styled.img`
  width:${props => props.size || '40%'};
`;

const RuleContainer = styled.ul`
  display:flex;
  flex-direction:column;
  padding:3px;
  width:100%;
  height:100%;
  background-color:white;
  align-items:center;
  justify-content:center;
  border-radius:${theme.borderRadius};
`;

const RuleItem = styled.li`
  display:flex;
  align-content:center;
  justify-content:center;
  margin-top:2px;
  padding:2px;
  text-align:center;
  height:auto;
  width:100%;
  border-radius:${theme.borderRadius};
  border:1px dashed ${theme.primaryColor};
`;

const Buffer = styled.hr`
  border: 1px dashed ${theme.bg};
  width:100%;
`;

export default function AccusativeCaseTable({data}) {
  return (
    <Container>
      {
        data.map(item => (
          <Column style={ { 'gridTemplateRows': 'repeat(3, minmax(100px, auto))' } }>
            <Box1>
              <Icon src={ item.icon } size={ theme.iconLarge } />
              <Header>{ item.gender }</Header>
            </Box1>
            <Box2>
              <RuleContainer>
                { item.body.map((content) => (
                  <>
                    { content.type === 'человек' && <Icon src={ MaleIcon } size={ theme.iconMedium } /> }
                    { content.type === 'человек' && content.rules.map((rule) => (
                      <RuleItem>
                        <ReactMarkdown
                          source={ rule }
                          escapeHtml={ false }
                        />
                      </RuleItem>
                    ))
                    }
                  </>
                )) }
                <Buffer />
                { item.body.map((content) => (
                  <>
                    { content.type === 'вещь' && <Icon src={ ObjectIcon } size={ theme.iconMedium } /> }
                    { content.type === 'вещь' && content.rules.map((rule) => (
                      <RuleItem>
                        <ReactMarkdown
                          source={ rule }
                          escapeHtml={ false }
                        />
                      </RuleItem>
                    ))
                    }
                  </>
                )) }
              </RuleContainer>
            </Box2>
            <Box3>
              <RuleContainer>
                { item.examples.map((example) => (
                  <RuleItem>{ example }</RuleItem>
                )) }
              </RuleContainer>
            </Box3>
          </Column>
        ))
      }
    </Container>


  );
}
