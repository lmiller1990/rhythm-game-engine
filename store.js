import { createStore } from 'redux'

const time = (state = { time: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT': 
      return { ...state, time: action.payload }
    default:
      return state
  }
}

const store = createStore(time)

export {
  store
}
