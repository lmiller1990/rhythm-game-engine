import { ActionType } from 'typesafe-actions';

import * as actions from './actions'
import { IBaseState } from '../shared/types'
import { INote } from '../../types/song'

type TActions = ActionType<typeof actions>

interface INotesState extends IBaseState<INote> {}

export {
  actions,
  TActions,
  INotesState
}