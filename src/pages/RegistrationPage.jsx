import React from 'react'
import { NavBar } from '../components/loginComponents/NavBar'
import '../staticfiles/registrationfiles/Registration-center.css'
import { Link } from 'react-router-dom'


function RegistrationPage() {
  return (
    <div className='main-container'>
      <div className='sub-container'>
       <NavBar />

        <div className='center-container'>
          <div className='register-form-main'>
            <h1>Registration Form</h1>
          <form action="" method="post" className='login-form'>
            <div className='field-name-fi'>
              {/* <label htmlFor="First Name">First Name</label> */}
              <input name="fname" type='text' id="" className='' placeholder={'First Name'}/>
              {/* <label htmlFor="First Name">Last Name</label> */}
              <input name="lname" id="" placeholder={'Last Name'} />
              {/* <label htmlFor="First Name">Phone Number</label> */}
              <input name="phone_number" id="" placeholder={'Phone Number'} />
              {/* <label htmlFor="First Name">Email</label> */}
              <input name="email" id="" placeholder={'Email'} />
              {/* <label htmlFor="First Name">Password</label> */}
              <input name="password" id="" type='password' placeholder={'Password'} />
              {/* <label htmlFor="First Name">Confirm Password</label> */}
              <input name="confirm_password" id="" type='password' placeholder={'Confirm Password'} />
              
              <button type="submit" className='btn-regsiter-form'>Sign Up</button>
              <div className='foot-log-register' >
                <p>Already have an account back to <Link to={'/Login'}>Log in</Link></p>
              </div>
            </div>
          </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegistrationPage