import React from 'react'

function Expfilter(props) {
    const changefilter=(event)=>{
        props.onfilter(event.target.value)
    }
  return (
    <div className='expenses-filter'>
    <div className='expenses-filter__control'>
      <label>Filter by year</label>
      <select value={props.selected} onChange={changefilter}>
        <option value='2023'>2023</option>
        <option value='2022'>2022</option>
        <option value='2021'>2021</option>
        <option value='2020'>2020</option>
        <option value='2019'>2019</option>
      </select>
    </div>
  </div>
  )
}

export default Expfilter