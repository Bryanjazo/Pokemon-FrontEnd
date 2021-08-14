export const incrementCounter = (turnCount) => {
    return (dispatch) => {
        dispatch({
            type: "TURN_INCREMENT",
            payload: turnCount + 1
            
        })
    }
}

export const setUserMove = (move) => {
    return(dispatch) => {
        dispatch({
        type: "SET_CURRENT_USER_MOVE",
        payload: move
    })
    }
}