import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('should set default state', () => {
    const state = expensesReducer ( undefined, {
        type: '@INIT'
    } )
    expect ( state ).toEqual ( [] )
})

test('should remove expense by id', () => {
    const state = expensesReducer ( expenses, {
        type: 'REMOVE_EXPENSE',
        id: expenses[2].id
    } )
    expect ( state ).toEqual ( [ expenses[0], expenses[1] ] )
})

test('should not remove expense if id not found', () => {
    const state = expensesReducer ( expenses, {
        type: 'REMOVE_EXPENSE',
        id: 'jkdhfjkhfkjh'
    } )
    expect ( state ).toEqual ( expenses )
})

test('should add an expense', () => {
    const expense = {
        id: '5',
        description: 'Grocery',
        note: '',
        amount: 5678,
        createdAt: 0
    }
    const state = expensesReducer ( expenses, {
        type: 'ADD_EXPENSE',
        expense
    } )
    expect ( state ).toEqual ( [ ...expenses, expense ] )
})

test('should edit an expense', () => {
    const updates = {
        description: 'New Gum',
        amount: 455
    }
    const state = expensesReducer ( expenses, {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates
    } )
    expect ( state[0].amount ).toBe ( 455 )
    expect ( state[0].description ).toBe ( 'New Gum' )
})

test('should not edit an expense if id not found', () => {
    const updates = {
        description: 'New Gum',
        amount: 455
    }
    const state = expensesReducer ( expenses, {
        type: 'EDIT_EXPENSE',
        id: 'dfsfdfsdfsf',
        updates
    } )
    expect ( state ).toEqual ( expenses )
})



