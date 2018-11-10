import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import PhoneComponent from './component';
import { addDigit, deleteDigitOrWord, addWord, toggleActiveHint } from './actions';

const Phone = ({
  text,
  hints,
  activeHintIndex,
  isFetching,
  fetchErrorMessage,
  addDigit,
  deleteDigitOrWord,
  toggleActiveHint,
  addWord,
}) => (
  <PhoneComponent 
    text={text}
    hints={hints}
    activeHintIndex={activeHintIndex}
    onNumberClick={addDigit}
    onEndClick={addWord}
    onToggleClick={toggleActiveHint}
    onDeleteClick={deleteDigitOrWord}
    isFetching={isFetching}
    errorMessage={fetchErrorMessage}
  />
);

Phone.propTypes = {
  hints: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  addDigit: PropTypes.func.isRequired,
  deleteDigitOrWord: PropTypes.func.isRequired,
  addWord: PropTypes.func.isRequired,
  toggleActiveHint: PropTypes.func.isRequired,
  fetchErrorMessage: PropTypes.string,
}

export default connect(state => state.phone, dispatch => ({
  addDigit: digit => dispatch(addDigit(digit)),
  deleteDigitOrWord: () => dispatch(deleteDigitOrWord()),
  addWord: index => dispatch(addWord(index)),
  toggleActiveHint: () => dispatch(toggleActiveHint()),
}))(Phone);