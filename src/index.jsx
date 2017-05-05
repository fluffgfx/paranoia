import * as React from 'react'
import { render } from 'react-dom'
import Ivy from 'ivy-stories'

import first from './frames/Intro'
import OptsPanel from './OptsPanel'

window.React = React

class Wrapper extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      height: window.innerHeight,
      width: window.innerWidth,
      resizer: null
    }
  }

  componentDidMount () {
    window.addEventListener('resize', this.onResize)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.onResize)
  }

  onResize (e) {
    if (this.state.resizer) window.clearTimeout(this.state.resizer)
    this.setState({
      resizer: window.setTimeout(() => {
        this.setState({
          resizer: null,
          width: window.innerWidth,
          height: window.innerHeight
        })
      }, 500)
    })
  }

  render () {
    const { height, width } = this.state
    return (
      <Ivy initialFrame={first} optionsPanel={OptsPanel} height={height} width={width} style={{ cursor: 'crosshair' }} />
    )
  }
}

render(
  <Wrapper />,
  document.getElementById('root')
)

// i'm tryin' to keep my faith
