import * as React from 'react'

import { DebugContainer } from './debug/DebugContainer'

class App extends React.PureComponent {
  public render(): JSX.Element {
    return (
      <div>
        <DebugContainer />
      </div>
    )
  }
}

export { App }