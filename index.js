import { store } from './store'

let hasStarted = false
const INTERVAL = 10
let elapsed = -INTERVAL

const getElapsedSince = (start) => new Date().getTime() - start
const debugModal = document.getElementById('timer')

const initialize = () => {
  if (hasStarted) {
    return
  }

  const start = new Date().getTime()

  const incrementTime = () => {
    elapsed += INTERVAL
    const diff = getElapsedSince(start) - elapsed

    store.dispatch({ type: 'INCREMENT', payload: elapsed })
    debugModal.innerText = elapsed
    setTimeout(incrementTime, INTERVAL - diff)
  }

  incrementTime()
  hasStarted = true
}

window.store = store
window.initialize = initialize

document.addEventListener('keydown', (e) => {
  if (e.code === 'Space') {
    console.log(elapsed)
  }
})

