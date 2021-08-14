const subtractTokens = (tier, tokens ) => {
    if (tier === 1) return tokens - 20
    if (tier === 2) return  tokens - 50
    if (tier === 3) return  tokens - 100
}

export const addPokemonToUser = (user_id, pokemon_id, active_moves, tokens, tier) => {
    let subtracted = subtractTokens(tier, tokens)
    return (dispatch) => {
        fetch(`http://localhost:8080/api/v1/users/${user_id}/user_pokemons`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({user_id, pokemon_id, active_moves})
        })
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            if (!data.pokemon){
                alert("I'm sorry but it looks like you already purchased this pokemon")
            } else {
                dispatch({
                    type: "ADD_USER_POKEMON",
                    payload: data
                })
                dispatch(subtractTokensFromUser(subtracted))
            }
        })
        
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