import { createStore } from 'redux'
import reducers, { defaultState } from './reducers'

const configureStore = (initialState) => {
  const store = createStore(
    reducers,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

  if (process.env.NODE_ENV === 'development') {
    if (module.hot) {
      module.hot.accept()
    }
  }

  return store
}

const store = configureStore(defaultState)

export default store
