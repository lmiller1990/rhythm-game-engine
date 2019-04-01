import { connect } from 'react-redux'
import { Dispatch, AnyAction } from 'redux'

import { IState } from '../../../store'
import { initialize } from '../../../engine/runner'
import { IStateProps, IDispatchProps } from './types'
import { Debug } from './Debug'
import { INote } from '../../../types/song'
import { updateNote } from '../../../store/notes/actions'
import { untouchedNotes } from '../../../store/notes/selectors'
import { mapEntities } from '../../../store/shared/selectors'

const mapStateToProps = (state: IState): IStateProps => {
  return {
    time: state.engine.time,
    untouchedNotes: untouchedNotes(state.notes),
    notes: mapEntities(state.notes)
  }
}

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>): IDispatchProps => {
  return {
    start: () => initialize(dispatch),
    updateNote: (note: INote) => {
      dispatch(updateNote({ note }))
    }
  }
}

const DebugContainer = connect(mapStateToProps, mapDispatchToProps)(Debug)

export {
  DebugContainer
}
