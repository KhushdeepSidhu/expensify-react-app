import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { removeExpense, addExpense, startAddExpense, editExpense } from '../../actions/expenses'
import expenses from '../fixtures/expenses'
import database from '../../firebase/firebase'

const createMockStore = configureMockStore ( [ thunk ] )

test('should return removeExpense action object', () => {
    const action = removeExpense ( {
        id: 'dferfihruifhreiughiugh'
    } )
    expect ( action ).toEqual ( {
        type: 'REMOVE_EXPENSE',
        id: 'dferfihruifhreiughiugh'
    } )
})

test('should return editExpense action object ', () => {
    const action = editExpense ( {
        id: 'sdhskjfdkjfnhdskhf',
        updates: {
            description: 'New description',
            amount: 56
        }
    } )
    expect ( action ).toEqual ( {
        type: 'EDIT_EXPENSE',
        id: 'sdhskjfdkjfnhdskhf',
        updates: {
            description: 'New description',
            amount: 56
        }
    } )
})

test('should return action object with provided values', () => {
    const action = addExpense ( expenses [ 0 ] )
    expect ( action ).toEqual ( {
        type: 'ADD_EXPENSE',
        expense: expenses [ 0 ]
    } )
})

test('should add expense to database and store', ( done ) => {
    const store = createMockStore ( {} )
    const expenseData = {
        description: 'Mouse',
        amount: 3000,
        note: 'This one is better',
        createdAt: 7000
    }
    store.dispatch ( startAddExpense ( expenseData ) ).then ( () => {
        const actions = store.getActions ()
        expect ( actions [0] ).toEqual ( {
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any ( String ),
                ...expenseData
            }
        } )
        return database.ref ( `expenses/${actions[0].expense.id }` ).once ( 'value' )
    } ).then ( ( snapshot ) => {
        expect ( snapshot.val () ).toEqual ( {
            ...expenseData
        } )
        done ()
    } )
})

test('should add expense with defaults to database and store', ( done ) => {
    const store = createMockStore ( {} )
    const expenseData = {
        description: '',
        note: '', 
        amount: 0, 
        createdAt: 0
    }
    store.dispatch ( startAddExpense ( expenseData ) ).then ( () => {
        const actions = store.getActions ()
        expect ( actions [0] ).toEqual ( {
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any ( String ),
                ...expenseData
            }
        } )
        return database.ref ( `expenses/${actions[0].expense.id}` ).once ( 'value' )
    } ).then ( ( snapshot ) => {
        expect ( snapshot.val () ).toEqual ( {
            ...expenseData
        } )
        done ()
    } )
})


// test ( 'should return addExpense object with default values', () => {
//     const action = addExpense ()
//     expect ( action ).toEqual ( {
//         type: 'ADD_EXPENSE',
//         expense: {
//             description: '',
//             note: '',
//             amount: 0,
//             createdAt: 0,
//             id: expect.any ( String )
//         }
//     } )
// } )

