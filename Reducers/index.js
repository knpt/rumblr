import { combineReducers, createStore, applyMiddleware } from 'redux'
import questionDeck from './questions'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

const rootReducer = combineReducers({
  questionDeck
})

export default createStore(rootReducer, applyMiddleware(thunkMiddleware, createLogger()))
