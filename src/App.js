import React from 'react';
import styled from 'styled-components';

import GlobalStyle from './globalStyle';
import Phone from './Phone';

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const App = () => (
  <AppWrapper>
    <GlobalStyle />
    <Phone />
  </AppWrapper>
);

export default App;
