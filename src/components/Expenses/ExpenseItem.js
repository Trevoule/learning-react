import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = ({ expense }) => {

  // calling func useState returns array
  // first - variable itself
  // second - updating function
  // using array destructuring
  // state separated on per component basis
  // const used because no equal operator used
  const [title, setTitle] = useState(expense.title);


  const changeTitle = () => {

    // not only assigning new value 
    // but calling component again with changed state
    // but log - title -  will not be updated at first call
    setTitle("Updated!");
    console.log(title);
  };

  return (
    <div className="expense-item">
      <ExpenseDate date={expense.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">$ {expense.amount}</div>
        <button onClick={changeTitle}>Change Title</button>
      </div>
    </div>
  );
};

export default ExpenseItem;
