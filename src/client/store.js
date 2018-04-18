import { createStore, applyMiddleware } from 'redux'
import reducers, { defaultState } from './reducers'
import initChat, { chatMiddleware } from './socket'

const createStoreWithMiddleware = applyMiddleware(chatMiddleware)(createStore)

const configureStore = (initialState) => {
  const store = createStoreWithMiddleware(
    reducers,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

  if (process.env.NODE_ENV === 'development') {
    if (module.hot) {
      module.hot.accept()
    }
  }

  initChat(store)

  return store
}

const store = configureStore(defaultState)

export default store
