import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  appearence: none;
  border: 0;
  padding: 0;
  font-size: 1em;
`;

const ButtonInner = styled.div`
  width: 100%;
  height: 3em;
  background-color: #f3f3f3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items; center;
`;

const Hint = styled.div`
  font-size: 0.6em;
`;

const PhoneButton = ({ children, hint, onClick }) => (
  <Button onClick={onClick}>
    <ButtonInner>
      {children}
      <Hint>{hint}</Hint>
    </ButtonInner>
  </Button>
);

PhoneButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  hint: PropTypes.string.isRequired,
}

export default PhoneButton;