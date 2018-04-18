import {
  SET_ID,
  NEW_MESSAGE
} from '../constants'

export const setId = (payload) => ({ type: SET_ID, payload })

export const newMessage = ({
  content
}) => ({
  type: NEW_MESSAGE,
  emit: true,
  payload: {
    content
  }
})

export const dispatchText = ({ content, id }) => {
  return newMessage({id, content})
}
