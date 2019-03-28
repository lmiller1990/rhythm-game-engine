import { getType } from 'typesafe-actions'

import { actions, TActions, IEngineState } from './types'

const initialState: IEngineState = {
  time: 0
}

const engineReducer = (state: IEngineState = initialState, action: TActions): IEngineState => {
  switch (action.type) {
    case getType(actions.incrementCurrentTime):
      return {
        ...state,
        time: action.payload.time
      } 

    default:
      return state
  }
}

export {
  engineReducer
}