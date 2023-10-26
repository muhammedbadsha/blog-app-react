import React, { useState } from 'react'
import { NavBar } from '../components/loginComponents/NavBar'
import '../staticfiles/logincssfiles/Login-container.css'
import { Link } from 'react-router-dom'

function LoginPage() {
  const handleSubmit = () =>{
    setFormData()
    console.log('submit');
  }
  const handleChanges = () => {
    console.log("changes");
  }
  const [formData,setFormData] = useState({
    'email':"",
    'passwor':""
  })
  return (
    <>
       <NavBar />
       <section class="bg-white-500 dark:bg-gray-900  h-screen sm:h-screen md:h-screen lg:h-screen w-full flex flex-col items-center  py-3 mx-auto md:h-screen lg:py-8">
    <div className="main-container ">

      <div className="w-full bg-white bg-gray-100  rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 justify-center">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white flex flex-col items-center justify-center">
                  LogIn
              </h1>
              <form
          action=""
          onSubmit={handleSubmit}
          method="post"
          className="login-form space-y-4 md:space-y-6 flex flex-col items-center justify-center">
          
          <div className="w-full">
            <input
              name="email"
              required
              value={formData.email}
              onChange={handleChanges}
              className="bg-gray-100 w-full"
              type="text"
              placeholder={"Email"}
            />
            {/* {errors.email && (
              <p className="error text-red-400	">{errors.email}</p>
            )} */}
          </div>
          <div className="w-full">
            <input
              name="password"
              required
              value={formData.password}
              onChange={handleChanges}
              className="bg-gray-100 w-full"
              type="password"
              placeholder={"Password"}
            />
            {/* {errors.password && (
              <p className="error text-red-400	">{errors.password}</p>
            )} */}
          </div>
         
          <div>
            <button type="submit" className="btn-regsiter-form bg-blue-600 rounded-2xl w-28 h-8 hover:bg-blue-700 focus:ring">
              Sign Up
            </button>
          </div>
          <div className="foot-log-register">
            <div>
              Already have an account back to <Link className="text-blue-400" to={"/Login"}>Log in</Link>
            </div>
          </div>
                <div><Link className='text-blue-400' to={'/Forgot_password'}>Forgot Password</Link></div>
        </form>
             
         </div>
         </div>
         </div>
         </section>
      
    </>
  )
}

export default LoginPage