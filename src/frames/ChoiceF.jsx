import ChoiceM from './ChoiceM'
import ChoiceN from './ChoiceN'

export default (panel) => ({
  background: () => (<span>Panel F</span>), // TODO: Implement yt video background
  timeline: [
    panel.awaitEvent('youtube-ready'),
    panel.wait(1000), // TODO: Get length of video and place time here
    panel.showOptions()
  ],
  options: [
    { text: 'CHOICE F OPTION A', onSelect: () => { panel.go(ChoiceM)() } },
    { text: 'CHOICE F OPTION B', onSelect: () => { panel.go(ChoiceN)() } }
  ]
})
