import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

const Container = styled.div`
  display:flex;
  flex-direction:column;
  border-top:4px solid #1CB0F6;
  border-bottom:4px solid #1CB0F6;
  border-left:2px solid #1CB0F6;
  border-right:2px solid #1CB0F6;
  align-items:center;
  justify-content:center;
  width:100%;
  min-height:200px;
  border-radius:16px;
  padding:30px;
`;

function TextGenerator({ text }) {
  const [textGenerated, setTextGenerated] = useState('');
  useEffect(() => {
    setTextGenerated(text());
  }, []);
  const generateText = () => {
    setTextGenerated(text());
  };
  return (
    <Container>
      <ReactMarkdown className="text-quizzer-text has-text-primary is-size-4" source={ textGenerated } escapeHtml={ false } />
      <button class="button" onClick={ generateText }>
        <span class="icon is-small">
          <i class="fas fa-redo-alt"></i>
        </span>
        <span>GENERATE</span>
      </button>
    </Container>
  );
}

export default TextGenerator;
