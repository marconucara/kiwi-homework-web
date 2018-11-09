import { combineReducers } from 'redux'
import { 
  HINTS_FETCH_FAILED,
  HINTS_FETCH,
  HINTS_SET,
  HINTS_RESET,
  ADD_DIGIT,
  DELETE_DIGIT,
  TOGGLE_ACTIVE_HINT,
  ADD_WORD,
} from './actions'

function phone(
  state = {
    isFetching: false,
    hints: [],
    activeHintIndex: 0,
    number: '',
    text: '',
  },
  action,
) {
  switch (action.type) {
    case HINTS_FETCH:
      return { 
        ...state, 
        isFetching: true,
        hints: [],
        activeHintIndex: 0,
      };
    case HINTS_SET:
      return {
        ...state,
        isFetching: false,
        hints: action.hints,
        activeHintIndex: 0,
      };
    case HINTS_FETCH_FAILED:
      return {
        ...state,
        isFetching: false,
        hints: [],
        activeHintIndex: 0,
        fetchErrorMessage: action.message,
      };
    case HINTS_RESET:
      return {
        ...state,
        isFetching: false,
        hints: [],
      };
    case ADD_DIGIT:
      return { 
        ...state, 
        number: state.number.concat(action.digit),
      };
    case DELETE_DIGIT:
      // TODO: it deletes only from current wordAsNumber, it could delete 
      // previous space and previous words too
      return { 
        ...state, 
        number: state.number.length ? state.number.slice(0, -1) : '',
      };
    case ADD_WORD:
      // TODO: it adds multiple whitespace but JSX/HTML do not show them
      return { 
        ...state, 
        text: state.text.concat(state.hints[state.activeHintIndex] || '', ' '),
        hints: [],
        activeHintIndex: 0,
        number: '',
      };
    case TOGGLE_ACTIVE_HINT:
      return { 
        ...state, 
        activeHintIndex: state.activeHintIndex < state.hints.length - 1 ? state.activeHintIndex + 1 : 0,
      };
    default:
      return state;
  }
}


const rootReducer = combineReducers({
  phone,
})

export default rootReducer