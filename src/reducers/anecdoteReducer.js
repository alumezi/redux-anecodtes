import { getAllAnecdotes } from '../services/anecdotes'

export const change = data => {
  return {
    type: 'CHANGE',
    data
  }
}

export const createAnecdote = data => {
  return {
    type: "CREATE",
    data
  }
}

export const getAnecdotes = () => {
  return async dispatch => {
    const data = await getAllAnecdotes()
    dispatch({
      type: "SET_ANECDOTES",
      data
    })
  }
}

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_ANECDOTES':
      return action.data
    case 'CHANGE':
      const id = action.data.id;
      return state.map(item => item.id !== id ? item : action.data)
    case 'CREATE':
      return state.concat(action.data)
    default:
      return state
  }
}

export default reducer