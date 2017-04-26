import ChoiceG from './ChoiceG'
import ChoiceH from './ChoiceH'

export default (panel) => ({
  background: () => (<span>Panel C</span>), // TODO: Implement yt video background
  timeline: [
    // TODO: Play the background video as soon as frame loads
    panel.wait(1000), // TODO: Wait for the length of the video (or until options are shown)
    panel.showOptions()
  ],
  options: [
    { text: 'CHOICE C OPTION A', onSelect: () => { panel.go(ChoiceG)() } },
    { text: 'CHOICE C OPTION B', onSelect: () => { panel.go(ChoiceH)() } }
  ]
})
