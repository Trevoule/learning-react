import React, { useState } from "react";

import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css"

const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const addFilter = (year) => {
    setFilteredYear(year);
  };

  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesFilter
          onFilterChange={addFilter}
          selectedYear={filteredYear}
        />
        <ExpensesList filteredExpenses={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
