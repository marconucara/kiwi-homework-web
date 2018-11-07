import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HintListWrapper = styled.div`
  padding: 1em;
  display: flex;
  overflow: auto;
  // ::-webkit-scrollbar {
  //   width: 3px;
  //   height: 3px;
  // }

  // ::-webkit-scrollbar-track {
  //   background-color: rgba(0, 0, 0, 0.1);
  // }

  // ::-webkit-scrollbar-thumb {
  //   background-color: rgba(0, 0, 0, 0.5);
  // }
`;

const HintListItem = styled.button`
  padding: 0.5em;
  font-size: 1em;
  background-color: ${props => props.active ? 'rgb(0, 169, 145)' : "#e1e1e1"};
  ${props => props.active && 'color: #f3f3f3;'}
  appearence: none;
  border: 0;
  margin-bottom: 2px;

  &:not(:first-child) {
    margin-left: 2px;
  }
`;

const HintList = ({ hints, activeHintIndex }) => (
  <HintListWrapper>
    {hints.map((hint, index) => (
      <HintListItem active={index === activeHintIndex} key={hint}>
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