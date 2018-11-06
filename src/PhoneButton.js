import React from 'react';
import styled from 'styled-components';

const Button = styled.div`
  width: 100%;
  height: 3em;
  text-align: center;
  background-color: #f3f3f3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items; center;
`;

const Hint = styled.div`
  font-size: 0.6em;
`;

const PhoneButton = ({ children, hint }) => (
  <Button>
    {children}
    <Hint>{hint}</Hint>
  </Button>
);

export default PhoneButton;