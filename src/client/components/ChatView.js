import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MessageForm from './messageForm'
import Messages from './messages'
import styled from 'styled-components'
import { parseEmoji } from '../utils'

const ChatContainer = styled.div`
  height: 100vh;
  width: 100;
  display: flex;
  flex-direction: column;
  width: 100%;
  font-family: Helvetica;
  background: #dbe1ee;
`

const FriendState = styled.div`
  padding: 5px;
  flex: 1;
  background: #275677;
  color: #FFFFFF;
`

class ChatView extends Component {
  constructor (props) {
    super(props)
    this.onInteraction = this.onInteraction.bind(this)
  }

  onInteraction (content) {
    content = parseEmoji(content)
    this.props.dispatchText({ content, id: this.props.myId })
  }

  render () {
    const { friendNick, isTyping, messages } = this.props
    return (
      <ChatContainer>
        <FriendState>
          <b>{friendNick || 'Friend'}{' '}</b>
          {isTyping && <i>is typing...</i>}
        </FriendState>
        <Messages messages={messages} />
        <MessageForm onInteraction={this.onInteraction} />
      </ChatContainer>
    )
  }
}

ChatView.propTypes = {
  dispatchText: PropTypes.func,
  messages: PropTypes.array,
  myId: PropTypes.string,
  friendNick: PropTypes.string,
  isTyping: PropTypes.bool
}

export default ChatView
