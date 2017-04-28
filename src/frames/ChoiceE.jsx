import ChoiceK from './ChoiceK'
import ChoiceL from './ChoiceL'

export default (panel) => ({
  background: () => (<span>Panel E</span>), // TODO: Implement yt video background
  timeline: [
    panel.awaitEvent('youtube-ready'),
    panel.wait(1000), // TODO: Get length of video and place time here
    panel.showOptions()
  ],
  options: [
    { text: 'CHOICE E OPTION A', onSelect: () => { panel.go(ChoiceK)() } },
    { text: 'CHOICE E OPTION B', onSelect: () => { panel.go(ChoiceL)() } }
  ]
})
