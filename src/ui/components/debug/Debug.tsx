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
    const { time, start } = this.props

    return (
      <div>
        Time: {time}
        <button onClick={start}>
          Start
        </button>
      </div>
    )
  }
}

export {
  Debug
}