const secondState = {
    value: -10
}

const secondReducer = (state = secondState, action) => {
    if(action.type === 'SOMETHING') {
        return {
            ...state,
            value: secondState.value + 20
        }
    }
    return state;
}

export default secondReducer;