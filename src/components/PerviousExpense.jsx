import React from "react";
import styles from "./PerviousExpense.module.css";

function PerviousExpense({ data, setData }) {
  function deleteExpense(id) {
    setData(data.filter((item) => item.id != id));
  }
  return (
    <div className={styles.expense}>
      <div className={styles.head}>
        <div className={styles.title} style={{ width: "40%" }}>
          Expense Name
        </div>
        <div className={styles.title} style={{ width: "30%" }}>
          Amount
        </div>
        <div className={styles.title} style={{ width: "30%" }}>
          Action
        </div>
      </div>
      <div className={styles.previous}>
        {data.length == 0 ? (
          <div className={styles.nodata}>No Expense.</div>
        ) : (
          data.map((expense) => (
            <div className={styles.data} key={expense.id}>
              <div className={styles.item} style={{ width: "40%" }}>
                {expense.title}
              </div>
              <div className={styles.item} style={{ width: "30%" }}>
                {expense.amount}
              </div>
              <div className={styles.item} style={{ width: "30%" }}>
                <button
                  className={styles.btn}
                  onClick={() => deleteExpense(expense.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
        {/* <div className={styles.head}>
          <div
            className={styles.title}
            style={{ width: "40%", backgroundColor: "white" }}
          >
            Expense
          </div>
          <div
            className={styles.title}
            style={{ width: "30%", backgroundColor: "white" }}
          >
            Amount
          </div>
          <div
            className={styles.title}
            style={{ width: "30%", backgroundColor: "white" }}
          >
            Action
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default PerviousExpense;
