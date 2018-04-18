import io from 'socket.io-client'
import {
  setId
} from '../actions'

let socket

export default function (store) {
  socket = io()

  // TODO: dispatch for user online
  socket.on('user:connect', data => {
    store.dispatch(setId(data.userId))
  })
}
