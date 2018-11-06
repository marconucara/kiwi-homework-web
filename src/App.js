import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components'
import logo from './logo.svg';
import GlobalStyle from './globalStyle';

const AppWrapper = styled.div`
  text-align: center;
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const AppLogo = styled.img`
  animation: ${rotate360} infinite 12s ease-in-out;
  height: 80px;
  &:hover {
    transform: scale3d(1.1, 1.1, 1);
  }
`;

const AppHeader = styled.div`
  background-color: #222;
  height: 12rem;
  padding: 1rem;
  color: white;
`;

const AppTitle = styled.h1`
  font-weight: 900;
`;

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <GlobalStyle />
        <AppHeader>
          <AppLogo src={logo} alt="logo" />
          <AppTitle>
            Coming soon...
          </AppTitle>
        </AppHeader>
      </AppWrapper>
    );
  }
}

export default App;
