import React from 'react';
import { Anecdote } from './Anecdote';
import { useSelector } from 'react-redux';

export const AnecdoteList = () => {
    const anecdotes = useSelector(state => state.anecdotes)
    const filterKeyWord = useSelector(state => state.filter).toLowerCase()

    const sortAnecodtes = (anecdotes) => {
        return anecdotes.filter(item => item.content.toLowerCase().includes(filterKeyWord)).sort((a, b) => b.votes - a.votes)
    }

    return <>
        {sortAnecodtes(anecdotes).map(anecdote =>
            <Anecdote key={anecdote.id} id={anecdote.id} votes={anecdote.votes} content={anecdote.content} />
        )}
    </>
}   