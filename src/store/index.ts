import { createStore, combineReducers } from 'redux'
import { AnyAction } from 'redux'
import { engineReducer } from './engine/reducers'

import { mySong } from '../data/testSong'

const songs = (state = mySong, action: AnyAction) => {
  switch (action.type) {
    case 'UPDATE_NOTE':
  console.log('ok')
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

const store = createStore(combineReducers({
  engine: engineReducer,
  songs
}))

export {
  store
}
