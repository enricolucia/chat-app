import uuid from 'uuid/v4'
import {
  SET_ID,
  NEW_MESSAGE
} from '../constants'

export const defaultState = {
  myId: null,
  messages: []
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case NEW_MESSAGE:
      const newMessage = Object.assign(
        {},
        { ...action.payload, own: action.payload.sender === state.myId },
        { id: uuid() }
      )
      return Object.assign({}, state, {
        messages: [
          ...state.messages,
          newMessage
        ]
      })

    // TODO: check for friend online presence
    case SET_ID:
      return Object.assign({}, state, { myId: action.payload })

    default:
      return state
  }
}

export default reducer
