import ChoiceC from './ChoiceC'
import ChoiceD from './ChoiceD'

import Background from '../Background'

export default (panel) => ({
  background: ({ ...props }) => (<Background {...props} id='PJtq5ZCprmY' />),
  timeline: [
    panel.awaitEvent('youtube-ready'),
    panel.wait(345000), // 345000
    panel.showOptions()
  ],
  options: [
    { text: 'ASDASFASFASFAS', onSelect: () => { panel.go(ChoiceD)() } },
    { text: 'ASFASFASDASDAS', onSelect: () => { panel.go(ChoiceC)() } }
  ]
})
