import React, { useState, useEffect } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useCollection } from "../../hooks/useCollection";

// styles
import styles from "./Home.module.css";

// components
import TransactionForm from "./TransactionForm";
import TransactionList from "./TransactionList";
import TotalExpense from "./TotalExpense";

export default function Home() {
  const [totalExpense, setTotalExpense] = useState(0);
  const { user } = useAuthContext();
  const { documents, error } = useCollection(
    "transactions",
    ["uid", "==", user.uid],
    ["createdAt", "desc"]
  );

  useEffect(() => {
    let total = 0;
    if (documents) {
      documents.forEach((doc) => {
        total += parseFloat(doc.amount);
      });
      setTotalExpense(total);
    }
  }, [documents]);

  return (
    <>
      {error && <p>{error}</p>}
      <TotalExpense totalExpense={totalExpense} />
      <div className={styles.container}>
        <div className={styles.content}>
          {error && <p>{error}</p>}
          {documents && <TransactionList transactions={documents} />}
        </div>
        <div className={styles.sidebar}>
          <TransactionForm uid={user.uid} />
        </div>
      </div>
    </>
  );
}
