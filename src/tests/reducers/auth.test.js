import authReducer from '../../reducers/auth'

test('should set default state', () => {
    const action = {
        type: '@INIT'
    }
    const state = authReducer ( undefined, action )
    expect ( state ).toEqual ( {} )
})


test('should set uid for login', () => {
    const action = {
        type: 'LOGIN',
        uid: 'jknfjrnfkjnfknfkjenfkjr'
    }
    const state = authReducer ( {}, action )
    expect ( state ).toEqual ( {
        uid: action.uid
    })
})

test('should clear uid for logout', () => {
    const action = {
        type: 'LOGOUT'
    }
    const state = authReducer ( { uid: 'djskdhskjdhskjhskjh' }, action )
    expect ( state ).toEqual ( {} )
})
