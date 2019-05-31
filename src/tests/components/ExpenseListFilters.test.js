import React from 'react'
import { shallow } from 'enzyme'
import { ExpenseListFilters } from '../../components/ExpenseListFilters'
import { filters, altFilters } from '../fixtures/filters'

let setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount, wrapper

beforeEach ( () => {
    setStartDate = jest.fn ()
    setEndDate = jest.fn ()
    setTextFilter = jest.fn ()
    sortByDate = jest.fn ()
    sortByAmount = jest.fn ()
    wrapper = shallow ( 
        <ExpenseListFilters
            setStartDate = { setStartDate }
            setEndDate = { setEndDate }
            setTextFilter = { setTextFilter }
            sortByDate = { sortByDate }
            sortByAmount = { sortByAmount }
            filters = { filters }
        /> 
    )
} )

test('should render ExpenseListFilters correctly', () => {
    expect ( wrapper ).toMatchSnapshot ()
})

test('should render ExpenseListFilters with alt data correctly', () => {
    wrapper.setProps ( {
        filters: altFilters
    } )
    expect ( wrapper ).toMatchSnapshot ()
})

test('should handle text change correctly', () => {
    const value = 'bill'
    wrapper.find ( 'input' ).simulate ( 'change', {
        target: { value }
    } )
    expect ( setTextFilter ).toHaveBeenLastCalledWith ( value )
})

test('should sortBy date', () => {
    const value = 'date'
    wrapper.find ( 'select' ).simulate ( 'change', {
        target: { value }
    } )
    expect ( sortByDate ).toHaveBeenCalled ()
})

test('should sortBy amount', () => {
    const value = 'amount'
    wrapper.find ( 'select' ).simulate ( 'change', {
        target: { value }
    } )
    expect ( sortByAmount ).toHaveBeenCalled ()
})

test('should handle date changes', () => {
    const startDate = altFilters.startDate
    const endDate = altFilters.endDate
    wrapper.find ( 'DateRangePicker' ).prop ( 'onDatesChange' ) ( { startDate, endDate } )
    expect ( setStartDate ).toHaveBeenLastCalledWith ( startDate )
    expect ( setEndDate ).toHaveBeenLastCalledWith ( endDate )
})

test('should handle date focus changes', () => {
    const calendarFocused = 'startDate'
    wrapper.find ( 'DateRangePicker' ).prop ( 'onFocusChange' ) ( calendarFocused )
    expect ( wrapper.state ( 'calendarFocused' ) ).toBe ( calendarFocused )
})










