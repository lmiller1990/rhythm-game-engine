import { INote } from 'src/types/song'
import { NOTE_OUTER_WINDOW_MS } from './constants';
import { TColumns } from './types'

const judge = (column: TColumns, timeInMs: number, notes: INote[]): INote | null => {
  let diff: number =  Infinity
  let bestNote: INote | null;

  for (const note of notes) {
    if (note.touchedAt || note.column !== column) {
      continue
    }

    if (Math.abs(note.timestamp - timeInMs) < Math.abs(diff)) {
      bestNote = note
      diff = note.timestamp - timeInMs
    }
  }

  if (!bestNote || Math.abs(bestNote.timestamp - timeInMs) > NOTE_OUTER_WINDOW_MS) {
    return null
  }

  return bestNote
}

export {
  judge
}
