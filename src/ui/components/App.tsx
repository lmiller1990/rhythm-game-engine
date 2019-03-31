import * as React from 'react'

import { DebugContainer } from './debug/DebugContainer'
import { ChartContainer } from './chart/ChartContainer'

class App extends React.PureComponent {
  public render(): JSX.Element {
    return (
      <div>
        <DebugContainer />
        <ChartContainer />
      </div>
    )
  }
}

export { App }