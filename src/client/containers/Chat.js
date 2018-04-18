import { connect } from 'react-redux'
import ChatView from '../components/ChatView'

const mapStateToProps = (state) => {
  return {
    myId: state.myId
  }
}

export default connect(mapStateToProps)(ChatView)
