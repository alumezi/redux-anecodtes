import React, { useState } from 'react';
import { vote } from '../reducers/anecdoteReducer';
import { useDispatch } from 'react-redux'
import { setNotification, removeNotification } from '../reducers/notificationReducer';
export const Anecdote = ({ id, content, votes }) => {
    const dispatch = useDispatch()


    const voteAnecdote = () => {
        dispatch(vote(id))
        dispatch(setNotification(`You voted '${content}'`))
        setTimeout(() => {
            dispatch(removeNotification())
        }, 5000)
    }

    return <div>
        <div>
            {content}
        </div>
        <div>
            has {votes}
            <button onClick={() => voteAnecdote()}>vote</button>
        </div>
    </div>
}