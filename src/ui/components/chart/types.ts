import { INote } from '../../../types/song'

interface IStateProps {
  notes: INote[]
}

type TProps = IStateProps

export {
  TProps,
  IStateProps
}
