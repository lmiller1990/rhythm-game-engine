import { INote } from '../../types/song'
import { INotesState } from './types'
import { NOTE_OUTER_WINDOW_MS } from '../../engine/constants'

const judgedNotes = (state: INotesState): INote[] => {
  return state.ids.reduce<INote[]>((acc, curr) => {
    if (state.all[curr].touchedAt) {
      acc = [...acc, state.all[curr] ]
    }

    return acc
  }, [])
}

const untouchedNotes = (state: INotesState): INote[] => {
  return state.ids.reduce<INote[]>((acc, curr) => {
    if (!state.all[curr].touchedAt) {
      acc = [...acc, state.all[curr] ]
    }

    return acc
  }, [])
}

const missedNotes = (elapsed: number, state: INotesState): INote[] => {
  return state.ids.reduce<INote[]>((acc, curr) => {
    if (elapsed - state.all[curr].timestamp > NOTE_OUTER_WINDOW_MS) {
      acc = [ ...acc, state.all[curr] ]
    }

    return acc
  }, [])
}

export {
  judgedNotes,
  missedNotes,
  untouchedNotes
}
