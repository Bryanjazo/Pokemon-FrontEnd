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
        e.preventDefualt()

        if(signUp) {
            // Perform sign up functionality
        } else {
            signIn(email, password)
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