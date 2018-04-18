import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Message from './message'
import MessageForm from './messageForm'
import styled from 'styled-components'

const ChatContainer = styled.div`
  height: 100vh;
  width: 100;
  display: flex;
  flex-direction: column;
  width: 100%;
  font-family: Helvetica;
  background: #dbe1ee;
`

class ChatView extends Component {
  render () {
    return (
      <ChatContainer>
        <Message data={{
          content: 'Lorem ipsum'
        }} />
        <MessageForm />
      </ChatContainer>
    )
  }
}

ChatView.propTypes = {
  myId: PropTypes.string
}

export default ChatView
