import Credits from './Credits'
import Intro from './Intro'

import Background from '../Background'

export default (panel) => ({
  background: ({ ...props }) => (<Background {...props} id='jYmTjNDnWSs' />),
  timeline: [
    panel.awaitEvent('youtube-ready'),
    panel.wait(50000), // TODO: Get length of video and place time here
    panel.showOptions()
  ],
  options: [
    { text: 'BY TRIGGERED KIDS AND FAKERS', onSelect: () => { panel.go(Intro)() } },
    { text: 'AND SOME QUESTIONABLE VIEWS', onSelect: () => { panel.go(Credits)() } }
  ]
})
