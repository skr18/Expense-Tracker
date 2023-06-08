
import { useState } from 'react';
import './App.css';
import Expences from './components/Expences';
import NewExpense from './expense/NewExpense';

const data = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [exp,setexp] = useState(data)
  const newdata =(nwdata)=>{
    console.log(nwdata)
    setexp([nwdata,...exp])
  }
  return (
    <div >
      <NewExpense onNewdata={newdata}/>
      <Expences items={exp} />
    </div>
  );
}

export default App;
