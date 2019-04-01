import { connect } from 'react-redux'

import { IState } from '../../../store'
import { IStateProps } from './types'
// import { Dispatch, AnyAction } from 'redux';
import { Chart } from './Chart';
import { untouchedNotes } from '../../../store/notes/selectors';


const mapStateToProps = (state: IState): IStateProps => {
  return {
    notes: untouchedNotes(state.notes),
    time: state.engine.time
  }
}

// const mapDispatchToProps = (dispatch: Dispatch<AnyAction>): IDispatchProps => {
//   return {
//   }
// }

const ChartContainer = connect(mapStateToProps)(Chart)

export {
  ChartContainer
}
