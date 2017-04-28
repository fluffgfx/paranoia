import ChoiceG from './ChoiceG'
import ChoiceH from './ChoiceH'

export default (panel) => ({
  background: () => (<span>Panel C</span>), // TODO: Implement yt video background
  timeline: [
    panel.awaitEvent('youtube-ready'),
    panel.wait(1000), // TODO: Get length of video and place time here
    panel.showOptions()
  ],
  options: [
    { text: 'CHOICE C OPTION A', onSelect: () => { panel.go(ChoiceG)() } },
    { text: 'CHOICE C OPTION B', onSelect: () => { panel.go(ChoiceH)() } }
  ]
})
