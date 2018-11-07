import React from 'react';
import styled, { keyframes } from 'styled-components';

import HintsList from './HintsList';

const DisplayWrapper = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
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
  padding: 1em;
  flex-grow: 1;
  &::after {
    content: "|";
    font-size: 1.5em;
    animation: ${cursor} 1s step-end infinite;
  }
`;

const Display = ({ text, hints, activeHintIndex }) => (
  <DisplayWrapper>
    <Textarea>{text}</Textarea>
    <HintsList hints={hints} activeHintIndex={activeHintIndex} />
  </DisplayWrapper>
);

export default Display;