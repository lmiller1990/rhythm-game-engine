import { store } from './store'
import { judge } from './engine/judgement'
import { mySong } from './data/testSong'
import { incrementCurrentTime } from './store/engine/actions'

let hasStarted = false
const INTERVAL = 10
let elapsed = -INTERVAL

const getElapsedSince = (start: number) => new Date().getTime() - start
const debugModal = document.getElementById('timer')

const initialize = () => {
  if (hasStarted) {
    return
  }

  const start = new Date().getTime()

  const incrementTime = () => {
    elapsed += INTERVAL
    const diff = getElapsedSince(start) - elapsed
    store.dispatch(incrementCurrentTime({ time: elapsed }))
    debugModal.innerText = store.getState().engine.time.toString()
    setTimeout(incrementTime, INTERVAL - diff)
  }

  incrementTime()
  hasStarted = true
}

// @ts-ignore
window.store = store
// @ts-ignore
window.initialize = initialize

document.addEventListener('keydown', (e) => {
  if (e.code === 'Space') {
    const result = judge(store.getState().engine.time, store.getState().songs.notes)

    store.dispatch({
      type: 'UPDATE_NOTE',
      payload: {
        ...result.note, 
        touchedAt: result.note.timestamp + result.judgement.diff
      }
    })
  }
})

