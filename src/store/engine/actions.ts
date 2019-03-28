import { createStandardAction } from 'typesafe-actions'

// The current time elapsed since the start of the current song
interface IIncrementCurrentTimePayload {
  time: number
}
const incrementCurrentTime = createStandardAction('engine/INCREMENT_CURRENT_TIME')<IIncrementCurrentTimePayload>()

export {
  incrementCurrentTime
}
