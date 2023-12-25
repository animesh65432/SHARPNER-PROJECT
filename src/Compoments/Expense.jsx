import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expense = () => {
  const expense_array = [
    {
      date: new Date(2023, 2, 12),
      des: "purchaseing the new car",
      price: "200000000",
    },
    {
      date: new Date(2022, 0, 10),
      des: "buying a new house",
      price: "100000000000000000000000",
    },
    {
      date: new Date(2024, 1, 1),
      des: "going to kolkata",
      price: "1239590",
    },
  ];
  return (
    <>
      {/* <Card>
        <div className="expenses ">
          <h1>EXPENSE ITEMS</h1>

          <br />

          <br />
        </div>
      </Card> */}
      <Card>
        {expense_array.map((obj) => (
          <ExpenseItem
            key={obj.des}
            date={obj.date}
            des={obj.des}
            price={obj.price}
          />
        ))}
      </Card>
      {/* <ExpenseItem date={date} des={des} price={price} /> */}
    </>
  );
};

export default Expense;
