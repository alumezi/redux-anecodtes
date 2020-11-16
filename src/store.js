import { createStore, combineReducers } from 'redux'
import anecdotes from './reducers/anecdoteReducer'
import notification from './reducers/notificationReducer'
import filter from './reducers/filterReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const reducer = combineReducers({
    anecdotes,
    notification,
    filter
})
export const store = createStore(reducer, composeWithDevTools())