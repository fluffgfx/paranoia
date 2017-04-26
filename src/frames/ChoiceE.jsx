import ChoiceK from './ChoiceK'
import ChoiceL from './ChoiceL'

export default (panel) => ({
  background: () => (<span>Panel E</span>), // TODO: Implement yt video background
  timeline: [
    // TODO: Play the background video as soon as frame loads
    panel.wait(1000), // TODO: Wait for the length of the video (or until options are shown)
    panel.showOptions()
  ],
  options: [
    { text: 'CHOICE E OPTION A', onSelect: () => { panel.go(ChoiceK)() } },
    { text: 'CHOICE E OPTION B', onSelect: () => { panel.go(ChoiceL)() } }
  ]
})
