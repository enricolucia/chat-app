import {
  SET_ID
} from '../constants'

export const defaultState = {
  myId: null
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    // TODO: check for friend online presence
    case SET_ID:
      return Object.assign({}, state, { myId: action.payload })

    default:
      return state
  }
}

export default reducer
