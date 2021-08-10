const userDetails = {
  details: []
}


const userReducer = (state = userDetails, action) =>{
  switch (action.type) {
      case "GET_USER_DETAILS":
          return {
              ...state,
          details: action.payload
        }
        case "CLEAR_USER_DETAIL":
          return{
            ...state,
            details: []
        }
      default:
          return state
  }
}


export default userReducer
