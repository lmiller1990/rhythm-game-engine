import { INotesState } from 'src/store/notes/types'
import { INote } from 'src/types/song'

const ids = new Array(10).fill(null).map((_, idx) => idx + 1)

const initialNotesState: INotesState = {
  ids,
  all: ids.reduce<{ [id: string]: INote }>((acc, curr) => {
    acc[curr] = {
      column: curr % 2 === 0 ? 1 : 2,
      id: curr,
      timestamp: curr * 1000,
      touchedAt: null
    }
    return acc
  }, {})
}

export {
  initialNotesState
}
