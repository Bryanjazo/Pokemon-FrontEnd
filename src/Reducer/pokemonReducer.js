const initialState = {
    pokemon: []
}

const pokemonReducer = (state = initialState, action) => {
    let clone = state.JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case "GET_POKEMON": 
            clone.pokemon = action.payload
            return clone
        default: 
            return clone
    }
}