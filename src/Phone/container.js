import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import PhoneComponent from './component';
import { fetchHints, resetHints } from './actions';

class Phone extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      wordAsNumber: '',
      activeHintIndex: 0,
    };
  }

  onNumberChange = () =>
    this.props.dispatch(fetchHints(this.state.wordAsNumber));

  // click on a digit from 2 to 9
  onNumberClick = number => 
    this.setState(state => ({
      wordAsNumber: state.wordAsNumber.concat(number),
      activeHintIndex: 0,
    }), this.onNumberChange);

  // click on 0 (zero)
  onEndClick = () => 
    this.setState(state => ({
      wordAsNumber: '',
      text: state.text.concat(this.props.hints[state.activeHintIndex] || '', ' '),
      activeHintIndex: 0,
    }), () => this.props.dispatch(resetHints(this.state.wordAsNumber)));

  // click on * to scroll through hints
  onToggleClick = () =>
    this.setState(state => ({
      activeHintIndex: state.activeHintIndex < this.props.hints.length - 1 ? state.activeHintIndex + 1 : 0,
    }));
  
  // click on # to delete
  // TODO: it delete only from current wordAsNumber, it could delete previous space and last word 
  // could be restored
  onCancelClick = () => {
    if (this.state.wordAsNumber > 0) {
      this.setState(state => ({
        wordAsNumber: state.wordAsNumber.slice(0, -1),
      }), this.onNumberChange);
    }
  }

  render() {
    const { text, activeHintIndex } = this.state;
    const { hints } = this.props;

    return (
      <PhoneComponent 
        text={text}
        hints={hints}
        activeHintIndex={activeHintIndex}
        onNumberClick={this.onNumberClick}
        onEndClick={this.onEndClick}
        onToggleClick={this.onToggleClick}
        onCancelClick={this.onCancelClick}
      />
    );
  }
};

Phone.propTypes = {
  hints: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
}

export default connect(state => {
  const { items: hints, isFetching } = state.hints;

  return {
    hints,
    isFetching,
  };
})(Phone);