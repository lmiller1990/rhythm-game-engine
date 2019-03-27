import { createStore, combineReducers } from 'redux'

const engine = (state = { time: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT': 
      return { ...state, time: action.payload }
    default:
      return state
  }
}

const store = createStore(combineReducers({
  engine
}))

export {
  store
}
