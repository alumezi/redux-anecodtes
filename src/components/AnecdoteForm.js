import React from 'react';
import { connect } from 'react-redux'
import { saveAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer';

export const AnecdoteFormComp = (props) => {
    const addAnecdote = async event => {
        event.preventDefault()
        event.stopPropagation()
        const inputValue = event.target.content.value;
        event.target.content.value = ""
        props.saveAnecdote({ content: inputValue, votes: 0 })
        props.setNotification(`You created '${inputValue}'`, 3000)
    }

    return <>
        <h2>create new</h2>
        <form onSubmit={addAnecdote}>
            <div><input type="text" name="content" /></div>
            <button type="submit">create</button>
        </form>
    </>
}

const mapDispatchToProps = () => {
    return {
        saveAnecdote,
        setNotification
    }
}

export const AnecdoteForm = connect(null, mapDispatchToProps)(AnecdoteFormComp)