import { select, takeLatest, put, call } from 'redux-saga/effects'
import fetch from 'isomorphic-fetch'
import * as actions from './actions'

const fetchHintsApi = async number => {
  return fetch(`/hints.json?${number}`)
    .then(response => response.json())
    .then(json => json.hints)
}

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
    yield put(actions.fetchFail(e.message));
  }
}

export function* latestHints() {
  yield takeLatest([actions.ADD_DIGIT, actions.DELETE_DIGIT], fetchHints);
}
