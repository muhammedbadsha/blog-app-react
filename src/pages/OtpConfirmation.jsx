import React from 'react'
import { NavBar } from '../components/loginComponents/NavBar'
import '../staticfiles/logincssfiles/otp.css'

const OtpConfirmation = () => {
  return (
    <div className='main-container'>
      <div className='sub-container'>
       
       <NavBar />

        <div className='center-container'>
          <div className='otp-form-main'>
            <h1>OTP</h1>
          <form action="" method="post" className='login-form'>
            <div className='field-name-fi'>
              <input name="otp" id="" placeholder={'Enter OTP'} />
             

              
              <button type="submit" className='btn-otp-form'>Sign Up</button>
              
            </div>
          </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OtpConfirmation