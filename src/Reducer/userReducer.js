const userDetails = {
  details: []
}


const userReducer = (state = userDetails, action) =>{
  switch (action.type) {
      case "GET_USER_DETAILS":
          return {
              ...state,
          details: action.payload,
          
        }
        case "CLEAR_USER_DETAIL":
          return{
            ...state,
            details: [],
            pokemon: []       
        }

        case "GET_USER_POKEMON":
          return {
            ...state,
            userPokemon: action.payload
          }
          
        case "ADD_USER_POKEMON":
          return {
            ...state,
            userPokemon: [...state.pokemon, action.payload]
          }

      default:
          return state
  }
}


export default userReducer
