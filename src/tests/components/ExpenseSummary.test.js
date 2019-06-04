import React from 'react'
import { shallow } from 'enzyme'
import { ExpenseSummary } from '../../components/ExpenseSummary'

test('should render Expense summary correctly with 1 expense', () => {
    const wrapper = shallow ( 
        <ExpenseSummary
            expensesTotal = { 45600 }  
            expensesCount = { 1 }
        /> 
    ) 
    expect ( wrapper ).toMatchSnapshot ()
    
})

test('should render Expense summary correctly with multiple expenses', () => {
    const wrapper = shallow (
        <ExpenseSummary
            expensesTotal = { 345600 }
            expensesCount = { 3 }
        />
    )
    expect ( wrapper ).toMatchSnapshot ()
})
