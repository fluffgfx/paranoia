import Credits from './Credits'
import Intro from './Intro'

import Background from '../Background'

export default (panel) => ({
  background: ({ ...props }) => (<Background {...props} id='4kAqF9RZXk0' />), // TODO: Implement yt video background
  timeline: [
    panel.awaitEvent('youtube-ready'),
    panel.wait(53000), // TODO: Get length of video and place time here
    panel.showOptions(),
    panel.wait(15000),
    panel.go(Credits)
  ],
  options: [
    { text: 'BEFORE THEY LET US', onSelect: () => { panel.go(Intro)() } },
    { text: 'AND THEY LOSE', onSelect: () => { panel.go(Credits)() } }
  ]
})
