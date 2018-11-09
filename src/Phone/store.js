import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';

import { latestHints } from './sagas';

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer, 
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
  );
  
  sagaMiddleware.run(latestHints);

  return store;
}