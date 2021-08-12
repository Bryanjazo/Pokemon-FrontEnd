export const addPokemonToUser = (user_id, pokemon_id) => {
    return (dispatch) => {
        fetch(`http://localhost:8080/api/v1/users/${user_id}/user_pokemons`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({user_id, pokemon_id})
        })
        .then(resp => console.log(resp.json()))
        
    }
    // Post request will include the moves that you want and the pokemon ID

    // Then subtract tokens from user in local state based on tier with helper function

    // Then set local state of user pokemons to the object that we get back
    
}

export const subtractTokensFromUser = cost => {
    return (dispatch) => {
        dispatch({
            type: "SUBTRACT_TOKENS",
            payload: cost
        })
    }
}

export const getUserPokemon = user_id => {
    return (dispatch) => {
        fetch(`http://localhost:8080/api/v1/users/${user_id}/user_pokemons`)
        .then(resp => resp.json())
        .then(userPokemon => {
            dispatch({
                type: "GET_USER_POKEMON",
                payload: userPokemon
            })
        })
    }
}

// export const subtractTokensFromUser = (userId) => {
// return (dispatch) => {
//     fetch(`http://localhost:8080/api/v1/users/${userID}`)
// }

// //Sending an updated version of the user with token count to be updated for permanence
// }