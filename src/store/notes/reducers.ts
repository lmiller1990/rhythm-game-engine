import { getType } from 'typesafe-actions'

import { actions, TActions, INotesState } from './types'
import { initialNotesState } from '../../data/testNotes'

const initialState: INotesState = {
  all: {},
  ids: []
}

const notesReducer = (state: INotesState = initialNotesState, action: TActions): INotesState => {
  switch (action.type) {
    case getType(actions.updateNote):
      const ids = state.all[action.payload.note.id]
        ? state.ids
        : [...state.ids, action.payload.note.id]

      return {
        ...state,
        ids,
        all: {
          ...state.all,
          [action.payload.note.id]: action.payload.note
        }
      }

    default:
      return state
  }
}

export {
  notesReducer
}