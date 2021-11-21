import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = ({ onCancel, onSaveExpenseData }) => {
  // multiples states
  const [inputtedTitle, setInputtedTitle] = useState("");
  const [inputtedAmount, setInputtedAmount] = useState("");
  const [inputtedDate, setInputtedDate] = useState("");

  // one state
  // const [userInput, setUserInput] = useState({
  //   inputtedTitle: "",
  //   inputtedAmount: "",
  //   inputtedDate: "",
  // });

  const titleChangeHandler = (e) => {
    setInputtedTitle(e.target.value);

    // for one state
    // if we depend on previous state
    // we should put function inside
    // we return previous and change state
    // react schedules updates

    //   setUserInput({
    //     ...userInput,
    //     inputtedTitle: e.target.value,
    //   });

    // - so we need to use latest state
    //   setUserInput((prevState) => {
    //     return { ...prevState, enteredTitle: e.target.value };
    //   });
  };

  const amountChangeHandler = (e) => {
    setInputtedAmount(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setInputtedDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: inputtedTitle,
      amount: inputtedAmount,
      date: new Date(inputtedDate),
    };

    onSaveExpenseData(expenseData);

    setInputtedTitle("");
    setInputtedAmount("");
    setInputtedDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={inputtedTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={inputtedAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            value={inputtedDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
