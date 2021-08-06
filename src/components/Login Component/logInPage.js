import React, { useState } from 'react'
import './login_page.css'


export const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit(e) {
        e.preventDefualt()
    }
    
    return (
        <div className='login-grid'>
        <section className='login-page'>
            <h2>Title</h2>
            <form onSubmit={e => handleSubmit(e)}>
                <label>Email:</label>
                <input type='Text'/>
                <label>Password:</label>
                <input type='Password'/>
                <div className='form-buttons'>
                    <input className='submit' type='Submit' value='Login'/>
                    <input className='submit' type='Button' value='Forgot password'/>
                </div>
            </form>
        </section>
        </div>
    )
}