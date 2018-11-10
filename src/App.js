import React from 'react';
import styled from 'styled-components';
import { Provider } from 'react-redux';
import fetch from 'isomorphic-fetch';

import GlobalStyle from './globalStyle';
import Phone from './Phone/container';
import PhoneComponent from './Phone/component';

import configureStore from './Phone/store';

const fetchHintsApi = async number => {
  return fetch(`${process.env.REACT_APP_API_ENDPOINT || '/hints.json?'}${number}`)
    .then(response => response.json())
    .then(json => json.hints);
}

const store = configureStore(fetchHintsApi);

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
      <Phone PhoneComponent={PhoneComponent} />
    </AppWrapper>
  </Provider>
);

export default App;
