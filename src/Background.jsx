import * as React from 'react'
import YT from 'react-youtube'

class Background extends React.Component {
  render () {
    const opts = {
      height: this.props.height,
      width: this.props.width,
      playerVars: {
        autoplay: 1
      }
    }
    return (
      <YT
        videoId={this.props.id}
        opts={opts}
        onReady={() => { this.props.events.emitEvent('youtube-ready') }} />
    )
  }
}
