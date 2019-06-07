import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { 
    removeExpense, 
    addExpense, 
    startAddExpense, 
    editExpense, 
    setExpenses, 
    startSetExpenses, 
    startRemoveExpense,
    startEditExpense 
} from '../../actions/expenses'
import expenses from '../fixtures/expenses'
import database from '../../firebase/firebase'

const uid = 'thisismyuid'
const defaultAuthState = { auth: { uid } }
const createMockStore = configureMockStore ( [ thunk ] )

beforeEach ( ( done ) => {
    const expenseData = {}
    expenses.forEach ( ( { id, description, amount, createdAt, note } ) => {
        expenseData [ id ] = { description, amount, createdAt, note }
    } )
    database.ref ( `users/${uid}/expenses` ).set ( expenseData ).then ( () => done() )
} )

test('should setup removeExpense action object correctly', () => {
    const action = removeExpense ( 'jenferkfjnrjfnrekfn' )
    expect ( action ).toEqual ( {
        type: 'REMOVE_EXPENSE',
        id: 'jenferkfjnrjfnrekfn'
    } )
})

test('should remove expense from firebase', ( done ) => {
    const store = createMockStore ( defaultAuthState )
    const id = expenses[1].id
    store.dispatch ( startRemoveExpense ( { id } ) ).then ( () => {

        const actions = store.getActions ()
        expect ( actions[ 0 ] ).toEqual ( {
            type: 'REMOVE_EXPENSE',
            id
        } )
        return database.ref ( `users/${uid}/expenses/${id}` ).once ( 'value' )
    } ).then ( ( snapshot ) => {
        expect ( snapshot.val () ).toBeFalsy ()
        done ()
    } )
})

test('should edit expense in firebase', ( done ) => {
    const store = createMockStore ( defaultAuthState )
    const id = expenses [ 2 ].id
    const updates = {
        description: 'New Credit card',
        note: "This is a new one",
        amount: 345678,
        createdAt: 700
    }
    store.dispatch ( startEditExpense ( { id, updates} ) ).then ( () => {
        const actions = store.getActions ()
        expect ( actions [ 0 ] ).toEqual ( {
            type: 'EDIT_EXPENSE',
            id,
            updates
        } )
        return database.ref ( `users/${uid}/expenses/${id}` ).once ( 'value' )
    } ).then ( ( snapshot ) => {
        expect ( snapshot.val () ).toEqual ( updates )
        done ()
    } )
})



test('should setup editExpense action object correctly ', () => {
    const id = expenses [ 2 ].id
    const updates = {
        description: 'New Credit card',
        note: "This is a new one",
        amount: 345678,
        createdAt: 700
    }
    const action = editExpense ( id, updates )
    expect ( action ).toEqual ( {
        type: 'EDIT_EXPENSE',
        id,
        updates
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
    const store = createMockStore ( defaultAuthState )
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
        return database.ref ( `users/${uid}/expenses/${actions[0].expense.id }` ).once ( 'value' )
    } ).then ( ( snapshot ) => {
        expect ( snapshot.val () ).toEqual ( {
            ...expenseData
        } )
        done ()
    } )
})

test('should add expense with defaults to database and store', ( done ) => {
    const store = createMockStore ( defaultAuthState )
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
        return database.ref ( `users/${uid}/expenses/${actions[0].expense.id}` ).once ( 'value' )
    } ).then ( ( snapshot ) => {
        expect ( snapshot.val () ).toEqual ( {
            ...expenseData
        } )
        done ()
    } )
})


test('should setup set expense action object with data', () => {
    const action = setExpenses ( expenses )
    expect ( action ).toEqual ( {
        type: 'SET_EXPENSES',
        expenses
    } )
})

test('should fetch expenses from firebase', ( done ) => {
    const store = createMockStore ( defaultAuthState )
    store.dispatch ( startSetExpenses () ).then ( () => {
        const actions = store.getActions ()
        expect ( actions [0] ).toEqual ( {
            type: 'SET_EXPENSES',
            expenses
        } )
        return database.ref ( `users/${uid}/expenses` ).once ( 'value' )
    } ).then ( ( snapshot ) => {

        const fetchedExpenses = []

        snapshot.forEach ( ( childSnapshot ) => {
            fetchedExpenses.push ( {
                id: childSnapshot.key,
                ...childSnapshot.val()
            } )
        } )

        expect ( fetchedExpenses ).toEqual ( expenses )
        done ()
    } )
})



