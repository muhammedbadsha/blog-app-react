import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    // LOGIN_SUCCESS,
    // LOGIN_FAIL,
    // LOGOUT,
    // OTP_SUCCESS,
    // OTP_FAIL

} from '../actions/userActionTypes'
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const myURL ='http://127.0.0.1:8000/register'
// export const signUpUser = (formData) => (dispatch) => {
//     // Make a POST request to your login API
//     console.log(formData);
//     axios.post(myURL, formData)
//       .then((response) => {
//         console.log(response);
//         // Handle success, dispatch a success action
//         dispatch({ type: LOGIN_SUCCESS, payload: response.data });
//       })
//       .catch((error) => {
//         // Handle error, dispatch an error action
//         dispatch({ type: LOGIN_FAIL, payload: error });
//       });
//   };

// export const signUpUser = (formData) => async (dispatch) => {
    
//     try {
//       const response = await axios.post(myURL, formData);
//       console.log(response);
//       dispatch({ type: REGISTER_SUCCESS, payload: response.data });
//     } catch (error) {
//       dispatch({ type: REGISTER_FAIL, payload: error.response.data });
//     }
//   };
export const signUpUser = createAsyncThunk(
    'users/signUpUser',
    async (credentials, thunkAPI) => {
        try {
            const response = await axios.post(myURL,credentials);
            const {user} = response.data;
            return {user}; // Adjust based on your API response structure
        } catch (error) {
          const {message} = error.response.data;
          const {status} = error.response;
          
            return thunkAPI.rejectWithValue(error.response.data); // Adjust based on your error structure
        }
    }
);