import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'

import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import RegistrationPage from './pages/RegistrationPage'
import ForgotPassword from './pages/ForgotPassword'
import OtpConfirmation from './pages/OtpConfirmation'
import DetailViewBlog from './pages/DetailViewBlog'
import ProfileView from './pages/ProfileView'



function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/Login' element={<LoginPage/>} />
    <Route path='/Profile' element={<ProfileView/>} />
    <Route path = '/Registration' element={<RegistrationPage/>} />
    <Route path = '/Forgot_password' element={<ForgotPassword/>} />
    <Route path = '/otp' element={<OtpConfirmation/>} />
    <Route path='/DetailViewBlog' element={<DetailViewBlog />} />
    {/* <Route path = '/reset_password' element={<ForgotPassword/>} /> */}
    
  </Routes>
  
  </BrowserRouter>


  );
}

export default App;
