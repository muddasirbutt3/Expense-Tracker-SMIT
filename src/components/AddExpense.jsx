import React, { useState } from "react";
import styles from "./LeftPage.module.css";

function AddExpense({ setData, lefted }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  function handleClick() {
    if (amount < 0 || title == "" || !amount) {
      alert("Enter valid values.");
      return;
    }
    if(lefted == 0){
        alert("Enter Budget First.");
      return;
    }
    if (amount > lefted) {
      alert("Out of budget");
      return;
    }
    setData((prev) => [...prev, { id: Date.now(), title, amount }]);
    setTitle("");
    setAmount("");
  }
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Add Expense</h2>
      <label className={styles.label} htmlFor="title">
        Expense title:
      </label>
      <input
        className={styles.input}
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter Expense title"
      />
      <label className={styles.label} htmlFor="amount">
        Amount:
      </label>
      <input
        className={styles.input}
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        id="amount"
        placeholder="Enter Expense amount"
      />
      <button className={styles.btn} onClick={handleClick}>
        Add Expense
      </button>
    </div>
  );
}

export default AddExpense;
