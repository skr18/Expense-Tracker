import React,{useState} from 'react'
import './NewExpense.css'
function NewExpense() {
    const [title,newtitle]=useState('')
    const [amount,newamount] = useState('')
    const [date,newdate] = useState('')

    const tit = (event)=>{
        newtitle(event.target.value)
        console.log(event.target.value)
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
            title:newtitle,
            amount:newamount,
            date:newdate
        }
        console.log(data)
    }
  return (
    <div className='new-expense'>
        <form onSubmit={chage}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" onChange={tit}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type="number" onChange={amt}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date"  onChange={dat}/>
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