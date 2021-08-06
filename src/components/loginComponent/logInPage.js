import React from 'react'
import './login_page.css'

export const LoginPage = () => {
    return (
        <div className='login-grid'>
        <section className='login-page'>
            <h2>Title</h2>
            <form>
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