import { combineReducers, createStore, applyMiddleware } from 'redux'
import questionDeck from './questions'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import score from './score'
// import user from './user'

const rootReducer = combineReducers({
  questionDeck,
  score, 
  // user
})

export default createStore(rootReducer, applyMiddleware(thunkMiddleware, createLogger()))
