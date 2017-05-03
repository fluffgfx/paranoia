import ChoiceA from './ChoiceA'
import ChoiceB from './ChoiceB'

import Background from '../Background'

export default (panel) => ({
  background: ({ ...props }) => (<Background {...props} id='1PEcQ6PyWiA' />), // TODO: Actually upload video
  timeline: [
    panel.awaitEvent('youtube-ready'),
    panel.wait(175000),
    panel.showOptions()
  ],
  options: [
    { text: 'ACCUSE DENNIS', onSelect: () => { panel.go(ChoiceA)() } },
    { text: 'KILL DENNIS', onSelect: () => { panel.go(ChoiceB)() } }
  ]
})
