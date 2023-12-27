import React, { useState } from "react";
import "./NewExpensefrom.css";

const NewExpensefrom = (props) => {
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
      date: new Date(event.target.value),
    });
  };

  const submit_the_from = (event) => {
    event.preventDefault();
    props.ondatafrom(inputuser);

    setinputuser({
      title: "",
      amount: "",
      date: "",
    });
  };

  return (
    <form className="new-expense__controls" onSubmit={submit_the_from}>
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
