import * as React from 'react'

interface IProps {
  msg: string
}

class App extends React.PureComponent<IProps> {
  public render(): JSX.Element {
    return <div>{this.props.msg}</div>
  }
}

export { App }