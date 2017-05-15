import ChoiceG from './ChoiceG'
import ChoiceH from './ChoiceH'

import Background from '../Background'

export default (panel) => ({
  background: ({ ...props }) => (<Background {...props} id='rwARqKzqv78' />),
  timeline: [
    panel.awaitEvent('youtube-ready'),
    panel.wait(150000), // TODO: Get length of video and place time here
    panel.showOptions()
  ],
  options: [
    { text: 'ACCUSE KRYSTAL', onSelect: () => { panel.go(ChoiceG)() } },
    { text: 'BELIEVE KRYSTAL', onSelect: () => { panel.go(ChoiceH)() } }
  ]
})
