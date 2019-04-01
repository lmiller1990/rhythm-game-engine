import { INote } from '../../../types/song'

interface IStateProps {
  notes: INote[]
  time: number
}

type TProps = IStateProps

export {
  TProps,
  IStateProps
}
