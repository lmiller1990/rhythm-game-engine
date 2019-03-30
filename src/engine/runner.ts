import { Store, Dispatch, AnyAction } from 'redux'

import { incrementCurrentTime } from '../store/engine/actions'

const getElapsedSince = (start: number) => new Date().getTime() - start

let hasStarted = false
const INTERVAL = 10
let elapsed = -INTERVAL

const initialize = (dispatch: Dispatch<AnyAction>) => {
  if (hasStarted) {
    return
  }

  const start = new Date().getTime()

  const incrementTime = () => {
    elapsed += INTERVAL
    const diff = getElapsedSince(start) - elapsed
    dispatch(incrementCurrentTime({ time: elapsed }))
    setTimeout(incrementTime, INTERVAL - diff)
  }

  incrementTime()
  hasStarted = true
}

export {
  initialize
}
