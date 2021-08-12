const userDetails = {
  details: [],
  authenthication: []
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
            authenthication: [],
        
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
          case "SUBTRACT_TOKENS":
            return {
              ...state,
              details: {
                ...state.details,
                tokens: action.payload
              }
            }
            case "AUTHENTHICATE_USER":
              return {
                ...state,
                authenthication: action.payload
              }
      default:
          return state
  }
}


export default userReducer
