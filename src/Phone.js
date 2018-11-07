import React from 'react';
import styled from 'styled-components';

import Display from './Display';
import Keyboard from './Keyboard';

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

class Phone extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      wordAsNumber: '',
      hints: ['hint1', 'hint2', 'hint3', 'hint4'],
      activeHintIndex: 0,
    };
  }

  // click on a digit from 2 to 9
  onNumberClick = number => 
    this.setState(state => ({
      wordAsNumber: state.wordAsNumber.concat(number),
      // hints: [],
      activeHintIndex: 0,
    }));

  // click on 0 (zero)
  onEndClick = () => 
    this.setState(state => ({
      wordAsNumber: '',
      text: state.text.concat(state.hints[state.activeHintIndex] || '', ' '),
      activeHintIndex: 0,
    }));

  // click on * to scroll through hints
  onToggleClick = () =>
    this.setState(state => ({
      activeHintIndex: state.activeHintIndex < state.hints.length - 1 ? state.activeHintIndex + 1 : 0,
    }));
  
  // click on # to delete
  // TODO: it delete only from current wordAsNumber, it could delete previous space and last word 
  // could be restored
  onCancelClick = () => {
    if (this.state.wordAsNumber > 0) {
      this.setState(state => ({
        wordAsNumber: state.wordAsNumber.slice(0, -1),
      }));
    }
  }

  render() {
    const { text, hints, activeHintIndex } = this.state;

    return (
      <PhoneWrapper>
        <Display text={text} hints={hints} activeHintIndex={activeHintIndex} />
        <Keyboard 
          onNumberClick={this.onNumberClick}
          onEndClick={this.onEndClick}
          onToggleClick={this.onToggleClick}
          onCancelClick={this.onCancelClick}
        />
      </PhoneWrapper>
    );
  }
};

export default Phone;