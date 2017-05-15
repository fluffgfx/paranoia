import Background from '../Background'

export default (panel) => ({
  background: ({ ...props }) => (<span>credits</span>),
  timeline: [
    panel.awaitEvent('youtube-ready'),
    panel.wait(150000), // TODO: Get length of video and place time here
    panel.showOptions()
  ],
  options: []
})
