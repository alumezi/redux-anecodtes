import React from 'react';
import { changeAnecdote } from '../services/anecdotes'
import { change } from '../reducers/anecdoteReducer';
import { useDispatch } from 'react-redux'
import { setNotification, removeNotification } from '../reducers/notificationReducer';
export const Anecdote = ({ id, content, votes }) => {
    const dispatch = useDispatch()

    const voteAnecdote = async () => {
        const newAnecdote = await changeAnecdote({id, content, votes: votes + 1})
        console.log("voteAnecdote -> newAnecdote", newAnecdote)
        dispatch(change(newAnecdote))
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