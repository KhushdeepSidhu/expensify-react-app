import React from 'react'
import { shallow } from 'enzyme'
import { EditExpensePage } from '../../components/EditExpensePage'
import expenses from '../fixtures/expenses'

let startEditExpense, startRemoveExpense, history, wrapper, expense

beforeEach ( () => {
    expense = expenses [ 0 ]
    startEditExpense = jest.fn ()
    startRemoveExpense = jest.fn ()
    history = { push: jest.fn () }
    wrapper = shallow ( 
        <EditExpensePage 
            startEditExpense = { startEditExpense }
            startRemoveExpense = { startRemoveExpense }
            history = { history }
            expense = { expense } 
        /> 
    )
} )

test('should render EditExpensePage correctly', () => {
    expect ( wrapper ).toMatchSnapshot ()
})

test('should handle startEditExpense correctly ', () => {
    wrapper.find ( 'ExpenseForm' ).prop ( 'onSubmit' ) ( expense )
    expect ( startEditExpense ).toHaveBeenLastCalledWith ( { 
        id: expense.id, 
        updates: expense
    } )
    expect ( history.push ).toHaveBeenLastCalledWith ( '/' ) 
})

test('should handle startRemoveExpense correctly', () => {
    wrapper.find ( 'button' ).simulate ( 'click' )
    expect ( startRemoveExpense ).toHaveBeenLastCalledWith ( { id: expense.id } )
    expect ( history.push ).toHaveBeenLastCalledWith ( '/' ) 
})


