import {
    createSlice,
} from '@reduxjs/toolkit';
import { signUpUser } from '../actions/authActions';



const initialState = {
    message: "",
    user: "",
    token: "",
    loading: false,
    error: ""
};

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(signUpUser.pending, (state) => {
                state.loading = true;
                state.error = ""; // Clear previous errors
            })
            .addCase(signUpUser.fulfilled, (state, action) => {
                state.loading = false;
                state.message = action.payload.message || ""; // Adjust based on actual payload structure
                state.user = action.payload.user || ""; // Assuming you get user data
                state.token = action.payload.token || ""; // Assuming you get a token
            })
            .addCase(signUpUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Something went wrong"; // Adjust based on actual error handling
            });
    }
});

export default userSlice.reducer;

export const userSelector = (state) => state.users;