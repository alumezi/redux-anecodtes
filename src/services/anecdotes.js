import axios from 'axios';

const baseUrl = 'http://localhost:3001/anecdotes'

export const getAllAnecdotes = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

export const createAnecdote = async data => {
    const response = await axios.post(baseUrl, { content: data.content, votes: data.votes })
    return response.data
}

export const changeAnecdote = async data => {
    const response = await axios.put(`${baseUrl}/${data.id}`, { content: data.content, votes: data.votes })
    return response.data
}