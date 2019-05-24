import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import 'normalize.css'
import './styles/styles.scss'

const ExpenseDashoardPage = () => (
    <div>
        <p>This is from the dashboard page component.</p>
    </div>
)

const AddExpensePage = () => (
    <div>
        <p>This is from the create expense component.</p>
    </div>
)

const EditExpensePage = () => (
    <div>
        <p>This is from edit expense component.</p>
    </div>
)

const HelpPage = () => (
    <div>
        <p>This is from help component.</p>
    </div>
)

const routes = (
    <BrowserRouter>
        <div>
            <Route path = "/" component = { ExpenseDashoardPage } exact = { true }/>
            <Route path = "/create" component = { AddExpensePage } />
            <Route path = "/edit" component = { EditExpensePage } />
            <Route path = "/help" component = { HelpPage } />
        </div>
    </BrowserRouter>
)

ReactDOM.render ( routes, document.getElementById ( 'app' ) )

