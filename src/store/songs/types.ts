import { ActionType } from 'typesafe-actions';

import * as actions from './actions'
import { IBaseState } from '../shared/types'
import { ISong } from '../../types/song'

type TActions = ActionType<typeof actions>

interface ISongsState extends IBaseState<ISong> {}

export {
  actions,
  TActions,
  ISongsState
}