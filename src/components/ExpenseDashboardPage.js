import React from 'react'
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'
import ExpenseSummary from './ExpenseSummary'

const ExpenseDashoardPage = () => (
    <div>
        <ExpenseSummary />
        <ExpenseListFilters />
        <ExpenseList />
    </div>
)

export { ExpenseDashoardPage as default }