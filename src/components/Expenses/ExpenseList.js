import React, { useState } from "react";
import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function ExpenseList(props) {
  const [filterByYear, setFilterByYear] = useState("2019");

  const filterByYearChangeHandler = (newYear) => {
    setFilterByYear(newYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={filterByYear}
        onFilterByYearChange={filterByYearChangeHandler}
      />
      {props.expenses
        .filter((expense) => {
          return expense.date.getFullYear() === Number(filterByYear);
        })
        .map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          );
        })}
    </Card>
  );
}

export default ExpenseList;
