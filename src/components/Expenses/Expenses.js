import ExpenseItem from "./ExpenseItem";

const Expenses = ({expenses}) => {
  return (
    <div className="expenses">
      {expenses.map((expense) => (
        <ExpenseItem expense={expense} key={expense.id} />
      ))}
    </div>
  );
}

export default Expenses;
