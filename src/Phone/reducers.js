import { combineReducers } from 'redux'
import { HINTS_FETCH_FAILED, HINTS_FETCH, HINTS_SET, HINTS_RESET } from './actions'

function hints(
  state = {
    isFetching: false,
    items: [],
  },
  action,
) {
  switch (action.type) {
    case HINTS_FETCH:
      return { 
        ...state, 
        isFetching: true,
      }

    case HINTS_SET:
      return {
        ...state,
        isFetching: false,
        items: action.hints,
      }
    case HINTS_FETCH_FAILED:
    case HINTS_RESET:
      return {
        ...state,
        isFetching: false,
        items: [],
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  hints,
})

export default rootReducer