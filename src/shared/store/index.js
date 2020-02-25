import {applyMiddleware, compose, createStore} from 'redux'
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'
import rootReducer from './rootReducer'

export const configureStore = () => {
  const devtools =
    typeof window !== 'undefined' &&
    typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({actionsBlacklist: []})

  const composeEnhancers = devtools || compose
  const middleware = [thunk]

  // TODO: Make it configurable(optional)
  if (process.env.NODE_ENV !== 'production') {
    middleware.push(
      createLogger({
        collapsed: true,
      }),
    )
  }

  return createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)))
}
