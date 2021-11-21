import "./ExpensesList.css";

import ExpenseItem from "./ExpenseItem";

const ExpensesList = ({ filteredExpenses }) => {
   if (filteredExpenses.length === 0) {
     return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
   }

  if (filteredExpenses.length > 0) {
    let expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem expense={expense} key={expense.id} />
    ));

    return <ul className="expenses-list">{expensesContent}</ul>;
  }
};

export default ExpensesList;
