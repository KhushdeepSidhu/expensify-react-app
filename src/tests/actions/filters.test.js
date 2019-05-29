import moment from 'moment'
import { 
    setTextFilter,
    setStartDate,
    setEndDate,
    sortByAmount,
    sortByDate
} from '../../actions/filters'

test('should return setTextFilter action object with provided value ', () => {
    const action = setTextFilter ( 'Rent' )
    expect ( action ).toEqual ( {
        type: 'SET_TEXT_FILTER',
        text: 'Rent'
    } )
})

test('should return setTextFilter action object with default value ', () => {
    const action = setTextFilter ()
    expect ( action ).toEqual ( {
        type: 'SET_TEXT_FILTER',
        text: ''
    } )
})

test('should return setStartDate action object with provided value', () => {
    const action = setStartDate ( moment(0) )
    expect ( action ).toEqual ( {
        type: 'SET_START_DATE',
        startDate: moment(0)
    } )
})

test('should return setEndDate action object with provided value', () => {
    const action = setEndDate ( moment(0) )
    expect ( action ).toEqual ( {
        type: 'SET_END_DATE',
        endDate: moment(0)
    } )
})

test('should return sortByAmount action object with provided value', () => {
    const action = sortByAmount ()
    expect ( action ).toEqual ( {
        type: 'SORT_BY_AMOUNT'
    } )
})

test('should return sortByDate action object with provided value', () => {
    const action = sortByDate ()
    expect ( action ).toEqual ( {
        type: 'SORT_BY_DATE'
    } )
})
