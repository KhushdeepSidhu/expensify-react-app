import React from 'react'
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'

const ExpenseDashoardPage = () => (
    <div>
        <p>This is from the dashboard page component.</p>
        <ExpenseListFilters />
        <ExpenseList />
    </div>
)

export { ExpenseDashoardPage as default }