import React from 'react'
import { useSelector } from 'react-redux'
import { Anecdote } from './components/Anecdote'
import { AnecdoteForm } from './components/AnecdoteForm'


const App = () => {
  const anecdotes = useSelector(state => state)
  
  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <Anecdote key={anecdote.id} id={anecdote.id} votes={anecdote.votes} content={anecdote.content} />
      )}
      <AnecdoteForm />
    </div>
  )
}

export default App