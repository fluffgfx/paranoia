import ChoiceC from './ChoiceC'
import ChoiceD from './ChoiceD'

export default (panel) => ({
  background: () => (<span>Panel A</span>), // TODO: Implement yt video background
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
