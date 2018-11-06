import React from 'react';
import styled from 'styled-components';

import PhoneButton from './PhoneButton';

const KeyboardWrapper = styled.div`
  width: 100%;
  margin-top: 0.5em;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 2px;
`;

const Keyboard = () => (
  <KeyboardWrapper>
    <PhoneButton hint="">1</PhoneButton>
    <PhoneButton hint="abc">2</PhoneButton>
    <PhoneButton hint="def">3</PhoneButton>
    <PhoneButton hint="ghi">4</PhoneButton>
    <PhoneButton hint="jkl">5</PhoneButton>
    <PhoneButton hint="mno">6</PhoneButton>
    <PhoneButton hint="pqrs">7</PhoneButton>
    <PhoneButton hint="tuv">8</PhoneButton>
    <PhoneButton hint="wxyz">9</PhoneButton>
    <PhoneButton hint="+">*</PhoneButton>
    <PhoneButton hint="_">0</PhoneButton>
    <PhoneButton hint="^">#</PhoneButton>
  </KeyboardWrapper>
);

export default Keyboard;