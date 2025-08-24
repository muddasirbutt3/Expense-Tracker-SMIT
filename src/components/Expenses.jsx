import React from 'react'
import styles from './Expenses.module.css'
import PerviousExpense from './PerviousExpense'

function Expenses({data,setData,budget,lefted}) {
    console.log(data);
    
    const Total = data.reduce((acc,con) => {
        return acc + Number(con.amount)
    },0)
    lefted(Number(budget) - Total)
    console.log(Total);
    
  return (
    <div className={styles.expenseinfo}>
        <div className={styles.boxes}>
            <div className={styles.box}>Total Budget: {Number(budget).toFixed(2)}</div>
            <div className={styles.box}>Total Expenses: {Total.toFixed(2)}</div>
            <div className={styles.box}>Budget Left:{ (Number(budget) - Total).toFixed(2)}</div>
        </div>
        <div className={styles.title}>Expense History:</div>
        <PerviousExpense data={data} setData={setData}/>
    </div>
  )
}

export default Expenses