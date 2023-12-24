import React from "react";
import "./ExpenseItem.css";
import Expensedate from "./Expensedate";

function ExpenseItem({ date, des, price }) {
  return (
    <div className="expense-item">
      <Expensedate date={date} />
      <div className="expense-item__description">
        <h2>{des}</h2>
      </div>
      <div className="expense-item__price">
        {Number(price).toLocaleString()}
      </div>
    </div>
  );
}

export default ExpenseItem;
