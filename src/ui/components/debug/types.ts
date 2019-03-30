import { INote } from '../../../types/song'

interface IStateProps {
  time: number
  untouchedNotes: INote[]
}

interface IDispatchProps {
  start: () => void
  updateNote: (note: INote) => void
}

type TProps = IStateProps & IDispatchProps

export {
  IStateProps,
  IDispatchProps,
  TProps
}