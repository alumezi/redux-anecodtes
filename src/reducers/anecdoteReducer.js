const getId = () => (100000 * Math.random()).toFixed(0)

export const vote = id => {
  return {
    type: 'VOTE',
    data: {
      id
    }
  }
}

export const createAnecdote = content => {
  return {
    type: "CREATE",
    data: {
      content,
      votes: 0,
      id: getId()
    }
  }
}

export const setAnecdotes = data => {
  return {
    type: "SET_ANECDOTES",
    data
  }
}

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_ANECDOTES':
      return action.data
    case 'VOTE':
      const id = action.data.id;
      const anecdote = state.find(item => item.id === id)
      const changedAnecdote = { ...anecdote, votes: anecdote.votes + 1 }
      return state.map(item => item.id !== id ? item : changedAnecdote)
    case 'CREATE':
      return state.concat(action.data)
    default:
      return state
  }
}

export default reducer