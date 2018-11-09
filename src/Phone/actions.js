export const HINTS_FETCH = 'HINTS/FETCH';
export const HINTS_FETCH_FAILED = 'HINTS/FETCH_FAILED';
export const HINTS_SET = 'HINTS/SET';
export const HINTS_RESET = 'HINTS/RESET';
export const ADD_DIGIT = 'ADD_DIGIT';
export const DELETE_DIGIT = 'DELETE_DIGIT';
export const ADD_WORD = 'ADD_WORD';
export const TOGGLE_ACTIVE_HINT = 'TOGGLE_ACTIVE_HINT';

export const fetchHints = (number) => ({
  type: HINTS_FETCH,
  number,
});

export const setHints = (hints) => ({
  type: HINTS_SET,
  hints,
});

export const resetHints = () => ({
  type: HINTS_RESET
});

export const fetchFail = message => ({
  type: HINTS_FETCH_FAILED,
  message,
});

export const addDigit = digit => ({
  type: ADD_DIGIT,
  digit,
});

export const deleteDigit = digit => ({
  type: DELETE_DIGIT,
});

export const addWord = () => ({
  type: ADD_WORD,
});

export const toggleActiveHint = () => ({
  type: TOGGLE_ACTIVE_HINT,
});
