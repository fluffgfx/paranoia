export default (panel) => ({
  background: ({ ...props }) => (<Background {...props} id='gyK7UNrAEYA' />), // TODO: Implement yt video background
  timeline: [
    panel.awaitEvent('youtube-ready'),
    panel.wait(1000), // TODO: Get length of video and place time here
    panel.gameOver()
  ],
  options: []
})
