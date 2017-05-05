import Background from '../Background'

export default (panel) => ({
  background: ({ ...props }) => (<Background {...props} id='U3aGisC_I8Y' />), // TODO: Implement yt video background
  timeline: [
    panel.awaitEvent('youtube-ready'),
    panel.wait(48000), // TODO: Get length of video and place time here
    panel.gameOver()
  ],
  options: []
})

// U3aGisC_I8Y 
