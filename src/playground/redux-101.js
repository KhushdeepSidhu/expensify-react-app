import { createStore } from 'redux'

// Action generators
const incrementCount = ( { incrementBy = 1 } = {} ) => ( {
    type: 'INCREMENT',
    incrementBy
} )

const decrementCount = ( { decrementBy = 1 } = {} ) => ( {
    type: 'DECREMENT',
    decrementBy
} )

const resetCount = () => ( {
    type: 'RESET'
} )

const setCount = ( { count = 0 } = {} ) => ( {
    type: 'SET',
    count
} )

// Reducer
const countReducer = ( state = { count: 0 }, action ) => {

    switch ( action.type ) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            } 
        case 'SET':
            return {
                count: action.count
            }   
        case 'RESET':
            return {
                count: 0
            }
        default: 
            return state
    }    

}

const store = createStore ( countReducer )

// Subscribe for state changes 
const unsubscribe = store.subscribe ( () => {
    console.log ( store.getState () )
} )

// Actions

// Increment count
store.dispatch ( incrementCount ( { incrementBy: 7 } ) )

store.dispatch ( incrementCount () )

store.dispatch ( decrementCount( { decrementBy: 10 } ) )

store.dispatch ( setCount ( { count: 301 } ) )

// Reset count 
store.dispatch ( resetCount() )