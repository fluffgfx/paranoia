import * as React from 'react'
import { render } from 'react-dom'
import Ivy from 'ivy-stories'

import first from './frames/Intro'

window.React = React

render(
  <Ivy initialFrame={first} />,
  document.getElementById('root')
)

// i'm tryin' to keep my faith
