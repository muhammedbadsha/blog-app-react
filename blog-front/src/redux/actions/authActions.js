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

export const signUpUser = (formData) => async (dispatch) => {
    
    try {
      const response = await axios.post(myURL, formData);
      console.log(response);
      dispatch({ type: REGISTER_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: REGISTER_FAIL, payload: error.response.data });
    }
  };