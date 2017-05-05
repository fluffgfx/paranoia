import Background from '../Background'

export default (panel) => ({
  background: ({ ...props }) => (<Background {...props} id='pewzcZn8vd0' />),
  timeline: [
    panel.awaitEvent('youtube-ready'),
    panel.wait(1000), // TODO: Get length of video and place time here
    panel.gameOver()
  ],
  options: []
})
