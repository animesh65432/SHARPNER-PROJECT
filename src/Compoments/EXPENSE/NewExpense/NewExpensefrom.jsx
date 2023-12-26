import React, { useState } from "react";
import "./NewExpensefrom.css";

const NewExpensefrom = () => {
  const [inputuser, setinputuser] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const titleChangeHandler = (event) => {
    setinputuser({
      ...inputuser,
      title: event.target.value,
    });
  };

  const amountChangeHandler = (event) => {
    setinputuser({
      ...inputuser,
      amount: event.target.value,
    });
  };

  const dateChangeHandler = (event) => {
    setinputuser({
      ...inputuser,
      date: event.target.value,
    });
  };

  return (
    <form className="new-expense__controls">
      <div className="new-expense__control">
        <label>TITLE</label>
        <input
          type="text"
          value={inputuser.title}
          onChange={titleChangeHandler}
        />
      </div>
      <div className="new-expense__control">
        <label>AMOUNT</label>
        <input
          type="number"
          value={inputuser.amount}
          onChange={amountChangeHandler}
        />
      </div>
      <div className="new-expense__control">
        <label>DATE</label>
        <input
          type="date"
          min="2019-01-01"
          step="2023-01-12"
          value={inputuser.date}
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
