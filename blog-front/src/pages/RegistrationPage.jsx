import React from "react";
import { NavBar } from "../components/loginComponents/NavBar";
// import '../staticfiles/registrationfiles/Registration-center.css'
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import { signUpUser } from "../redux/actions/authActions";
import { useDispatch } from "react-redux";

function RegistrationPage() {
  const [formData, setFormData] = useState({
    profile_pic: null,
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const handleChanges = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // const formDatas = JSON.stringify(formData);
    dispatch(signUpUser(formData))
      .then((response) => {
        Navigate("/otp");
      })
      .catch((errors) => {
        if (
          errors.response &&
          errors.response.data &&
          errors.response.data.errors
        )
          setErrors(errors.response.data.errors);
      });
    setFormData({
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      confirm_password: "",
    });
  };
  return (
    <>
      <NavBar />
    <section class="bg-white-500 dark:bg-gray-900  h-screen sm:h-screen md:h-screen lg:h-screen w-full flex flex-col items-center  py-3 mx-auto md:h-screen lg:py-8">
    <div className="main-container ">

      <div className="w-full bg-white bg-gray-100  rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 justify-center">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white flex flex-col items-center justify-center">
                  Create and account
              </h1>
        <form
          action=""
          onSubmit={handleSubmit}
          method="post"
          className="login-form space-y-4 md:space-y-6 flex flex-col items-center justify-center">
          <div className="w-full">
            <input
              name="first_name"
              required
              type="text"
              value={formData.first_name}
              className="bg-gray-100 w-full"
              onChange={handleChanges}
              placeholder={"First Name"}
            />
            {errors.first_name && (
              <p className="error text-red-400	">{errors.first_name}</p>
            )}
          </div>
          <div className="w-full">
            <input
              name="last_name"
              required
              value={formData.last_name}
              onChange={handleChanges}
              className="bg-gray-100 w-full"
              placeholder={"Last Name"}
            />
            {errors.last_name && (
              <p className="error text-red-400	">{errors.last_name}</p>
            )}
          </div>
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
            {errors.email && (
              <p className="error text-red-400	">{errors.email}</p>
            )}
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
            {errors.password && (
              <p className="error text-red-400	">{errors.password}</p>
            )}
          </div>
          <div className="w-full">
            <input
              name="confirm_password"
              required
              value={formData.confirm_password}
              onChange={handleChanges}
              className="bg-gray-100 w-fullx  "
              type="password"
              placeholder={"Confirm Password"}
            />
            {errors.confirm_password && (
              <p className="error text-red-400	">{errors.confirm_password}</p>
            )}
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
        </form>
      </div>
    </div>
    </div>
    </section>
    </>
  );
}

export default RegistrationPage;
