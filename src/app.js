import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css'
import './styles/styles.scss'
import AppRouter from './routers/AppRouter'

const store = configureStore ()

store.dispatch ( addExpense ( { description: 'Water Bill', amount: 10500 } ) )

store.dispatch ( addExpense ( { description: 'Gas Bill', amount: 21500 } ) )

store.dispatch ( setTextFilter ( 'Water' ) )

const state = store.getState ()

const visibleExpenses = getVisibleExpenses ( state.expenses, state.filters )

console.log ( visibleExpenses )

ReactDOM.render ( <AppRouter />, document.getElementById ( 'app' ) )

