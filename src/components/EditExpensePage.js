import React from 'react';
import {connect} from "react-redux";
import ExpenseForm from "./ExpenseForm";
import {removeExpense} from "../actions/expenses.js";
import {editExpense} from "../actions/expenses";

const EditExpensePage = (props) => {
  console.log(props);
  return (
    <div>
            <button
        onClick={()=>{
            props.dispatch(removeExpense(props.expense));
            props.history.push("/");
           }}
        >Remove</button>
      <ExpenseForm
        expense={props.expense}
        onSubmit={(expense) =>
        {
         props.dispatch(editExpense(props.expense.id,expense));
         props.history.push("/");
        }
        }
      />
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
      expense: state.expenses.find((expense)=> expense.id === props.match.params.id)
  };
}

export default connect(mapStateToProps)(EditExpensePage);
