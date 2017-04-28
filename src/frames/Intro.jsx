import ChoiceA from './ChoiceA'
import ChoiceB from './ChoiceB'

export default (panel) => ({
  background: () => (<span>Intro</span>), // TODO: Implement YT Video background
  timeline: [
    panel.awaitEvent('youtube-ready'),
    panel.wait(1000), // TODO: Get length of video and place time here
    panel.showOptions()
  ],
  options: [
    { text: 'Kill Dennis.', onSelect: () => { panel.go(ChoiceA)() } },
    { text: 'Spare Dennis.', onSelect: () => { panel.go(ChoiceB)() } }
  ]
})
