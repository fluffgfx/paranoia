import * as React from 'react'

const pStyle = {
  margin: '0',
  fontSize: '2.5em',
  padding: '0 0 0 0',
  color: 'rgba(0, 0, 0, 0)',
  opacity: '0',
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
  letterSpacing: '0.5em',
  cursor: 'pointer'
}

class OptsPanel extends React.Component {
  render () {
    return (
      <div style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: '0',
        left: '0',
        pointerEvents: 'none',
        cursor: 'crosshair'
      }}>
        { this.props.visible
          ? <div style={{
              position: 'relative',
              width: '100%',
              top: 'calc(50% + 21.5vw)', // love 2 hard code magic numbers
              height: '100px',
              transform: 'translateY(-50%)',
              textAlign: 'center',
              opacity: '0.5',
              pointerEvents: 'auto'
            }}>
              <p style={{ ...pStyle, top: '-5px' }} onClick={this.props.options[0].onSelect}>{this.props.options[0].text}</p>
              <p style={{ ...pStyle, bottom: '-5px' }} onClick={this.props.options[1].onSelect}>{this.props.options[1].text}</p>
            </div>
          : null }
      </div>
    )
  }
}

export default OptsPanel
