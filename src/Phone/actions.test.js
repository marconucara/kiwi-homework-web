import * as actions from './actions';

export const HINTS_FETCH_FAILED = 'HINTS/FETCH_FAILED';
export const HINTS_SET = 'HINTS/SET';
export const HINTS_RESET = 'HINTS/RESET';
export const ADD_DIGIT = 'ADD_DIGIT';
export const DELETE_DIGIT = 'DELETE_DIGIT';
export const ADD_WORD = 'ADD_WORD';
export const TOGGLE_ACTIVE_HINT = 'TOGGLE_ACTIVE_HINT';

describe('actions', () => {
  it('should create an action to fetch hints', () => {
    const number = '234';
    const expectedAction = {
      type: actions.HINTS_FETCH,
      number,
    };
    expect(actions.fetchHints(number)).toEqual(expectedAction)
  });

  it('should create an action to set hints after fetch', () => {
    const hints = ['aa', 'ba'];
    const expectedAction = {
      type: actions.HINTS_SET,
      hints,
    };
    expect(actions.setHints(hints)).toEqual(expectedAction)
  });

  it('should create an action to reset hints', () => {
    const expectedAction = {
      type: actions.HINTS_RESET,
    };
    expect(actions.resetHints()).toEqual(expectedAction)
  });

  it('should create an action to add digit', () => {
    const digit = 2;
    const expectedAction = {
      type: actions.ADD_DIGIT,
      digit,
    };
    expect(actions.addDigit(digit)).toEqual(expectedAction)
  });

  it('should create an action to remove digit', () => {
    const expectedAction = {
      type: actions.DELETE_DIGIT,
    };
    expect(actions.deleteDigit()).toEqual(expectedAction)
  });

  it('should create an action to add word', () => {
    const expectedAction = {
      type: actions.ADD_WORD,
    };
    expect(actions.addWord()).toEqual(expectedAction)
  });

  it('should create an action to toggle active hints', () => {
    const expectedAction = {
      type: actions.TOGGLE_ACTIVE_HINT,
    };
    expect(actions.toggleActiveHint()).toEqual(expectedAction)
  });
})