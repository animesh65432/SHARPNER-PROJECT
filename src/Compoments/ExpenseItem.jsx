import React from "react";
import "./ExpenseItem.css";

function ExpenseItem({ name, amount }) {
  return (
    <>
      <div className="expense-item">
        <p className="expense-item__description">EXPENSEITEM-NAME = {name} </p>
        <p className="expense-item__description">AMOUNT-PRICES = {amount}</p>
      </div>
    </>
  );
}

export default ExpenseItem;
