import { connect } from 'react-redux'
import ChatView from '../components/ChatView'

import { dispatchText } from '../actions'

const mapStateToProps = (state) => {
  return {
    messages: state.messages,
    myId: state.myId,
    isTyping: state.isTyping
  }
}

const mapDispatchToProps = { dispatchText }

export default connect(mapStateToProps, mapDispatchToProps)(ChatView)
