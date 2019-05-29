import { removeExpense, addExpense, editExpense } from '../../actions/expenses'

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

test('should return addExpense action object with provided values', () => {
    const expenseData = {
        description: 'Test desctiption',
        amount: 3456,
        createdAt: 15538947394,
        note: 'Test note'
    }
    const action = addExpense ( expenseData )
    expect ( action ).toEqual ( {
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any ( String )
        }
    } )
})

test ( 'should return addExpense object with default values', () => {
    const action = addExpense ()
    expect ( action ).toEqual ( {
        type: 'ADD_EXPENSE',
        expense: {
            description: '',
            note: '',
            amount: 0,
            createdAt: 0,
            id: expect.any ( String )
        }
    } )
} )

