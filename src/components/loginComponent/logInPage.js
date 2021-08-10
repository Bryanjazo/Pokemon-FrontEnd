import React from 'react'
import { useState } from 'react'
import './login_page.css'
import { signIn } from '../../actions/authentication';

export const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordTwo, setPasswordTwo] = useState('')
    const [signUp, setSignUp] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()

        if(email != '' && password != '') {
            if(signUp) {
                if(password === passwordTwo) {
                    // Sign up
                } else {
                    // Error, passwords do not match
                }
            }  else {
                signIn(email, password)
            }
        } else {
            // Error, fields cant be empty
        }




        if(signUp) {
            // Perform sign up functionality
        } else {
            if(email != '' && password != '') {
                signIn(email, password)
            } else {
                // return error
                console.log('error')
            }
        }
    }

    function passwordReEntry() {
        return (
            <>
                <label>Re-enter password:</label>
                <input className='main' type="Password" onChange={e => setPasswordTwo(e.target.value)}/>
            </>
        )
    }

    return (
        <div className='login-grid'>
        <section className='login-page'>
            <h1>Pokemon Battle Royal</h1>
            <form onSubmit={e => handleSubmit(e)}>
                <label>Email:</label>
                <input className='main' type='Text' onChange={e => setEmail(e.target.value)}/>
                <label>Password:</label>
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
    )
}
