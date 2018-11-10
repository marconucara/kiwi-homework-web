import { combineReducers } from 'redux'
import { 
  HINTS_FETCH_FAILED,
  HINTS_FETCH,
  HINTS_SET,
  HINTS_RESET,
  ADD_DIGIT,
  DELETE_DIGIT_OR_WORD,
  TOGGLE_ACTIVE_HINT,
  ADD_WORD,
} from './actions'

export const phone = (
  state = {
    isFetching: false,
    hints: [],
    activeHintIndex: 0,
    number: '',
    text: '',
  },
  action,
) => {
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
        fetchErrorMessage: '',
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
        activeHintIndex: 0,
      };
    case ADD_DIGIT:
      return { 
        ...state, 
        number: state.number.concat(action.digit),
      };
    case DELETE_DIGIT_OR_WORD:
      return { 
        ...state, 
        number: state.number.length ? state.number.slice(0, -1) : '',
        text: state.number.length ? state.text :
          (t => t.slice(0, t.match(/([^ ]* ?)$/).index))(state.text)
      };
    case ADD_WORD:
      const index = typeof action.index === 'number' ? action.index : state.activeHintIndex;
      return { 
        ...state, 
        text: state.text.concat(state.hints[index] || '', ' '),
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

export default rootReducer;
