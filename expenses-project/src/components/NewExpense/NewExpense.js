import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const [folded, setFolded] = useState(true);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const toggleAddNewExpenseHandler = () => {
    setFolded((prevFolded) => {
      return !prevFolded;
    });
  };

  if (folded) {
    return (
      <div className="new-expense">
        <button onClick={toggleAddNewExpenseHandler}>Add new expense</button>
      </div>
    );
  }

  return (
    <div className="new-expense">
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onCancel={toggleAddNewExpenseHandler}
      />
    </div>
  );
};

export default NewExpense;
