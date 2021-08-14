const initialState = {
    turnCount: 0,
    selectedUserMove: {}
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
        case "SET_CURRENT_USER_MOVE":
            return {
                ...state,
                selectedUserMove: action.payload
            }
        default:
            return state
    }
}

export default battleReducer