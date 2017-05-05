import ChoiceC from './ChoiceC'
import ChoiceD from './ChoiceD'

import Background from '../Background'

export default (panel) => ({
  background: ({ ...props }) => (<Background {...props} id='uwa73LnXGdM' />),
  timeline: [
    panel.awaitEvent('youtube-ready'),
    panel.wait(1000), // TODO: Get vid length
    panel.showOptions()
  ],
  options: [
    { text: 'ASDASFASFASFAS', onSelect: () => { panel.go(ChoiceC)() } },
    { text: 'ASFASFASDASDAS', onSelect: () => { panel.go(ChoiceD)() } }
  ]
})
