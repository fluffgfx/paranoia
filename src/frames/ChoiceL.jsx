export default (panel) => ({
  background: () => (<span>Panel L</span>), // TODO: Implement yt video background
  timeline: [
    // TODO: Play the background video as soon as frame loads
    panel.wait(1000), // TODO: Wait for the length of the video (or until options are shown)
    panel.gameOver()
  ],
  options: []
})
