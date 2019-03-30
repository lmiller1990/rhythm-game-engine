import { createStore, combineReducers } from 'redux'

import { engineReducer } from './engine/reducers'
import { songsReducer } from './songs/reducers';
import { notesReducer } from './notes/reducers'

import { IEngineState } from './engine/types'
import { ISongsState } from './songs/types'
import { INotesState } from './notes/types'

interface IState {
  songs: ISongsState
  engine: IEngineState
  notes: INotesState
}
const configureStore = () => createStore(combineReducers({
  engine: engineReducer,
  songs: songsReducer,
  notes: notesReducer
}))

export {
  configureStore,
  IState
}
