import React, { Component } from 'react'
import Message from './Message'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledMessages = styled.div`

`

class Messages extends Component {
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
