import React from "react";
import { NavBar } from "./NavBar";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// import { createAsyncThunk } from '@reduxjs/toolkit'

export const EmailField = () => {
  const navigate = useNavigate();
  const [EmailFunct, setEmailFunct] = React.useState({
    error: false,
    loading: false,
  });
  const BaseUrl = "http://127.0.0.1:8000/api/email_link_forgot_password";
  const [Email, setEmail] = React.useState("");
  const sendEmail = async () => {
    try {
      const response = await axios.post(
        BaseUrl,
        { email: Email, link: "" },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        console.log("email send successfully");
        setEmailFunct({
            error: false,
            loading:false,
        })
        
        navigate("/Login");
      }
    } catch (error) {
        setEmailFunct({
            error:true,
            loading:false,
        })
      console.log("Error There is no Account in this email ID", error);
    }
  };

  function handleSubmit(event) {
    console.log("submit", event);
    event.preventDefault();
    setEmailFunct({ 
        loading:true,
     });
    sendEmail();
  }
  return (
    <>
      <NavBar />

      <section className="bg-white-500 dark:bg-gray-900  h-screen sm:h-screen md:h-screen lg:h-screen w-full flex flex-col items-center  py-6  mx-auto md:h-screen lg:py-8">
        <div className="main-container w-1/3">
          <div className="w-full  bg-gray-100  rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 item-center  justify-center">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white flex flex-col items-center justify-center">
                Email
              </h1>
              <form
                action=""
                onSubmit={handleSubmit}
                method="post"
                className="login-form space-y-4 md:space-y-6 flex flex-col items-center justify-center"
              >
                <div className="w-full">
                  <input
                    name="password"
                    required
                    value={Email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-gray-50 border outline-0 border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    type="email"
                    placeholder={"Enter registered Email Address"}
                  />
                  {/* {errors.email && (
             <p className="error text-red-400	">{errors.email}</p>
           )} */}
                </div>

                <div className="flex justify-between ">
                  <button
                    type="submit"
                    className="btn-regsiter-form bg-blue-600 rounded-2xl w-28 h-8 hover:bg-blue-700 focus:ring"
                  >
                    submit
                  </button>
                </div>
                <div className="foot-log-register">
                  <div>
                    I know my password back to{" "}
                    <Link className="text-blue-400" to={"/Login"}>
                      Log in
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
