import Credits from './Credits'
import Intro from './Intro'

import Background from '../Background'

export default (panel) => ({
  background: ({ ...props }) => (<Background {...props} id='8CXn4G-aRts' />), // TODO: Implement yt video background
  timeline: [
    panel.awaitEvent('youtube-ready'),
    panel.wait(48000), // TODO: Get length of video and place time here
    panel.showOptions()
  ],
  options: [
    { text: 'OH CALL THE COPS', onSelect: () => { panel.go(Intro)() } },
    { text: 'CALL THE PREACHERS', onSelect: () => { panel.go(Credits)() } }
  ]
})

// U3aGisC_I8Y 
