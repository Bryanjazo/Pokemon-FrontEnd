import { getUserPokemon } from "./userpokemon"

export const signIn = (email, password) => {
  fetch('http://localHost:8080/api/v1/sessions', {
    method: 'POST',
    credentials: "same-origin",
    headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    },
  body: JSON.stringify({
    email: email,
    password: password
    })
 })
  .then(resp => resp.json())
  .then(function(data){
    console.log(data)
    localStorage.setItem("token", data.uid)
  })
}

export const signUp = (email, password) => {
  fetch('http://localHost:8080/api/v1/sessions', {
    method: 'POST',
    credentials: "same-origin",
    headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    },
  body: JSON.stringify({
    email: email,
    password: password
    })
 })
  .then(resp => resp.json())
  .then(function(data){
  console.log(data)
    localStorage.setItem("token", data.idToken)
    console.log(data)
  })
}

export const LogOut = () => {
  return(dispatch) => {
    localStorage.setItem('token', '')
      dispatch({
      type: 'CLEAR_USER_DETAIL'
      })
    }
}

export const fetchOauth = (uid) =>{
  return async (dispatch) => {
    const response = await fetch(`http://localhost:8080/api/v1/users/${uid}`);
    const data = await response.json();
    dispatch({
      type: 'AUTHENTHICATE_USER',
      payload: data
    })
    await dispatch(getUserPokemon(data.id))
    }

}
