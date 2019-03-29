import { store } from './store'
import { judge } from './engine/judge'
import { incrementCurrentTime } from './store/engine/actions'
import { updateNote } from './store/notes/actions';
import { judgedNotes } from './store/notes/selectors'

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
  const output = document.getElementById('judge')
  if (e.code === 'Space') {
    const untouchedNotes = store.getState().notes.ids.map(x => store.getState().notes.all[x]).filter(x => !x.touchedAt)
    const bestNote = judge(store.getState().engine.time, untouchedNotes)

    store.dispatch(updateNote({ 
      note: {
        ...bestNote,
        touchedAt: elapsed,
      }
    }))

    const judged = judgedNotes(store.getState().notes)
    let txt = ''

    for (const note of judged) {
      txt += `
        <div>id      : ${note.id}</div>
        <div>Time    : ${note.timestamp}</div>
        <div>Touched : ${note.touchedAt}</div>
        <div>Diff    : ${note.timestamp - note.touchedAt}</div>
        <br>
      `
    }

    output.innerHTML = txt
  }
})

