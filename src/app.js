import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './routers/AppRouter'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import 'normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'

const store = configureStore ()

store.dispatch ( addExpense ( { description: 'Water Bill', amount: 9500, createdAt: 800 } ) )

store.dispatch ( addExpense ( { description: 'Gas Bill', amount: 6000, createdAt: 200 } ) )

store.dispatch ( addExpense ( { description: 'Rent', amount: 109500, createdAt: 400 } ) )

const jsx = (
    <Provider store = { store } >
        <AppRouter />
    </Provider>
)

ReactDOM.render ( jsx, document.getElementById ( 'app' ) )

