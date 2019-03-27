import { createStore, combineReducers } from 'redux'

import { mySong } from './data/testSong'

const songs = (state = mySong, action) => {
  switch (action.type) {
    case 'UPDATE_NOTE':
      console.log(action.payload)
      const newState = {
        ...state,
        notes: state.notes.map(x => {
          if (action.payload.timestamp === x.timestamp) {
            return action.payload
          }

          return x
        })
      }

      return newState
    default:
      return state
  }

}

const engine = (state = { time: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT': 
      return { ...state, time: action.payload }
    default:
      return state
  }
}

const store = createStore(combineReducers({
  engine,
  songs
}))

export {
  store
}
