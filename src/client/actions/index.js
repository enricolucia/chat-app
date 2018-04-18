import {
  // action constants
  NEW_MESSAGE,
  REMOVE_LAST_MESSAGE,
  SET_ID,
  REMOVE_ID,
  SET_NICK,
  SET_TYPING,
  RESET_TYPING,
  FADE_LAST,
  // short commands
  CMD_OOPS,
  CMD_NICK,
  CMD_FADE_LAST,
  CMD_THINK,
  CMD_TYPING,
  CMD_HIGHLIGHT,
  CMD_COUNTDOWN,
  CMD_NOT_TYPING
} from '../constants'

export const setId = (payload) => ({ type: SET_ID, payload })
export const newMessage = ({
  content,
  id,
  countdown = false,
  highlighted = false,
  think = false
}) => ({
  type: NEW_MESSAGE,
  emit: true,
  payload: {
    sender: id,
    countdown,
    content,
    highlighted,
    think
  }
})

export const highlightMessage = ({ content, id }) => (
  newMessage({ content, id, highlighted: true })
)

export const thinkMessage = ({ content, id }) => (
  newMessage({ content, id, think: true })
)

export const fadeLast = (payload) => ({ type: FADE_LAST, payload, emit: true })

export const setNick = (payload) => ({ type: SET_NICK, payload, emit: true })

export const setTyping = (payload) => ({
  type: SET_TYPING,
  emit: true,
  payload
})

export const resetTyping = (payload) => ({
  type: RESET_TYPING,
  payload,
  emit: true
})

const mappedActions = {
  [CMD_NICK]: setNick,
  [CMD_FADE_LAST]: fadeLast,
  [CMD_THINK]: thinkMessage,
  [CMD_TYPING]: setTyping,
  [CMD_NOT_TYPING]: resetTyping,
  [CMD_HIGHLIGHT]: highlightMessage
}

export const dispatchText = ({ content, id }) => {
  if (content.startsWith('/')) {
    const splitted = content.split(' ')

    const mappedAction = mappedActions[splitted[0]] || newMessage

    return mappedAction({
      id,
      content: splitted.slice(1).join(' ')
    })
  }
  return newMessage({id, content})
}
