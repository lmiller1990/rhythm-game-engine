import { createStore, combineReducers } from 'redux'

import { engineReducer } from './engine/reducers'
import { songsReducer } from './songs/reducers';
import { notesReducer } from './notes/reducers'


const store = createStore(combineReducers({
  engine: engineReducer,
  songs: songsReducer,
  notes: notesReducer
}))

export {
  store
}
