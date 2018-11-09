import { phone as reducer } from './reducers';
import * as actions from './actions';

describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      isFetching: false,
      hints: [],
      activeHintIndex: 0,
      number: '',
      text: '',
    });
  });

  it('should handle HINTS_FETCH', () => {
    expect(
      reducer({}, {
        type: actions.HINTS_FETCH,
      })
    ).toEqual({
      isFetching: true,
      hints: [],
      activeHintIndex: 0,
    });

    expect(
      reducer({
        isFetching: false,
        hints: ['a', 'b'],
        activeHintIndex: 0,
      }, {
        type: actions.HINTS_FETCH,
      })
    ).toEqual({
        isFetching: true,
        hints: [],
        activeHintIndex: 0,
    });
  });

  it('should handle HINTS_SET', () => {
    expect(
      reducer({}, {
        type: actions.HINTS_SET,
        hints: ['aa', 'bb'],
      })
    ).toEqual({
      isFetching: false,
      hints: ['aa', 'bb'],
      activeHintIndex: 0,
      fetchErrorMessage: '',
    });
  });

  it('should handle HINTS_FETCH_FAILED', () => {
    expect(
      reducer({}, {
        type: actions.HINTS_FETCH_FAILED,
        message: '404 error',
      })
    ).toEqual({
      isFetching: false,
      hints: [],
      activeHintIndex: 0,
      fetchErrorMessage: '404 error',
    });
  });

  it('should handle HINTS_RESET', () => {
    expect(
      reducer({}, {
        type: actions.HINTS_RESET,
      })
    ).toEqual({
      isFetching: false,
      hints: [],
      activeHintIndex: 0,
    });
  });

  it('should handle ADD_DIGIT', () => {
    expect(
      reducer({
        number: '3',
      }, {
        type: actions.ADD_DIGIT,
        digit: 2
      })
    ).toEqual({
      number: '32',
    });
  });

  it('should handle DELETE_DIGIT', () => {
    expect(
      reducer({
        number: '32',
      }, {
        type: actions.DELETE_DIGIT,
      })
    ).toEqual({
      number: '3',
    });
  });

  it('should handle ADD_WORD', () => {
    expect(
      reducer({
        hints: ['aa', 'bb'],
        activeHintIndex: 1,
        text: 'old ',
      }, {
        type: actions.ADD_WORD,
      })
    ).toEqual({
      text: 'old bb ',
      hints: [],
      activeHintIndex: 0,
      number: '',
    });
  });

  it('should handle TOGGLE_ACTIVE_HINT', () => {
    expect(
      reducer({
        hints: ['aa', 'bb', 'cc'],
        activeHintIndex: 0,
      }, {
        type: actions.TOGGLE_ACTIVE_HINT,
      })
    ).toMatchObject({
      activeHintIndex: 1,
    });

    expect(
      reducer({
        hints: ['aa', 'bb', 'cc'],
        activeHintIndex: 1,
      }, {
        type: actions.TOGGLE_ACTIVE_HINT,
      })
    ).toMatchObject({
      activeHintIndex: 2,
    });

    expect(
      reducer({
        hints: ['aa', 'bb', 'cc'],
        activeHintIndex: 2,
      }, {
        type: actions.TOGGLE_ACTIVE_HINT,
      })
    ).toMatchObject({
      activeHintIndex: 0,
    });
  });
});
