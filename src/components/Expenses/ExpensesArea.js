import React, { useState } from "react";
import "./ExpensesArea.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

function ExpensesArea(props) {
  const [filterByYear, setFilterByYear] = useState("2019");

  const filterByYearChangeHandler = (newYear) => {
    setFilterByYear(newYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear() === Number(filterByYear);
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={filterByYear}
        onFilterByYearChange={filterByYearChangeHandler}
      />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}

export default ExpensesArea;
