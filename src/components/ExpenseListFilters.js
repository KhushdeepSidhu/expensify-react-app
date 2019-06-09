import React from 'react'
import { connect } from 'react-redux'
import { DateRangePicker } from 'react-dates'
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters'

export class ExpenseListFilters extends React.Component {

    state = {
        calendarFocused: null
    }

    onDatesChange = ( { startDate, endDate } ) => {
        this.props.setStartDate ( startDate )
        this.props.setEndDate ( endDate )
    }

    onFocusChange = (  calendarFocused  ) => {
        this.setState ( () => ( { calendarFocused } ) )
    }

    onTextChange = ( event ) => {
        this.props.setTextFilter ( event.target.value )
    }

    onSortByChange = ( event ) => {
        if ( event.target.value === 'amount' ) {
            this.props.sortByAmount()
        } else if ( event.target.value === 'date' ) {
            this.props.sortByDate()
        }
    }

    render () {

        return (
            <div className = "content-container">
                <div className = "input-group">
                    <div className = "input-group__item">
                        <input 
                            className = "text-input"
                            placeholder = "Search expenses..."
                            type = "text" 
                            onChange = { this.onTextChange }
                            value = { this.props.filters.text } 
                        />
                    </div>
                    <div className = "input-group__item">
                        <select 
                            className = "select"
                            value = { this.props.filters.sortBy }
                            onChange = { this.onSortByChange }
                        >
                            <option value = "date" >Date</option>
                            <option value = "amount">Amount</option>
                        </select>
                    </div>
                    <div className = "input-group__item">
                        <DateRangePicker
                            startDate = { this.props.filters.startDate }
                            startDateId = "start-date-id"
                            endDate = { this.props.filters.endDate }
                            endDateId = "end-date-id"
                            onDatesChange = { this.onDatesChange }
                            focusedInput = { this.state.calendarFocused }
                            onFocusChange = { this.onFocusChange }
                            numberOfMonths = { 1 }
                            isOutsideRange = { () => false }
                            showClearDates = { true }
                        />
                    </div>
                </div>
            </div>
        )

    }

}

const mapDispatchToProps = ( dispatch ) => ( {
    setStartDate: ( startDate ) => dispatch ( setStartDate ( startDate ) ),
    setEndDate: ( endDate ) => dispatch ( setEndDate ( endDate ) ),
    setTextFilter: ( text ) => dispatch ( setTextFilter ( text ) ),
    sortByAmount: () => dispatch ( sortByAmount () ),
    sortByDate: () => dispatch ( sortByDate () )
} )

const mapStateToProps = ( state ) => {
    return {
        filters: state.filters
    }
}

export default connect ( mapStateToProps, mapDispatchToProps ) ( ExpenseListFilters )