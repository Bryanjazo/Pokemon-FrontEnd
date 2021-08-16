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

export const addTokensToUser = (uid, coins) => {
    
    return (dispatch) => {
        fetch(`http://localHost:8080/api/v1/users/${uid}`, {
          method: 'PATCH',
          headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          },
        body: JSON.stringify({
          tokens: coins
          })
        })
        .then(resp => resp.json())
        .then(function(data){
            dispatch({
              type: 'GET_USER_DETAILS',
              payload: data
            })
          })
        }
}