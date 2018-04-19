import React, { Component } from 'react'
import Message from './Message'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledMessages = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  overflow-x: hidden;
`

class Messages extends Component {
  componentDidUpdate (prevProps) {
    if (prevProps.messages.length !== this.props.messages.length) {
      this.messagesWrapper.scrollTop = this.messagesWrapper.scrollHeight
    }
  }

  render () {
    const { messages } = this.props
    return (
      <StyledMessages innerRef={ref => { this.messagesWrapper = ref }}>
        {messages.map((message) =>
          <Message
            key={message.id}
            data={message}
            isCountdown={message.countdown} />
          )
        }
      </StyledMessages>
    )
  }
}

Messages.propTypes = {
  messages: PropTypes.array
}

export default Messages
