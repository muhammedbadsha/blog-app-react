import React from 'react'
import { NavBar } from '../components/loginComponents/NavBar'
import '../staticfiles/logincssfiles/Login-container.css'
import { Link } from 'react-router-dom'

function LoginPage() {
  return (
    <div className='main-container-login'>
      <div className='sub-container-login'>
       <NavBar />

        <div className='center-container-login'>
          <div className='register-form-main-login'>
            <h1>Login Page</h1>
          <form action="" method="post" className='login-form-login'>
            <div className='field-name-fi'>
              <input name="email" className='email-field-login' id="" placeholder={'Email'} />
              {/* <label htmlFor="First Name">Password</label> */}
              <input name="password" id="" placeholder={'Password'} type='password' />
              {/* <label htmlFor="First Name">Confirm Password</label> */}
              
              <button type="submit" className='btn-regsiter-form-login'>Log in</button>
              <div className='footer-of-login'>
                <p>I don't have an account <Link to={'/Registration'}>sign up</Link></p>
                <p><Link to={'/Forgot_password'}>Forgot Password</Link></p>
              </div>
            </div>
          </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage