import React,{useState} from 'react'
import Date from './Date'
import './ExpenceCard.css'
function ExpenceCard(props) {
  // const [title,settitle] = useState(props.title)
  // function tit(){
  //   settitle('updated')
  // }
  return (
    <div className='expense-item'>
      <Date date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        {/* <button onClick={tit}>Chnage</button> */}
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </div>
  )
}

export default ExpenceCard