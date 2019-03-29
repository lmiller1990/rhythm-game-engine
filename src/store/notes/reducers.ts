import { getType } from 'typesafe-actions'

import { actions, TActions, INotesState } from './types'

const initialState: INotesState = {
  ids: [
    1
  ],
  all: {
    '1': {
      id: '1',
      timestamp: 1000,
      touchedAt: null
    }
  }
}

const notesReducer = (state: INotesState = initialState, action: TActions): INotesState => {
  switch (action.type) {
    case getType(actions.updateNote):
      return {
        ...state,
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