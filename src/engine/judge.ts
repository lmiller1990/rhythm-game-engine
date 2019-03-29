import { INote } from 'src/types/song'

const judge = (timeInMs: number, notes: INote[]): INote | null => {
  let diff: number =  timeInMs - notes[0].timestamp
  let bestNote: INote = notes[0]

  for (const note of notes) {
    if (note.touchedAt) {
      continue
    }

    if (Math.abs(note.timestamp - timeInMs) < Math.abs(diff)) {
      bestNote = note
      diff = note.timestamp - timeInMs
    }
  }

  return bestNote
}

export {
  judge
}