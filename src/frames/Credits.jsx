import Background from '../Background'

export default (panel) => ({
  background: ({ ...props }) => (<Background {...props} id='rW-_vkxMW5E' />),
  timeline: [
    panel.awaitEvent('youtube-ready'),
    panel.wait(138000), // TODO: Get length of video and place time here
    panel.gameOver()
  ],
  options: []
})
