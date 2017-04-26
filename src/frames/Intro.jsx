import ChoiceA from './ChoiceA'
import ChoiceB from './ChoiceB'

export default (panel) => ({
  background: () => (<span>Intro</span>), // TODO: Implement YT Video background
  timeline: [
    // TODO: Play the background video as soon as frame loads
    panel.wait(1000), // TODO: Wait for the length of the video (or until options are shown)
    panel.showOptions()
  ],
  options: [
    { text: 'Kill Dennis.', onSelect: () => { panel.go(ChoiceA)() } },
    { text: 'Spare Dennis.', onSelect: () => { panel.go(ChoiceB)() } }
  ]
})
