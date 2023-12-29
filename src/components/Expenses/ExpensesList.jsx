import "./ExpensesList.css";

import ExpenseItem from "./ExpenseItem";
import React from "react";

const ExpensesList = (props) => {
  let expensesContent = <p>NO Expenses are not found</p>;

  if (props.items.length === 0) {
    return <h2 className="Expenses-List_fallback">Found no expenses</h2>;
  }

  return (
    <>
      <ul className="Expenses-List">
        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </ul>
    </>
  );
};

export default ExpensesList;
