import React from 'react'
import { useState, useEffect } from 'react'
import './login_page.css'
import { signIn } from '../../actions/authentication';
import {Loading} from '../../Loading.js'

export const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordTwo, setPasswordTwo] = useState('')
    const [signUp, setSignUp] = useState(false)
    const [loading, setLoading] = useState(true)



    function handleSubmit(e) {
        e.preventDefault()

        if(email != '' && password != '') {
            if(signUp) {
                if(password === passwordTwo) {
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
                } else {
                  alert("Error Password Does Not Match")
                }
            }  else {
                signIn(email, password)
            }
        } else {
            alert("Field Cant Be Empty")
        }
        }



        // if(signUp) {
        //     // Perform sign up functionality
        // } else {
        //     if(email != '' && password != '') {
        //         signIn(email, password)
        //     } else {
        //         // return error
        //         console.log('error')
        //     }
        // }
    

    function passwordReEntry() {
        return (
            <>
                <label className="login-label">Re-enter password:</label>
                <input className='main' type="Password" onChange={e => setPasswordTwo(e.target.value)}/>
            </>
        )
    }

    useEffect(() => {
        setTimeout(() => setLoading(false), 6000)
    }, [])

    return (
        <>
        {loading === false? (
        <div className='login-grid'>
        <section className='login-page'>
            <h1>Pokemon Battle Royal</h1>
            <form onSubmit={e => handleSubmit(e)}>
                <label className="login-label">Email:</label>
                <input className='main' type='Text' onChange={e => setEmail(e.target.value)}/>
                <label className="login-label">Password:</label>
                <input className='main' type='Password' onChange={e => setPassword(e.target.value)}/>
                {signUp && passwordReEntry()}
                <div className='form-buttons'>
                    <input className='submit' type='Submit' value={signUp ? 'Confirm' : 'Login'} readOnly/>
                    <input className='submit' type='Button' value={signUp ? 'Back to login' : 'Sign Up'} onClick={ e => setSignUp(signUp ? false : true)} readOnly/>
                </div>
                <input className='main' type='Button' value='Forgot password' readOnly/>
            </form>
        </section>
        </div>
        ): (
            <Loading/>
        )}
        </>
    )
}
