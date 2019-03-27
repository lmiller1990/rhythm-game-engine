import { createStandardAction } from 'typesafe-actions'

// The current time elapsed since the start of the current song
const incrementCurrentTime = createStandardAction('engine/IncrementCurrentTime')<number>()

export {
  incrementCurrentTime
}
