import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import networkExplorer from './reducers/network_explorer_reducer'
import { graphReducer } from 'cywidget-network'

const logger = createLogger()

const finalCreateStore = compose(
  applyMiddleware(thunk, logger),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)

export default function configureStore(reducers = { networkExplorer, graphReducer }) {
  return finalCreateStore(combineReducers(reducers))
}
