import React, { useState } from "react";
import styles from "./LeftPage.module.css";

function AddBudget({ setData }) {
  const [budget, setBudget] = useState();
  function handleClick() {
    if(0 > budget || !budget){
        alert('Enter valid budget.')
        return
    }
    console.log(budget);
    setData(budget);
    setBudget('')
  }
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Add Budget</h2>
      <label htmlFor="budget" className={styles.label}>
        Budget:
      </label>
      <input
        className={styles.input}
        type="number"
        value={budget}
        onChange={(e) => setBudget(e.target.value)}
        id="budget"
        placeholder="Enter Budget"
      />
      <button className={styles.btn} onClick={handleClick}>
        Add Budget
      </button>
    </div>
  );
}

export default AddBudget;
