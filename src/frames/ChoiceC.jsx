import ChoiceG from './ChoiceG'
import ChoiceH from './ChoiceH'

export default (panel) => ({
  background: ({ ...props }) => (<Background {...props} id='YVVgNX_CCBo' />),
  timeline: [
    panel.awaitEvent('youtube-ready'),
    panel.wait(1000), // TODO: Get length of video and place time here
    panel.showOptions()
  ],
  options: [
    { text: 'ACCUSE KRYSTAL', onSelect: () => { panel.go(ChoiceG)() } },
    { text: 'BELIEVE KRYSTAL', onSelect: () => { panel.go(ChoiceH)() } }
  ]
})
