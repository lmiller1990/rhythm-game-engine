import * as React from 'react'

import { TProps } from './types'
import { judge } from '../../../engine/judge'

class Debug extends React.PureComponent<TProps> {
  componentDidMount() {
    const columnKeys = ['ShiftLeft', 'ShiftRight']

    document.addEventListener('keydown', (e) => {
      if (columnKeys.includes(e.code)) {
        const bestNote = judge(
          e.code === 'ShiftLeft' ? 1 : 2,
          this.props.time, this.props.untouchedNotes
        )

        if (!bestNote) {
          return
        }
        
        this.props.updateNote({
          ...bestNote,
          touchedAt: this.props.time
        })
      }
    })
  }

  render(): JSX.Element {
    const { time, start, notes } = this.props

    return (
      <div style={{ fontSize: '30px', marginRight: '10px' }}>
        Time: {time}
        <button onClick={start}>
          Start
        </button>
        <div>Notes:</div>
        {notes.map(note => 
          <div key={note.id}>
            Timing: {note.touchedAt ? note.touchedAt - note.timestamp : ''}
          </div>
        )}
      </div>
    )
  }
}

export {
  Debug
}