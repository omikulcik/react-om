import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import AppRouter from './routers/AppRouter';
import configureStore from "./store/configureStore.js";
import {addExpense} from "./actions/expenses.js";
import {setTextFilter} from "./actions/filters.js";
import getVisibleExpenses from "./selectors/expenses.js";
import 'normalize.css/normalize.css';
import './styles/styles.scss';


const store = configureStore();
store.subscribe(()=>{
    const state = store.getState();
    console.log(getVisibleExpenses(state.expenses, state.filters));
})

store.dispatch(setTextFilter("")) 

store.dispatch(addExpense({description:"Water bill",amount:500, createdAt:250}));
store.dispatch(addExpense({description:"Gas bill",amount:2400, createdAt:820}));
store.dispatch(addExpense({description:"Rent",amount:20000, createdAt:100}));

const jsx=(
    <Provider store={store}>
    <AppRouter/>
    </Provider>
    
);

ReactDOM.render(jsx , document.getElementById('app'));
