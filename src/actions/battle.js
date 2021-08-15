export const incrementCounter = (turnCount) => {
    return (dispatch) => {
        dispatch({
            type: "TURN_INCREMENT",
            payload: turnCount
            
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

export const addTokensToUser = (coins) => {
    return(dispatch) => {
        dispatch({
            type: "ADD_TOKENS",
            payload: coins
        })
    }
}