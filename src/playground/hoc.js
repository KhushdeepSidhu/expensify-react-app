import React from 'react'
import ReactDOM from 'react-dom'

const Info = ( props ) => ( 
    <div>
        <h1>Info</h1>
        <p>These are the details: { props.info } </p>
    </div>
)

const withAdminWarning = ( WrappedComponent ) => {
    return ( props ) => ( 
        <div>
            { props.isAdmin && <p>This is private data. Please don't share.</p> }
            < WrappedComponent {...props} />
        </div>
    )
}

const requireAuthentication = ( WrappedComponent ) => {
    return ( props ) => (
        <div>
            { props.isAuthenticated ? <WrappedComponent {...props} /> : <p>Please login to see the details</p> }
        </div>
    )
}

const AuthInfo = requireAuthentication ( Info )

ReactDOM.render ( <AuthInfo isAuthenticated={false} info="This is the data" />, document.getElementById ( 'app' ) )