import React from "react";
import "./NewExpense.css";
import NewExpensefrom from "./NewExpensefrom";

const NewExpense = (props) => {
  const on_get_data_from_NewExpressfrom = (obj) => {
    props.all_data_from_user(obj);
  };
  return (
    <div className="new-expense">
      <NewExpensefrom ondatafrom={on_get_data_from_NewExpressfrom} />
    </div>
  );
};

export default NewExpense;
