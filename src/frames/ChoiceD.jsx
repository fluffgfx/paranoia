import ChoiceI from './ChoiceI'
import ChoiceJ from './ChoiceJ'

export default (panel) => ({
  background: () => (<span>Panel D</span>), // TODO: Implement yt video background
  timeline: [
    // TODO: Play the background video as soon as frame loads
    panel.wait(1000), // TODO: Wait for the length of the video (or until options are shown)
    panel.showOptions()
  ],
  options: [
    { text: 'CHOICE D OPTION A', onSelect: () => { panel.go(ChoiceI)() } },
    { text: 'CHOICE D OPTION B', onSelect: () => { panel.go(ChoiceJ)() } }
  ]
})
