import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Expense from "./Compoments/EXPENSE/Expense";
import NewExpense from "./Compoments/EXPENSE/NewExpense/NewExpense";

const App = () => {
  return (
    <>
      <NewExpense />
      <Expense />
    </>
  );
};
export default App;
