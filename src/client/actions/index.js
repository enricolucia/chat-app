import {
  SET_ID,
  NEW_MESSAGE,
  SET_TYPING,
  RESET_TYPING,

  CMD_TYPING,
  CMD_NOT_TYPING
} from '../constants'

export const setId = (payload) => ({ type: SET_ID, payload })

export const newMessage = ({
  content,
  id
}) => ({
  type: NEW_MESSAGE,
  emit: true,
  payload: {
    sender: id,
    content
  }
})

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
  [CMD_TYPING]: setTyping,
  [CMD_NOT_TYPING]: resetTyping
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
