import React from 'react';
import { useDispatch } from 'react-redux'
import { saveAnecdote } from '../reducers/anecdoteReducer'
import { setNotification, removeNotification } from '../reducers/notificationReducer';

export const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const addAnecdote = async event => {
        event.preventDefault()
        event.stopPropagation()
        const inputValue = event.target.content.value;
        event.target.content.value = ""
        dispatch(saveAnecdote({ content: inputValue, votes: 0 }))
        dispatch(setNotification(`You created '${inputValue}'`))
        setTimeout(() => {
            dispatch(removeNotification())
        }, 5000)
    }

    return <>
        <h2>create new</h2>
        <form onSubmit={addAnecdote}>
            <div><input type="text" name="content" /></div>
            <button type="submit">create</button>
        </form>
    </>
}