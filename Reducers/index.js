import { combineReducers, createStore, applyMiddleware } from 'redux'
import questionDeck from './questions'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import score from './score'

const rootReducer = combineReducers({
  questionDeck,
  score
})

export default createStore(rootReducer, applyMiddleware(thunkMiddleware, createLogger()))
