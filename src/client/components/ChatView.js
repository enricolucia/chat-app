import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Messages from './messages'
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
  constructor (props) {
    super(props)
    this.onInteraction = this.onInteraction.bind(this)
  }

  onInteraction (content) {
    this.props.dispatchText({ content, id: this.props.myId })
  }

  render () {
    const { messages } = this.props
    return (
      <ChatContainer>
        <Messages messages={messages} />
        <MessageForm onInteraction={this.onInteraction} />
      </ChatContainer>
    )
  }
}

ChatView.propTypes = {
  myId: PropTypes.string,
  messages: PropTypes.array
}

export default ChatView
