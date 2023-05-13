import React from 'react'
import './Expense.css'
import ExpenceCard from './ExpenceCard';
function Expences(props) {
  return (
    <div className="expenses">
        {
            props.items.map((ele)=>{
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