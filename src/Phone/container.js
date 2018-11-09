import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import PhoneComponent from './component';
import { addDigit, deleteDigit, addWord, toggleActiveHint } from './actions';

const Phone = ({ text, hints, activeHintIndex, addDigit, deleteDigit, toggleActiveHint, addWord }) => (
  <PhoneComponent 
    text={text}
    hints={hints}
    activeHintIndex={activeHintIndex}
    onNumberClick={addDigit}
    onEndClick={addWord}
    onToggleClick={toggleActiveHint}
    onDeleteClick={deleteDigit}
  />
);

Phone.propTypes = {
  hints: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  addDigit: PropTypes.func.isRequired,
  deleteDigit: PropTypes.func.isRequired,
  addWord: PropTypes.func.isRequired,
  toggleActiveHint: PropTypes.func.isRequired,
}

export default connect(state => state.phone, dispatch => ({
  addDigit: digit => dispatch(addDigit(digit)),
  deleteDigit: () => dispatch(deleteDigit()),
  addWord: () => dispatch(addWord()),
  toggleActiveHint: () => dispatch(toggleActiveHint()),
}))(Phone);