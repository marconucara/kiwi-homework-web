import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import PhoneButton from './PhoneButton';

const KeyboardWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: calc(100% / 3) calc(100% / 3) calc(100% / 3);
  grid-gap: 2px;
`;

const Keyboard = ({ onNumberClick, onToggleClick, onCancelClick, onEndClick }) => (
  <KeyboardWrapper>
    <PhoneButton hint="">1</PhoneButton>
    <PhoneButton onClick={() => onNumberClick(2)} hint="abc">2</PhoneButton>
    <PhoneButton onClick={() => onNumberClick(3)} hint="def">3</PhoneButton>
    <PhoneButton onClick={() => onNumberClick(4)} hint="ghi">4</PhoneButton>
    <PhoneButton onClick={() => onNumberClick(5)} hint="jkl">5</PhoneButton>
    <PhoneButton onClick={() => onNumberClick(6)} hint="mno">6</PhoneButton>
    <PhoneButton onClick={() => onNumberClick(7)} hint="pqrs">7</PhoneButton>
    <PhoneButton onClick={() => onNumberClick(8)} hint="tuv">8</PhoneButton>
    <PhoneButton onClick={() => onNumberClick(9)} hint="wxyz">9</PhoneButton>
    <PhoneButton onClick={onToggleClick} hint="NEXT">*</PhoneButton>
    <PhoneButton onClick={onEndClick} hint="_">0</PhoneButton>
    <PhoneButton onClick={onCancelClick} hint="DEL">#</PhoneButton>
  </KeyboardWrapper>
);

Keyboard.propTypes = {
  onNumberClick: PropTypes.func.isRequired,
  onEndClick: PropTypes.func.isRequired,
  onToggleClick: PropTypes.func.isRequired,
  onCancelClick: PropTypes.func.isRequired,
}

export default Keyboard;