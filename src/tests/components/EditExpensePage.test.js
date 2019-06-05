import React from 'react'
import { shallow } from 'enzyme'
import { EditExpensePage } from '../../components/EditExpensePage'
import expenses from '../fixtures/expenses'

let editExpense, startRemoveExpense, history, wrapper, expense

beforeEach ( () => {
    expense = expenses [ 0 ]
    editExpense = jest.fn ()
    startRemoveExpense = jest.fn ()
    history = { push: jest.fn () }
    wrapper = shallow ( 
        <EditExpensePage 
            editExpense = { editExpense }
            startRemoveExpense = { startRemoveExpense }
            history = { history }
            expense = { expense } 
        /> 
    )
} )

test('should render EditExpensePage correctly', () => {
    expect ( wrapper ).toMatchSnapshot ()
})

test('should handle editExpense correctly ', () => {
    wrapper.find ( 'ExpenseForm' ).prop ( 'onSubmit' ) ( expense )
    expect ( editExpense ).toHaveBeenLastCalledWith ( { 
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


