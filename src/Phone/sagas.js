import { select, takeLatest, put, call } from 'redux-saga/effects';
import * as actions from './actions';

let fetchHintsApi;

export const configureHintsApi = api => 
  fetchHintsApi = api;

export function* fetchHints() {
  const number = yield select(state => state.phone.number);

  if (number === '') {
    yield put(actions.setHints([]));
    return;
  }

  try {    
    yield put(actions.fetchHints(number));
    const hints = yield call(fetchHintsApi, number);
    yield put(actions.setHints(hints));
  } catch (e) {
    yield put(actions.fetchHintsFail(e.message));
  }
}

export function* latestHints() {
  yield takeLatest([actions.ADD_DIGIT, actions.DELETE_DIGIT_OR_WORD], fetchHints);
}
