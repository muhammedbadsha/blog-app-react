
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const BaseUrlLogin = 'http://127.0.0.1:8000/api/login';
const BaseUrlLogout = 'http://127.0.0.1:8000/api/logout'
export const login = createAsyncThunk('USER/LOGIN', async (credentials, thunkAPI) => {
    try {
        const response = await axios.post(BaseUrlLogin, credentials);
        // const {success, message,status} = response
        const { token, user } = response.data
        // console.log(token, "token")

        return { token, user };
        //assuming the api returns user data on success
        // if (!status) return thunkAPI.rejectWithValue(message)
        //     return response.data.serializer;

    }
    catch (error) {

        const { message } = error.response.data
        const { status } = error.response
        if (status === 404) {
            return thunkAPI.rejectWithValue("User not Found")
        }
        return thunkAPI.rejectWithValue(message)

    }

});
// export const logoutUser = createAsyncThunk('USER/LOGOUT', async(credentials,thunkAPI)=>{
//     try{
//         const response = await axios.post(BaseUrlLogout)

//         console.log('response of logout: ' + response);
        
//         const { message } = response.data
//         return (message)
//     }
//     catch (error){
//         console.log(error)
//     }
// })

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'idle',
        user: localStorage.getItem("user") ||null,
        access_token: localStorage.getItem("access_token") || null,
        refresh_token: localStorage.getItem("refresh_token") || null,
        error: null,
        isLoggedIn: localStorage.getItem("isLoggedIn") || false,
    },
    reducers: {
        logout: (state) => {
            state.user = null;
            state.isLoggedIn = false;
            state.access_token = null;
            state.refresh_token = null;
            localStorage.removeItem('user');
            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');
            localStorage.removeItem('isLoggedIn');

          
        },
        

    },

    extraReducers: (builder) => {
        builder
            .addCase(login.pending,
                (state) => {
                    state.status = 'loading...';

                })
            .addCase(login.fulfilled,
                (state, action) => {
                    // console.log(action.payload);
                    state.access_token = action.payload.token.access;
                    state.refresh_token = action.payload.token.refresh;
                    state.user = action.payload;
                    state.isLoggedIn = true;
                    state.status = 'succeeded';
                    localStorage.setItem('access_token', state.access_token)
                    localStorage.setItem('refresh_token', state.refresh_token)
                    localStorage.setItem('user', state.user)
                    localStorage.setItem('isLoggedIn', state.isLoggedIn)
                   
                })
            .addCase(login.rejected,
                (state, action) => {
                    state.status = 'failed';
                    state.error = action.payload;
                });
    },
});



export const { logout } = authSlice.actions;

export default authSlice.reducer;