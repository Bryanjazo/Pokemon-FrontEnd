export const getMoves = () => {
    return (dispatch) => {
        fetch('http://localhost:8080/api/v1/moves')
        .then(response => response.json())
        .then(moves => {
            dispatch({
                type: "GET_MOVES",
                payload: moves
            }) 
        })
    }
}

