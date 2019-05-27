import React from 'react'
import { connect } from 'react-redux'
import { setTextFilter } from '../actions/filters'

const ExpenseListFilters = ( props ) => (
    <div>
        <input 
            type = "text" 
            onChange = { ( event ) => {
                props.dispatch ( setTextFilter ( event.target.value ) )
            } }
            value = { props.filters.text } 
        />
    </div>
)

const mapStateToProps = ( state ) => {
    return {
        filters: state.filters
    }
}

export default connect ( mapStateToProps ) ( ExpenseListFilters )