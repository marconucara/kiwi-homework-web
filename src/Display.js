import React from 'react';
import styled, { keyframes } from 'styled-components';

const DisplayWrapper = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 1em;
  text
`;

const cursor = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
`;

const Textarea = styled.div`
  width: 100%;
  flex-grow: 1;
  &::after {
    content: "|";
    font-size: 1.5em;
    animation: ${cursor} 1s step-end infinite;
  }
`;

const Display = () => (
  <DisplayWrapper>
    <Textarea>some text</Textarea>
    <div>suggestion list here</div>
  </DisplayWrapper>
);

export default Display;