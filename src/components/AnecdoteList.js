import React from 'react';
import { Anecdote } from './Anecdote';
import { connect } from 'react-redux';

const Anecdotes = (props) => {
    return <>
        {props.anecdotes.map(anecdote =>
            <Anecdote key={anecdote.id} id={anecdote.id} votes={anecdote.votes} content={anecdote.content} />
        )}
    </>
}

const mapStateToProps = (state) => {
    return {
        anecdotes: state.anecdotes.filter(item => item.content.toLowerCase().includes(state.filter.toLowerCase())).sort((a, b) => b.votes - a.votes),
    }
}


export const AnecdoteList = connect(mapStateToProps)(Anecdotes)