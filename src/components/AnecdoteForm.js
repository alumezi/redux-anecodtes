import React from 'react';
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'

export const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const addAnecdote = event => {
        event.preventDefault()
        event.stopPropagation()
        dispatch(createAnecdote(event.target.content.value))
        event.target.content.value = ""
    }

    return <>
        <h2>create new</h2>
        <form onSubmit={addAnecdote}>
            <div><input type="text" name="content" /></div>
            <button type="submit">create</button>
        </form>
    </>
}