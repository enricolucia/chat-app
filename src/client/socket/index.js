import io from 'socket.io-client'
import {
  setId
} from '../actions'

let socket
const emitPath = 'user:interact'

export const chatMiddleware = (store) => {
  return next => action => {
    const result = next(action)

    if (action.emit && socket) {
      socket.emit(emitPath, {
        ...result,
        emit: false
      })
    }

    return result
  }
}

export default function (store) {
  socket = io()

  // TODO: dispatch for user online
  socket.on('user:connect', data => {
    store.dispatch(setId(data.userId))
  })
}
