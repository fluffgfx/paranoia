import ChoiceI from './ChoiceI'
import ChoiceJ from './ChoiceJ'

export default (panel) => ({
  background: () => (<span>Panel D</span>), // TODO: Implement yt video background
  timeline: [
    panel.awaitEvent('youtube-ready'),
    panel.wait(1000), // TODO: Get length of video and place time here
    panel.showOptions()
  ],
  options: [
    { text: 'CHOICE D OPTION A', onSelect: () => { panel.go(ChoiceI)() } },
    { text: 'CHOICE D OPTION B', onSelect: () => { panel.go(ChoiceJ)() } }
  ]
})
