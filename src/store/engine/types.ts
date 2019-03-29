import { ActionType } from 'typesafe-actions';

import * as actions from './actions'

type TActions = ActionType<typeof actions>

interface IEngineState {
  time: number
}

export {
  actions,
  TActions,
  IEngineState
}