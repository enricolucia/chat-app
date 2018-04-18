import React, { Component } from 'react'
import PropTypes from 'prop-types'
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
    const { myId } = this.props
    return (
      <ChatContainer>
        {myId}
      </ChatContainer>
    )
  }
}

ChatView.propTypes = {
  myId: PropTypes.string
}

export default ChatView
