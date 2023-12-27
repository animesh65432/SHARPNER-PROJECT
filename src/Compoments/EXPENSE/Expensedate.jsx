import React from "react";
import "./Expensedate.css";

let Expensedate = ({ date }) => {
  const day = date.toLocaleString("en-us", { day: "2-digit" });
  const month = date.toLocaleString("en-us", { month: "long" });
  const year = date.toLocaleString("en-us", { year: "numeric" });

  return (
    <div className="expense-date">
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
};

export default Expensedate;
