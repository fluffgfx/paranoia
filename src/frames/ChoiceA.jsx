import ChoiceC from './ChoiceC'
import ChoiceD from './ChoiceD'

export default (panel) => ({
  background: () => (<span>Panel A</span>), // TODO: Implement yt video background
  timeline: [
    // TODO: Play the background video as soon as frame loads
    panel.wait(1000), // TODO: Wait for the length of the video (or until options are shown)
    panel.showOptions()
  ],
  options: [
    { text: 'CHOICE A OPTION A', onSelect: () => { panel.go(ChoiceC)() } },
    { text: 'CHOICE A OPTION B', onSelect: () => { panel.go(ChoiceD)() } }
  ]
})
