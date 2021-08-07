import React, {useState} from 'react'


function Login(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) =>{
      e.preventDefault()
    fetch('http://localHost:3000/users', {
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
  })
  }
  return(
    <div>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)}/>
        <label>Password</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button type="submit">Submit</button>
      </form>
    </div>

  )
}

export default Login;
