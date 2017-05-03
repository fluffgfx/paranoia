import Background from '../Background'

export default (panel) => ({
  background: ({ ...props }) => (<Background {...props} id='w10-3FQMep0' />),
  timeline: [
    panel.awaitEvent('youtube-ready'),
    panel.wait(1000), // TODO: Get length of video and place time here
    panel.gameOver()
  ],
  options: []
})

// id: w10-3FQMep0
