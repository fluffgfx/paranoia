import ChoiceC from './ChoiceC'
import ChoiceD from './ChoiceD'

import Background from './Background'

// rebecca chooses to kill dennis
export default (panel) => ({
  background: ({ ...props }) => (<Background {...props} id='Qqom-eAIGK8' />),
  timeline: [
    panel.awaitEvent('youtube-ready'),
    panel.wait(1000), // TODO: Get length of video and place time here
    panel.showOptions()
  ],
  options: [
    { text: 'CHOICE A OPTION A', onSelect: () => { panel.go(ChoiceC)() } },
    { text: 'CHOICE A OPTION B', onSelect: () => { panel.go(ChoiceD)() } }
  ]
})
