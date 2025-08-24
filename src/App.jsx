import React,{ useEffect, useState } from "react";
import "./App.css";
import AddBudget from "./components/AddBudget";
import AddExpense from "./components/AddExpense";
import Expenses from "./components/Expenses";

function App() {
  const [leftBudget,setLeftBudget] = useState(0)
  const [expense,setExpense] = useState(() => {
    let preExpense = JSON.parse(localStorage.getItem('expense'))
    return preExpense ? preExpense : []
  })
  const [budget,setBudget] = useState(() => {
    let budget = localStorage.getItem('budget')
    return budget ? budget : 0
  })
  function resetAll(){
    setBudget(0)
    setExpense([])
    setLeftBudget(0)
  }
  
  useEffect(() => {
    localStorage.setItem('expense',JSON.stringify(expense))
    localStorage.setItem('budget',budget)
  },[expense,budget])
  return (
    <div className="parent">
      <div className="title">Expense Tracker</div>
      <div className='main'>
        <div className='left'>
          <AddBudget setData={setBudget}/>
          <AddExpense lefted={leftBudget} setData={setExpense} />
          <button className="resetall" onClick={resetAll}>Reset all</button>
        </div>
        <div className='right'>
          <Expenses lefted={setLeftBudget} data={expense} budget={budget}  setData={setExpense} />
        </div>
      </div>
    </div>
  );
}

export default App;
