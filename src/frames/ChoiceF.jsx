import ChoiceM from './ChoiceM'
import ChoiceN from './ChoiceN'

export default (panel) => ({
  background: () => (<span>Panel F</span>), // TODO: Implement yt video background
  timeline: [
    // TODO: Play the background video as soon as frame loads
    panel.wait(1000), // TODO: Wait for the length of the video (or until options are shown)
    panel.showOptions()
  ],
  options: [
    { text: 'CHOICE F OPTION A', onSelect: () => { panel.go(ChoiceM)() } },
    { text: 'CHOICE F OPTION B', onSelect: () => { panel.go(ChoiceN)() } }
  ]
})
