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
      default:
          return state
  }
}


export default userReducer
