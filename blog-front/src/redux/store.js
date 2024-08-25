import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userSlice from "./features/userSlice";
import authSlice from './features/users/auth/userAuthSlice'
export const store = configureStore({
    reducer: {
        user: userSlice,
        auth: authSlice

    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: true,


})