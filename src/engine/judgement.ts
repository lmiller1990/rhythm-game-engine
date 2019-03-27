import { IJudgement } from './types'

import { INote } from '../types/song'

interface INoteWithJudgement {
  note: INote
  judgement: IJudgement
}

const judge = (timeInMs: number, notes: INote[]): INoteWithJudgement => {
  let diff: number =  timeInMs - notes[0].timestamp
  let bestNote: INote = notes[0]

  for (const note of notes) {
    if (Math.abs(note.timestamp - timeInMs) < Math.abs(diff)) {
      bestNote = note
    }
  }

  return {
    note: bestNote,
    judgement: {
      diff: timeInMs - bestNote.timestamp
    }
  }
}

export {
  judge
}
