import React from "react";
import "./ExpenseItem.css";

function ExpenseItem({ date, des, price }) {
  return (
    <div className="expense-item">
      <div>{date.toLocaleDateString()}</div>
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
