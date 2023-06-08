import React,{useState} from 'react'
import './NewExpense.css'
function NewExpense(props) {
    const [title,newtitle]=useState('')
    const [amount,newamount] = useState('')
    const [date,newdate] = useState('')

    const tit = (event)=>{
        newtitle(event.target.value)
    }

    const amt = (event)=>{
        newamount(event.target.value)
    }
    const dat = (event)=>{
        newdate(event.target.value)
    }
    const chage = (event)=>{
        event.preventDefault()
        const data={
            title:title,
            amount:amount,
            date:new Date(date)
        }
        newtitle('')
        newamount('')
        newdate('')
        props.onNewdata(data)
    }
  return (
    <div className='new-expense'>
        <form onSubmit={chage}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" onChange={tit} value={title}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type="number" onChange={amt} value={amount}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date"  onChange={dat} value={date}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    </div>
  )
}

export default NewExpense