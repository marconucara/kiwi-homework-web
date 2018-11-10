import { takeLatest, select } from 'redux-saga/effects';
import { latestHints, fetchHints } from './sagas';
import * as actions from './actions';

describe('phone sagas', () => {
  it('should handle latestHints', () => {
    const iterator = latestHints();
    const expectedYield = takeLatest([actions.ADD_DIGIT, actions.DELETE_DIGIT_OR_WORD], fetchHints);

    const actualYield = iterator.next().value;

    expect(JSON.stringify(actualYield)).toEqual(JSON.stringify(expectedYield));
  });

  it('should handle fetchHints', () => {
    const iterator = fetchHints();
    const expectedYield = select(state => state.phone.number);

    const actualYield = iterator.next().value;

    expect(JSON.stringify(actualYield)).toEqual(JSON.stringify(expectedYield));
  });
});