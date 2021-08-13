const initialState = {
    moves: []
}

const movesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_MOVES":
            return {
                ...state,
            moves: action.payload
          }
        default:
            return state
    }
}

export default movesReducer
