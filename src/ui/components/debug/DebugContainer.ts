import { connect } from 'react-redux'

import { IState } from '../../../store'
import { initialize } from '../../../engine/runner'
import { IStateProps, IDispatchProps } from './types'
import { Debug } from './Debug'
import { Dispatch, AnyAction } from 'redux';
import { INote } from '../../../types/song';
import { updateNote } from '../../../store/notes/actions';
import { untouchedNotes } from '../../../store/notes/selectors';


const mapStateToProps = (state: IState): IStateProps => {
  return {
    time: state.engine.time,
    untouchedNotes: untouchedNotes(state.notes)
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
