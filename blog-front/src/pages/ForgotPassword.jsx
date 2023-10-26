import React from 'react'
import { NavBar } from '../components/loginComponents/NavBar'
import '../staticfiles/logincssfiles/Login-container.css'
import { Link } from 'react-router-dom'

 const ForgotPassword = () => {
  return (
    <>
    <NavBar />
   

    <section class="bg-white-500 dark:bg-gray-900  h-screen sm:h-screen md:h-screen lg:h-screen w-full flex flex-col items-center  py-6  mx-auto md:h-screen lg:py-8">
    <div className="main-container w-1/3">

      <div className="w-full  bg-gray-100  rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 item-center  justify-center">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white flex flex-col items-center justify-center">
                  Forgot Password
              </h1>
              <form
          action=""
      
          method="post"
          className="login-form space-y-4 md:space-y-6 flex flex-col items-center justify-center">
          
          <div className="w-full">
            <input
              name="password"
              required
            
              className="bg-gray-100 w-full"
              type="text"
              placeholder={"Enter password"}
            />
            {/* {errors.email && (
              <p className="error text-red-400	">{errors.email}</p>
            )} */}
          </div>
         
          <div className="w-full">
            <input
              name="confirm_password"
              required
            
              className="bg-gray-100 w-full"
              type="text"
              placeholder={"Enter confirm password"}
            />
            {/* {errors.email && (
              <p className="error text-red-400	">{errors.email}</p>
            )} */}
          </div>
          <div className='flex justify-between '>
            <button type="submit" className="btn-regsiter-form bg-blue-600 rounded-2xl w-28 h-8 hover:bg-blue-700 focus:ring">
              submit
            </button>
           
          </div>
          <div className="foot-log-register">
            <div>
            I know my password back to <Link className="text-blue-400" to={"/Login"}>Log in</Link>
            </div>
          </div>
                
        </form>
        </div>
      </div>
    </div>
  </section></>
  )
}
export default ForgotPassword