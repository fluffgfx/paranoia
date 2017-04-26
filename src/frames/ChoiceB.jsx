import ChoiceE from './ChoiceC'
import ChoiceF from './ChoiceD'

export default (panel) => ({
  background: () => (<span>Panel B</span>), // TODO: Implement yt video background
  timeline: [
    // TODO: Play the background video as soon as frame loads
    panel.wait(1000), // TODO: Wait for the length of the video (or until options are shown)
    panel.showOptions()
  ],
  options: [
    { text: 'CHOICE B OPTION A', onSelect: () => { panel.go(ChoiceE)() } },
    { text: 'CHOICE B OPTION C', onSelect: () => { panel.go(ChoiceF)() } }
  ]
})
