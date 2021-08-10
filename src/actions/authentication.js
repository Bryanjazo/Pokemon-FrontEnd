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
