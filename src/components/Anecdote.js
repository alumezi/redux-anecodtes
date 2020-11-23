import React from 'react';
import { changeAnecdote } from '../reducers/anecdoteReducer';
import { useDispatch } from 'react-redux'
import { setNotification } from '../reducers/notificationReducer';
export const Anecdote = ({ id, content, votes }) => {
    const dispatch = useDispatch()

    const voteAnecdote = async () => {
        dispatch(changeAnecdote({id, content, votes: votes + 1}))
        dispatch(setNotification(`You voted '${content}'`, 3000))
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