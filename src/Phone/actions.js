export const HINTS_FETCH = 'HINTS/FETCH';
export const HINTS_FETCH_FAILED = 'HINTS/FETCH_FAILED';
export const HINTS_SET = 'HINTS/SET';
export const HINTS_RESET = 'HINTS/RESET';

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

export const fetchFail = (message) => ({
  type: "HINTS_FETCH_FAILED", message 
});