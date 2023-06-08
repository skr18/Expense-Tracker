import React, { useState } from 'react'
import './Expense.css'
import ExpenceCard from './ExpenceCard';
import Expfilter from './Expfilter';
function Expences(props) {
  const [year,setyear] = useState('2022')
  const changenow =(opt)=>{
    setyear(opt)
    console.log(year)
  }
  const newfilterdata =
    props.items.filter((ele)=>{
      return ele.date.getFullYear().toString() === year;
    })

  return (
    <div className="expenses">
      <Expfilter selected={year} onfilter={changenow}/>
        {
            newfilterdata.map((ele)=>{
                // console.log(ele.title)
                return <ExpenceCard
                    key={ele.id}
                    title={ele.title}
                    amount={ele.amount}
                    date={ele.date}
                />
            })
        }
       
    {/* <ExpenceCard
      title={props.items[1].title}
      amount={props.items[1].amount}
      date={props.items[1].date}
    />
    <ExpenceCard
      title={props.items[2].title}
      amount={props.items[2].amount}
      date={props.items[2].date}
    />
    <ExpenceCard
      title={props.items[3].title}
      amount={props.items[3].amount}
      date={props.items[3].date}
    /> */}
  </div>
);
  }
export default Expences