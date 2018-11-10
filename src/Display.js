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
    content: "";
    display: inline-block;
    width: 1px;
    height: 1.5em;
    transform: translateY(0.2em);
    background-color: currentColor;
    animation: ${cursor} 1s step-end infinite;
  }
`;

const Display = ({ text, hints, activeHintIndex, onEndClick }) => (
  <DisplayWrapper>
    <Textarea dangerouslySetInnerHTML={{__html: text.replace(/ /g, '&nbsp;')}}/>
    <HintsList hints={hints} activeHintIndex={activeHintIndex} onEndClick={onEndClick} />
  </DisplayWrapper>
);

export default Display;