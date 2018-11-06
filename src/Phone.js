import React from 'react';
import styled from 'styled-components';

import Display from './Display';
import Keyboard from './Keyboard';

const PhoneWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  max-width: 320px;
  border: 1px solid #ccc;
  height: 80%;
  min-height: 400px;
  max-height: 600px;
  border-radius: 15px;
  overflow: hidden;
  flex-grow: 1;
  flex-shrink: 0;
`;

const Phone = () => (
  <PhoneWrapper>
    <Display />
    <Keyboard />
  </PhoneWrapper>
);

export default Phone;