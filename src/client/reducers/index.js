import uuid from 'uuid/v4'
import {
  SET_ID,
  NEW_MESSAGE,
  SET_NICK,
  SET_TYPING,
  RESET_TYPING,
  FADE_LAST
} from '../constants'

export const defaultState = {
  myId: null,
  messages: [],
  myNick: null,
  friendNick: null,
  isTyping: false
}

export const getLastIndex = (messages, id) => {
  for (let i = messages.length - 1; i >= 0; --i) {
    if (messages[i].sender === id) return i
  }
  return null
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

    case FADE_LAST:
      if (!state.messages.length) return state

      const fadeIndex = getLastIndex(state.messages, action.payload.id)
      if (fadeIndex === null) return state

      return Object.assign({}, state, {
        messages: [
          ...state.messages.slice(0, fadeIndex),
          Object.assign({}, state.messages[fadeIndex], {faded: true}),
          ...state.messages.slice(fadeIndex + 1)
        ]
      })

    case SET_NICK:
      const nickAllocation = action.payload.id === state.myId ? 'myNick' : 'friendNick'
      return Object.assign({}, state, {[nickAllocation]: action.payload.content})

    case SET_TYPING:
      if (action.payload.id === state.myId) return state

      return Object.assign({}, state, { isTyping: true })

    case RESET_TYPING:
      if (action.payload.id === state.myId) return state

      return Object.assign({}, state, { isTyping: false })

    // TODO: check for friend online presence
    case SET_ID:
      return Object.assign({}, state, { myId: action.payload })

    default:
      return state
  }
}

export default reducer
