 import React, { useState } from "react";
import { NavBar } from "../components/loginComponents/NavBar";
import "../staticfiles/logincssfiles/Login-container.css";
import { Link } from "react-router-dom";
import { login } from "../redux/features/users/auth/userAuthSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  // const [errors, setErrors] = useState({});
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const { status, error ,isLoggedIn} = useSelector((state) => state.auth);

 React.useEffect(()=>{
  if (isLoggedIn){
    
    navigate('/')
  }
 },[isLoggedIn,navigate])
  const handleSubmit = async (e) => { 
    e.preventDefault();
    try{
      dispatch(login(formData)); 
    }catch(e){
      console.log(e);
    }
  };
  const passwordUnVisible = () => {
    setIsPasswordVisible(true)
    let count = 10;
    const timer = setInterval(function () {
      count--;
      if (count === 0) {
        clearInterval(timer);
        setIsPasswordVisible(false)
      
      }
    }, 1000);
  };
  const handleChanges = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  return (
    <>
      <NavBar />
      <section className="bg-white-500 dark:bg-gray-900  h-screen sm:h-screen md:h-screen lg:h-screen w-full flex flex-col items-center  py-3 mx-auto md:h-screen lg:py-8">
        <div className="main-container ">
          <div className="w-full bg-white bg-gray-100  rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 justify-center">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white flex flex-col items-center justify-center">
                Log In
              </h1>
              <form
                action=""
                onSubmit={handleSubmit}
                method="post"
                className="login-form space-y-4 md:space-y-6 flex flex-col items-center justify-center"
              >
                <div className="w-full">
                  <input
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChanges}
                    className="bg-gray-50 border outline-0 border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    type="email"
                    placeholder={"Email"}
                  />
                  {/* {errors.email && (
              <p className="error text-red-400	">{errors.email}</p>
            )} */}
                </div>
                <div className="w-full bg-gray-50 border border-gray-300 outline-0 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 relative">
                  <input
                    name="password"
                    required
                    value={formData.password}
                    onChange={handleChanges}
                    className="bg-gray-50 border border-gray-300 pr-14 outline-0 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    type={isPasswordVisible ? "text" : "password"}
                    placeholder={"Password"}
                  />
                  {isPasswordVisible ? (
                    <p
                      onClick={() => setIsPasswordVisible(false)}
                      className="absolute right-2 top-2"
                    >
                      Hide
                    </p>
                  ) : (
                    <p
                      onClick={passwordUnVisible}
                      className="absolute right-2 top-2"
                    >
                      Show
                    </p>
                  )}

                  {/* {errors.password && (
              <p className="error text-red-400	">{errors.password}</p>
            )} */}
                </div>
                <div>
                  <button
                    type="submit"
                    className="btn-regsiter-form bg-blue-600 rounded-2xl w-28 h-8 hover:bg-blue-700 focus:ring"
                    >
                    Sign Up
                  </button>
                </div>
                <div className="foot-log-register">
                  <div>
                    Already have an account back to{" "}
                    <Link className="text-blue-400" to={"/Registration"}>
                      sign up
                    </Link>
                  </div>
                </div>
                <div>
                  <Link className="text-blue-400" to={"/Forgot_password"}>
                    Forgot Password
                  </Link>
                </div>
              </form>
                    {status === 'loading' && <p className="">Loading...</p>}
                    {status === 'failed' && <p className="text-red-400">Error: {error}</p>}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LoginPage;
