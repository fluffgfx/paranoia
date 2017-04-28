import ChoiceE from './ChoiceC'
import ChoiceF from './ChoiceD'

export default (panel) => ({
  background: () => (<span>Panel B</span>), // TODO: Implement yt video background
  timeline: [
    panel.awaitEvent('youtube-ready'),
    panel.wait(1000), // TODO: Get length of video and place time here
    panel.showOptions()
  ],
  options: [
    { text: 'CHOICE B OPTION A', onSelect: () => { panel.go(ChoiceE)() } },
    { text: 'CHOICE B OPTION C', onSelect: () => { panel.go(ChoiceF)() } }
  ]
})
