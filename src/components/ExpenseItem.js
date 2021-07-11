/*
    Expense component for the expenses app.
*/
import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>28 de Marzo 2021</div>
      <div className="expense-item__description">
        <h2>Alquiler</h2>
        <div className="expense-item__price">$35000</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
