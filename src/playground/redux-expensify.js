import { createStore, combineReducers } from 'redux'
import uuid from 'uuid'

// Actions

// ADD_EXPENSE
const addExpense = ( { description = '', note = '', amount = 0, createdAt = 0 } = {} ) => ( {
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid (),
        description,
        note,
        amount,
        createdAt
    }
} )

// REMOVE_EXPENSE
const removeExpense = ( { id } = {} ) => ( {
    type: 'REMOVE_EXPENSE',
    id
} )

// EDIT_EXPENSE
const editExpense = ( { id, updates } = {} ) => ( {
    type: 'EDIT_EXPENSE',
    id,
    updates
} )


// Expenses reducer
const expensesReducerDefaultState = [] 
const expensesReducer = ( state = expensesReducerDefaultState, action ) => {
    switch ( action.type ) {
        case 'ADD_EXPENSE':
            return [ ...state, action.expense ]
        case 'REMOVE_EXPENSE':
            return state.filter ( ( { id } ) => id !== action.id )
        case 'EDIT_EXPENSE':
            return state.map ( ( expense ) => {
                if ( expense.id === action.id ) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense
                }
            } )
        default:
            return state
    }
}

// Actions
const setTextFilter = ( text = '' ) => ( {
    type: 'SET_TEXT_FILTER',
    text
} )

const sortByAmount = () => ( {
    type: 'SORT_BY_AMOUNT'
} )

const sortByDate = () => ( {
    type: 'SORT_BY_DATE'
} )

const setStartDate = ( startDate ) => ( {
    type: 'SET_START_DATE',
    startDate
} )

const setEndDate = ( endDate ) => ( {
    type: 'SET_END_DATE',
    endDate
} )

// Filters reducer
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}
const filtersReducer = ( state = filtersReducerDefaultState, action ) => {
    switch ( action.type ) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        default: 
            return state
    }
}

// Filter expenses 
const getVisibleExpenses = ( expenses, { text, sortBy, startDate, endDate } ) => {
    return expenses.filter ( ( expense ) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate
        const endDateMatch = typeof startDate !== 'number' || expense.createdAt <= endDate
        const textMatch = expense.description.toLowerCase().includes ( text.toLowerCase() )

        return startDateMatch && endDateMatch && textMatch
    } ).sort ( ( a, b ) => {
        if ( sortBy === 'date' ) {
            return a.createdAt < b.createdAt ? 1 : -1
        } else if ( sortBy === 'amount' ) {
            return a.amount < b.amount ? 1 : -1
        }
    } )
}

// Store
const store = createStore ( combineReducers ( {
    expenses: expensesReducer,
    filters: filtersReducer
} ) )

store.subscribe ( () => {
    const state = store.getState ()
    const visibleExpenses = getVisibleExpenses ( state.expenses, state.filters )
    console.log ( visibleExpenses )
} )

const expenseOne = store.dispatch ( addExpense ( { description: 'Rent', amount: 54500, createdAt: 700 } ) )
const expenseTwo = store.dispatch ( addExpense ( { description: 'Coffee', amount: 60000, createdAt: 999 } ) )
// store.dispatch ( removeExpense ( { id: expenseTwo.expense.id } ) )
// store.dispatch ( editExpense ( { 
//     id: expenseTwo.expense.id,
//     updates: {
//         description: 'New Coffee',
//         note: 'A little bit pricey coffee',
//         amount: 800,
//         createdAt: 1000 
//     } 
// } ) )

//  store.dispatch ( setTextFilter ( 'ffe' ) )

store.dispatch ( sortByAmount () )

// store.dispatch ( sortByDate () )

// store.dispatch ( setStartDate ( 500 ) )

// store.dispatch ( setStartDate () )

//  store.dispatch ( setEndDate ( 1000 ) )

//  store.dispatch ( setEndDate () )



const demoState = {
    expenses: [ {
        id: 'edefreffefe',
        description: 'January Rent',
        note: 'Last payment for this address',
        amount: 54500,
        createdAt: 0
    } ],
    filters: {
        text: 'rent',
        sortBy: 'amount',  // date or amount
        startDate: undefined,
        endDate: undefined
    }
}
