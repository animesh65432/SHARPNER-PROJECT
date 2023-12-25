import React, { useState } from "react";
import "./ExpenseItem.css";
import Expensedate from "./Expensedate";

const ExpenseItem = ({ date, des, price }) => {
  const delete_the_items = (e) => {
    let item = e.target.parentElement;
    item.remove();
  };

  return (
    <div className="expense-item">
      <Expensedate date={date} />
      <div className="expense-item__description">
        <h2>{des}</h2>
      </div>
      <div className="expense-item__price">
        {Number(price).toLocaleString()}
      </div>
      <button onClick={delete_the_items}>del the items</button>
    </div>
  );
};

export default ExpenseItem;
