import { IJudgement } from './types'

const judge = (timeInMs: number, notes: number[]): IJudgement => {
  const closest = notes.reduce<IJudgement>((best, beat) => {
    const diff = Math.abs(timeInMs - beat)

    if (diff < best.diff) {
      return { beat, diff }
    }

    return best
  }, { beat: notes[0], diff: Math.abs(timeInMs - notes[0]) })

  return closest
}

export {
  judge
}
