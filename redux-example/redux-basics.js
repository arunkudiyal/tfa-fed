const redux = require('redux')
const createStore = redux.createStore

// Initial State
const initialState = {
    counter: 0
}

// REDUCER
const rootReducer = (state = initialState, action) => {
    // performs the action - Body of the action
    if(action.type === 'INC_COUNTER') {
        // Don't mutuate the state directly
        return {
            ...state,
            counter: state.counter + 1
        }
    }
    if(action.type === 'ADD_COUNTER') {
        return {
            ...state,
            counter: state.counter + action.value
        }
    }

    return state
}

// STORE
const store = createStore(rootReducer)
console.log(store.getState())

// SUBSCRIPTIONS
store.subscribe(() => {
    console.log('Subscription', store.getState())
})

// DISPATCHING ACTIONS
store.dispatch( {type: 'INC_COUNTER'} )
store.dispatch( {type: 'ADD_COUNTER', value: 10} )
console.log(store.getState())