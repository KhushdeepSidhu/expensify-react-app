import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import 'normalize.css'
import './styles/styles.scss'
import AppRouter from './routers/AppRouter'

const store = configureStore ()

store.dispatch ( addExpense ( { description: 'Water Bill', amount: 10500 } ) )

store.dispatch ( addExpense ( { description: 'Gas Bill', amount: 21500 } ) )

store.dispatch ( setTextFilter ( 'Water' ) )

setTimeout ( () => {
    store.dispatch ( setTextFilter ( 'bill' ) )
}, 3000 )

const jsx = (
    <Provider store = { store } >
        <AppRouter />
    </Provider>
)

ReactDOM.render ( jsx, document.getElementById ( 'app' ) )

