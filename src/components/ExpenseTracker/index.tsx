import { useState } from "react";
import AddExpense, { type ExpenseDataType } from "./AddExpense";
import { ALL_CATEGORIES, type Filter } from "./constants";
import ExpenseList from "./ExpenseList";
import ExpenseFilter from "./ExpenseFilter";

export type ExpenseType = {
  id: number;
  amount: number;
  description: string;
  category: Filter;
};

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState<ExpenseType[]>([]);
  const [filter, setFilter] = useState<Filter>(ALL_CATEGORIES);
  const expensesToShow = expenses.filter(
    (item) => filter === ALL_CATEGORIES || filter === item.category
  );
  const handleAddExpense = (expense: ExpenseDataType) => {
    console.log(expenses, expense);
    const id = expenses.length === 0 ? 1 : expenses[expenses.length - 1].id + 1;
    setExpenses([...expenses, { ...expense, id }]);
  };
  return (
    <div>
      <AddExpense onAddExpense={handleAddExpense} />
      <ExpenseFilter
        onSelectCategory={(category: Filter) => {
          setFilter(category);
        }}
      />
      <ExpenseList
        expenses={expensesToShow}
        onDelete={(id: number) => {
          expenses.filter((item) => item.id != id);
        }}
      />
    </div>
  );
};

export default ExpenseTracker;
