import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expense() {
  return (
    <div className="expen">
      <h1>EXPENSE ITEMS</h1>

      <br />

      <br />

      <ExpenseItem name="FOOD" amount={10} />

      <ExpenseItem name="PETROL" amount={100} />

      <ExpenseItem name="MOVIES" amount={200} />
    </div>
  );
}

export default Expense;
