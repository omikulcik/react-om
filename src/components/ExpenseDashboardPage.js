import React from 'react';
import ExpensesList from "./ExpensesList.js";
import ExpenseListFilter from "./ExpenseListFilter.js";

const ExpenseDashboardPage = () => (
  <div>
    This is from my dashboard component!
    <ExpenseListFilter/>
    <ExpensesList />
  </div>
);

export default ExpenseDashboardPage;
