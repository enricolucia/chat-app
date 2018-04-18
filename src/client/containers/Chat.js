import { connect } from 'react-redux'
import ChatView from '../components/ChatView'

import { dispatchText } from '../actions'

const mapStateToProps = (state) => {
  return {
    messages: state.messages,
    myId: state.myId,
    isTyping: state.isTyping,
    friendNick: state.friendNick
  }
}

const mapDispatchToProps = { dispatchText }

export default connect(mapStateToProps, mapDispatchToProps)(ChatView)
