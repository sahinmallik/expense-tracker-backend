import React from "react";
import styles from "./Home.module.css";
export default function TotalExpense({ totalExpense }) {
  return (
    <div className={styles.totalExpense}>
      <div>
        <p className={styles.total}>Total Expense: </p>
        <p className={styles.totalamount}>₹{totalExpense}</p>
      </div>
    </div>
  );
}
