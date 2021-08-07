import React from 'react'
import { useState } from 'react'
import './login_page.css'

export const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordTwo, setPasswordTwo] = useState('')
    const [signUp, setSignUp] = useState(false)

    function handleSubmit(e) {
        e.preventDefualt()
    }

    function passwordReEntry() {
        return (
            <>
                <label>Re-enter password:</label>
                <input type="Password" onChange={e => setPasswordTwo(e.target.value)}/>
            </>
        )
    }

    return (
        <div className='login-grid'>
        <section className='login-page'>
            <h2>Title</h2>
            <form onSubmit={e => handleSubmit(e)}>
                <label>Email:</label>
                <input type='Text' onChange={e => setEmail(e.target.value)}/>
                <label>Password:</label>
                <input type='Password' onChange={e => setPassword(e.target.value)}/>
                {signUp && passwordReEntry()}
                <div className='form-buttons'>
                    <input className='submit' type='Submit' value={signUp ? 'Confirm' : 'Login'} readOnly/>
                    <input className='submit' type='Button' value={signUp ? 'Back to login' : 'Sign Up'} onClick={ e => setSignUp(signUp ? false : true)} readOnly/>
                    <input className='submit' type='Button' value='Forgot password' readOnly/>
                </div>
            </form>
        </section>
        </div>
    )
}
