import React, { useState } from "react";
import "./NewExpensefrom.css";

const NewExpensefrom = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setDate(e.target.value);
  };

  return (
    <form className="new-expense__controls">
      <div className="new-expense__control">
        <label>TITLE</label>
        <input type="text" value={title} onChange={titleChangeHandler} />
      </div>
      <div className="new-expense__control">
        <label>AMOUNT</label>
        <input type="number" value={amount} onChange={amountChangeHandler} />
      </div>
      <div className="new-expense__control">
        <label>DATE</label>
        <input
          type="date"
          min="2019-01-01"
          step="2023-01-12"
          value={date}
          onChange={dateChangeHandler}
        />
      </div>

      <div className="new-expense__actions">
        <button type="submit">ADD EXPENSE </button>
      </div>
    </form>
  );
};

export default NewExpensefrom;
