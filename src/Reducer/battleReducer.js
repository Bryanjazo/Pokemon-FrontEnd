const initialState = {
    turnCount: 0
}

const battleReducer = (state = initialState, action) => {
    switch (action.type) {
        case "TURN_INCREMENT":
            debugger
            return {
                ...state,
            turnCount: action.payload
          }
        case "CLEAR_TURN_COUNT":
            return{
                ...state,
                turnCount: 0
            }
        default:
            return state
    }
}

export default battleReducer