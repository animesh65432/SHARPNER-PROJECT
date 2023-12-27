import Card from "../../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import NewExpense from "./NewExpense/NewExpense";
import { useState } from "react";

const Expense = () => {
  const [expense_array, set_the_array] = useState([
    {
      date: new Date(2023, 2, 12),
      title: "purchaseing the new car",
      amount: "200000000",
    },
    {
      date: new Date(2022, 0, 10),
      title: "buying a new house",
      amount: "100000000000000000000000",
    },
    {
      date: new Date(2024, 1, 1),
      title: "going to kolkata",
      amount: "1239590",
    },
  ]);

  const user_data = (obj) => {
    set_the_array((prev_array) => [...prev_array, obj]);
  };

  return (
    <>
      {/* <Card>
        <div className="expenses ">
          <h1>EXPENSE ITEMS</h1>

          <br />

          <br />
        </div>
      </Card> */}
      <NewExpense all_data_from_user={user_data} />
      <Card>
        {expense_array.map((obj) => (
          <ExpenseItem
            key={obj.des}
            date={obj.date}
            des={obj.title}
            price={obj.amount}
          />
        ))}
      </Card>
      {/* <ExpenseItem date={date} des={des} price={price} /> */}
    </>
  );
};

export default Expense;
