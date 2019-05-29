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
