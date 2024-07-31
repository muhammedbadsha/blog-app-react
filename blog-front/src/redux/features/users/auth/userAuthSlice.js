import React from "react";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const BaseUrl = 'http://127.0.0.1:8000/api/login'

export const login = createAsyncThunk(BaseUrl, async (credentials, thunkAPI) => {
    try {
        const response = await axios.post(BaseUrl, credentials);
        console.log(response)
        return response.data.serializer;
        //assuming the api returns user data on success
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);

    }

});

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        isLoggedIn: false,
        status: 'idle',
        error: null
    },
    reducers: {
        logout: (state) => {
            state.user = null;
            state.isLoggedIn = false;

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
                    state.user = action.payload;
                    state.isLoggedIn = true;
                    state.status = 'succeeded';

                })
            .addCase(login.rejected,
                (state, action) => {
                    state.status = 'failed';
                    state.error = action.payload;
                });
    },
});



export const {logout} = authSlice.actions;
export default authSlice.reducer;