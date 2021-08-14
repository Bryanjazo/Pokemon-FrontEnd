export const incrementCounter = (turnCount) => {
    return (dispatch) => {
        dispatch({
            type: "TURN_INCREMENT",
            payload: turnCount + 1
            
        })
    }
}