import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HintListWrapper = styled.div`
  padding: 1em;
  display: flex;
  overflow: auto;
  @media screen and (-webkit-min-device-pixel-ratio:0) { 
    ::-webkit-scrollbar {
      width: 4px;
      height: 4px;
    }

    ::-webkit-scrollbar-track {
      background-color: rgba(0, 0, 0, 0.1);
    }

    ::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
`;

const HintListItem = styled.button`
  padding: 0.5em;
  font-size: 1em;
  background-color: ${props => props.active ? 'rgb(0, 169, 145)' : "#f1f1f1"};
  ${props => props.active && 'color: #ffffff;'}
  appearence: none;
  border: 0;

  &:active {
    background-color: rgb(0, 169, 145);
    color: #ffffff;
  }

  &:focus {
    border: 0;
    outline: 0;
  }

  &:not(:first-child) {
    margin-left: 4px;
  }
`;

const HintList = ({ hints, activeHintIndex, onEndClick }) => (
  <HintListWrapper>
    {hints.map((hint, index) => (
      <HintListItem
        active={index === activeHintIndex}
        key={hint}
        onClick={() => onEndClick(index)}
      >
        {hint}
      </HintListItem>
    ))}
  </HintListWrapper>
);


HintList.propTypes = {
  hints: PropTypes.array.isRequired,
  activeHintIndex: PropTypes.number,
}

export default HintList;