import React from 'react';
import { vote } from '../reducers/anecdoteReducer';
import { useDispatch } from 'react-redux'
export const Anecdote = ({ id, content, votes }) => {
    const dispatch = useDispatch()

    return <div>
        <div>
            {content}
        </div>
        <div>
            has {votes}
            <button onClick={() => dispatch(vote(id))}>vote</button>
        </div>
    </div>
}