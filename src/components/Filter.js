import React from 'react'
import { connect } from 'react-redux'
import { addFilter } from '../reducers/filterReducer'

const FilterComponent = (props) => {
  const handleChange = (event) => {
    props.addFilter(event.target.value)
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

const mapDispatchToProps = () => {
  return {
    addFilter
  }
}

export const Filter = connect(null, mapDispatchToProps)(FilterComponent)