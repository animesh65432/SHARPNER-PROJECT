import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  return (
    <div>
      <Card className="expenses">
        <ExpenseItem
          title={props.items.title}
          amount={props.items.amount}
          date={props.items.date}
        />
      </Card>
    </div>
  );
};

export default Expenses;
