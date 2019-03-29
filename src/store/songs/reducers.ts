import { getType } from 'typesafe-actions'

import { actions, TActions, ISongsState } from './types'

const initialState: ISongsState = {
  all: {},
  ids: []
}

const songsReducer = (state: ISongsState = initialState, action: TActions): ISongsState => {
  switch (action.type) {
    case getType(actions.setSongs):
      return action.payload.songs.reduce<ISongsState>((acc, curr) => {
        if (!state.ids.includes(curr.id)) {
          acc.ids = [...acc.ids, curr.id]
        }
        acc.all[curr.id] = curr

        return acc
      }, state)

    default:
      return state
  }
}

export {
  songsReducer
}