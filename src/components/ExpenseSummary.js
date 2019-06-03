import React from 'react'
import { connect } from 'react-redux'
import numeral from 'numeral'
import selectExpenses from '../selectors/expenses'
import getExpensesTotal from '../selectors/expenses-total'

export const ExpenseSummary = ( { expensesCount, expensesTotal } ) => {

    const expenseWord = expensesCount === 1 ? 'expense' : 'expenses'
    const formattedExpensesTotal = numeral ( expensesTotal / 100 ).format ( '$0,0.00' )

    return (
        <div>
            <h3>
                Viewing { expensesCount } { expenseWord } totalling { formattedExpensesTotal }
            </h3>
        </div>
    )

}

const mapStateToProps = ( state ) => {
    const visibleExpenses = selectExpenses ( state.expenses, state.filters )
    return {
        expensesCount: visibleExpenses.length,
        expensesTotal: getExpensesTotal ( visibleExpenses )  
    }
}

export default connect ( mapStateToProps ) ( ExpenseSummary )