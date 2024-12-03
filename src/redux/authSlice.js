import { createSlice } from "@reduxjs/toolkit";
import LogIn from "../pages/LogIn";

const authSlice = createSlice({
    name: 'auth',
    initialState: { isLoggedIn: false, loginUser: null },
    reducers: {
        login(state,action) {
            state.isLoggedIn = true;
            state.loginUser = action.payload;
        },
        logout(state) {
            state.isLoggedIn = false;
            state.loginUser = null;
        },
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;