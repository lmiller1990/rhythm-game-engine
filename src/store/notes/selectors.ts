import { INote } from 'src/types/song'
import { INotesState } from './types'

const judgedNotes = (state: INotesState): INote[] => {
  return state.ids.reduce<INote[]>((acc, curr) => {
    if (state.all[curr].touchedAt) {
      acc = [...acc, state.all[curr] ]
    }

    return acc
  }, [])
}

export {
  judgedNotes
}
