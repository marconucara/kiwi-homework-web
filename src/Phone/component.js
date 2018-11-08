import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Display from '../Display';
import Keyboard from '../Keyboard';

const PhoneWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  width: 375px;
  max-width: 100%;
  height: 80%;
  min-height: 400px;
  max-height: 600px;
  overflow: hidden;
  flex-grow: 0;
  flex-shrink: 0;

  @media (min-width: 376px) {
    border: 1px solid #ccc;
    border-radius: 15px;
    width: 320px;
  }
`;

const Phone = ({
  text,
  hints,
  activeHintIndex,
  onNumberClick,
  onEndClick,
  onToggleClick,
  onCancelClick
}) => (
  <PhoneWrapper>
    <Display text={text} hints={hints} activeHintIndex={activeHintIndex} />
    <Keyboard 
      onNumberClick={onNumberClick}
      onEndClick={onEndClick}
      onToggleClick={onToggleClick}
      onCancelClick={onCancelClick}
    />
  </PhoneWrapper>
);

Phone.propTypes = {
  text: PropTypes.string.isRequired,
  hints: PropTypes.array.isRequired,
  activeHintIndex: PropTypes.number.isRequired,
  onNumberClick: PropTypes.func.isRequired,
  onEndClick: PropTypes.func.isRequired,
  onToggleClick: PropTypes.func.isRequired,
  onCancelClick: PropTypes.func.isRequired,
}

export default Phone;