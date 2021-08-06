export const getPokemon = () => {
    return (dispatch) => {
        fetch('http://localhost:8080/api/v1/pokemons')
        .then(response => response.json())
        .then(pokemon => {
            dispatch({
                type: "GET_POKEMON",
                payload: pokemon
            }) 
        })
    }
}