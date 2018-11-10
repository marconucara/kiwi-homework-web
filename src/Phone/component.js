import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Display from '../Display';
import Keyboard from '../Keyboard';

const PhoneWrapper = styled.div`
  position: relative;
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

const Error = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1em;
`;

const Phone = ({
  text,
  hints,
  activeHintIndex,
  onNumberClick,
  onEndClick,
  onToggleClick,
  onDeleteClick,
  errorMessage,
}) => (
  <PhoneWrapper>
    <Display
      text={text}
      hints={hints}
      activeHintIndex={activeHintIndex}
      onEndClick={onEndClick}
    />
    <Keyboard 
      onNumberClick={onNumberClick}
      onEndClick={onEndClick}
      onToggleClick={onToggleClick}
      onDeleteClick={onDeleteClick}
    />
    {errorMessage && 
      <Error>
        {errorMessage}<br />
        Please check readme.md and refresh
      </Error>}
  </PhoneWrapper>
);

Phone.propTypes = {
  text: PropTypes.string.isRequired,
  hints: PropTypes.array.isRequired,
  activeHintIndex: PropTypes.number.isRequired,
  onNumberClick: PropTypes.func.isRequired,
  onEndClick: PropTypes.func.isRequired,
  onToggleClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
}

export default Phone;