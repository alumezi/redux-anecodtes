import React from 'react'
import { useSelector } from 'react-redux'
import { Anecdote } from './components/Anecdote'

const App = () => {
  const anecdotes = useSelector(state => state)

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <Anecdote key={anecdote.id} id={anecdote.id} votes={anecdote.votes} content={anecdote.content} />
      )}
      <h2>create new</h2>
      <form>
        <div><input /></div>
        <button>create</button>
      </form>
    </div>
  )
}

export default App