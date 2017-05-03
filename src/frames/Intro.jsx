import ChoiceA from './ChoiceA'
import ChoiceB from './ChoiceB'

import Background from '../Background'

export default (panel) => ({
  background: ({ ...props }) => (<Background {...props} id='_RtodVD7Hz0' />), // TODO: Actually upload video
  timeline: [
    panel.awaitEvent('youtube-ready'),
    panel.wait(175000),
    panel.showOptions()
  ],
  options: [
    { text: 'BEFRIEND DENNIS', onSelect: () => { panel.go(ChoiceB)() } },
    { text: 'KILL DENNIS', onSelect: () => { panel.go(ChoiceA)() } }
  ]
})
