import React from 'react'

class Countdown extends React.Component {
  constructor (props) {
    super(props)
    // ignore the rest of the content
    const [rawNumber, url] = props.data.content.split(' ')
    this.toUrl = url
    this.initialTime = parseInt(rawNumber) || 0
    this.interval = null
    this.state = {
      time: this.initialTime
    }

    this.updateTimer = this.updateTimer.bind(this)
  }

  componentDidMount () {
    if (!this.props.data.own) this.interval = setInterval(this.updateTimer, 1000)
  }

  updateTimer () {
    const newTime = this.state.time - 1
    this.setState({ time: newTime })
    if (newTime <= 0) {
      clearInterval(this.interval)
      this.onTimeout()
    }
  }

  onTimeout () {
    if (!this.props.data.own) {
      window.open(this.toUrl, '_blank')
    }
  }

  processMessage () {
    if (this.props.data.own) {
      return (
        <span>
          Countdown ({this.state.time}s) sent for this url:
           <a href={this.toUrl}>{this.toUrl}</a>
        </span>
      )
    } else {
      return (
        <span>{this.state.time}s... {this.toUrl}</span>
      )
    }
  }

  render () {
    return (
      <span>{this.processMessage()}</span>
    )
  }
}

export default Countdown
