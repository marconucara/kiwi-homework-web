import React from 'react';
import styled from 'styled-components';
import { Provider } from 'react-redux';

import GlobalStyle from './globalStyle';
import Phone from './Phone/container';

import configureStore from './Phone/store';

const store = configureStore();

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const App = () => (
  <Provider store={store}>
    <AppWrapper>
      <GlobalStyle />
      <Phone />
    </AppWrapper>
  </Provider>
);

export default App;
