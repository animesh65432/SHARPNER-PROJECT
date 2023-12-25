import React, { useState } from "react";
import "./ExpenseItem.css";
import Expensedate from "./Expensedate";

const ExpenseItem = ({ date, des, price }) => {
  const delete_the_items = (e) => {
    let item = e.target.parentElement;
    item.remove();
  };

  const [title, change_the_title] = useState(des);

  const update_the_work = () => {
    change_the_title("update");
  };

  const [money, setmoney] = useState(price);

  const change_the_expense = () => {
    setmoney("100$");
  };

  return (
    <div className="expense-item">
      <Expensedate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price">{money}</div>
      <button onClick={update_the_work}>change_the_work</button>
      <button onClick={delete_the_items}>del the items</button>
      <button onClick={change_the_expense}>chnage_expense</button>
    </div>
  );
};

export default ExpenseItem;
