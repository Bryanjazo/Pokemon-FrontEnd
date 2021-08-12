const initialState = {
    pokemon: [],
    loading: false
}

const pokemonReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_POKEMON": 
            return {
                ...state,
            pokemon: [...action.payload],
            loading: true
            }
        default: 
            return state
    }
}

export default pokemonReducer