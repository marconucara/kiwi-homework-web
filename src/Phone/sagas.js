import { takeLatest, put, call } from 'redux-saga/effects'
import fetch from 'isomorphic-fetch'
import * as actions from './actions'

const fetchHintsApi = async number => {
  console.log(number);
  // TODO remove false delay:
  // await new Promise(resolve => setTimeout(resolve, 500));

  return fetch(`/hints.json?${number}`)
    .then(response => response.json())
    .then(json => json.hints)
}

export function* fetchHints({ number }) {
  if (number === '') {
    yield put(actions.setHints([]));
    return;
  }

  try {    
    const hints = yield call(fetchHintsApi, number);
    yield put(actions.setHints(hints));
  } catch (e) {
    yield put(actions.fetchFail(e.message));
  }
}

export function* latestHints() {
  yield takeLatest(actions.HINTS_FETCH, fetchHints);
}
