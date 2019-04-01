import * as React from 'react'

import { TProps } from './types'

const MUTLIPLIER = .5

class Chart extends React.PureComponent<TProps> {
  position = (timestamp: number): number => {
    return (timestamp / (10 * MUTLIPLIER)) - (this.props.time / (10 * MUTLIPLIER))
  }

  public render(): JSX.Element {
    return (
      <div style={{ display: 'relative' }}>
        {this.props.notes.map(note => {
          return (
            <div 
              key={note.id}
              style={{ 
                position: 'absolute',
                border: '1px solid white',
                top: this.position(note.timestamp) + 'px'
              }}
            >
              {note.id} {note.timestamp} top: {note.timestamp/10}px
            </div>
          )
        })}
      </div>
    )
  }
}

export { Chart }