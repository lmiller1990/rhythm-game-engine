import * as React from 'react'

import { TProps } from './types'

class Chart extends React.PureComponent<TProps> {
  public render(): JSX.Element {
    return (
      <div style={{ display: 'relative' }}>
        {this.props.notes.map(note => {
          return (
            <div 
              key={note.id}
              style={{ 
                position: 'absolute',
                top: (note.timestamp / 10) + 'px'  
              }}
            >
              {note.id} {note.timestamp}
            </div>
          )
        })}
      </div>
    )
  }
}

export { Chart }