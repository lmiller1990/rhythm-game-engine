import * as actions from './actions'
import { ActionType, getType } from 'typesafe-actions';

type TActions = ActionType<typeof actions>

interface IEngineState {
  time: number
}

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