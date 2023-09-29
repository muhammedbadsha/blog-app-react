import React from 'react'
import { NavBar } from '../components/loginComponents/NavBar'
import '../staticfiles/logincssfiles/Login-container.css'
import { Link } from 'react-router-dom'

 const ForgotPassword = () => {
  return (
    <div className='main-container-login'>
    <div className='sub-container-login'>
     <NavBar />

      <div className='center-container-login'>
        <div className='register-form-main-login'>
          <h1>Reset Password</h1>
        <form action="" method="post" className='login-form-login'>
          <div className='field-name-fi'>
            <input name="password" className='email-field-login' type='password' id="" placeholder={'Password'} />
            {/* <label htmlFor="First Name">Password</label> */}
            <input name="confirm_password" id="" placeholder={'Confirm Password'} type='password' />
            {/* <label htmlFor="First Name">Confirm Password</label> */}
            
            <button type="submit" className='btn-regsiter-form-login'>Submit</button>
            <div className='footer-of-login'>
              <p>I know my password back to <Link to={'/Login'}>Login</Link></p>
              {/* <p><Link to={'/Forgot_password'}>Forgot Password</Link></p> */}
            </div>
          </div>
        </form>
        </div>
      </div>
    </div>
  </div>
  )
}
export default ForgotPassword