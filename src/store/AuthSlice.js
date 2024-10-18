// holds actions for the the authentication 


import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isAuthenticated: false,
    isLoading: true,
    error: null,
    user: null,
};

export const registerUser = createAsyncThunk(
    "/auth/register",

    async (formData) => {
        const response = await axios.post(
            "http://localhost:4000/api/auth/register", 
            formData,
            { withCredentials: true}
        );
        return response.data;
    }
);

export const verifyUser = createAsyncThunk(
    "/auth/verify-email",

    async (code) => {
        const response = await axios.post(
            "http://localhost:4000/api/auth/register", 
            {code},
            { withCredentials: true}
        );
        return response.data;
    }
);

export const loginUser = createAsyncThunk(
    "/auth/login",

    async (formData) => {
        const response = await axios.post(
            "http://localhost:5000/api/auth/login",
            formData,
            { withCredentials: true, }
        );
        return response.data;
    }
);

export const logoutUser = createAsyncThunk(
    "/auth/logout",

    async () => {
        const response = await axios.post(
            "http://localhost:5000/api/auth/logout",
            {},
            { withCredentials: true, }
        );
        return response.data;
    }
);

export const checkAuth = createAsyncThunk(
    "/auth/checkauth",

    async () => {
        const response = await axios.get(
            "http://localhost:5000/api/auth/check-auth",
            { 
                withCredentials: true, 
                headers: {
                    "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
                },
            }
        );
        return response.data;
    }
);

export const forgotPasswordUser = createAsyncThunk(
    "/auth/forgot-password",

    async (email) => {
        const response = await axios.post(
            "http://localhost:4000/api/auth/forgot-password", 
            { email },
            { withCredentials: true}
        );
        return response.data;
    }
);

export const resetPasswordUser = createAsyncThunk(
    "/auth/reset-password",

    async (token, password) => {
        const response = await axios.post(
            `http://localhost:4000/api/auth/reset-password/${token}`, 
            {password},
            { withCredentials: true}
        );
        return response.data;
    }
);


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {},
    },
    extraReducers: (builder) => {
        builder
        // register user
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = null;
                state.isAuthenticated = false;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = true;
                state.user = null;
                state.isAuthenticated = false;
            })
            // verify emails
            .addCase(verifyUser.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(verifyUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload.success ? action.payload.user : null;
                state.isAuthenticated = true;
                state.error = null;
            })
            .addCase(verifyUser.rejected, (state, action) => {
                state.isLoading = false;
                state.user = null;
                state.isAuthenticated = false;
                state.error = true;
            })
            // login
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                    console.log(action);
                
                state.isLoading = false;
                state.user = action.payload.success ? action.payload.user : null;
                state.isAuthenticated = action.payload.success;
                state.error = null;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false;
                state.user = null;
                state.isAuthenticated = false;
                state.error = action.payload.error;
            })
             // checkauth state
             .addCase(checkAuth.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(checkAuth.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload.success ? action.payload.user : null;
                state.isAuthenticated = action.payload.success;
                state.error = null;
            })
            .addCase(checkAuth.rejected, (state, action) => {
                state.isLoading = false;
                state.user = null;
                state.isAuthenticated = false;
                state.error = action.payload.error;
            })
             // forgot password state
             .addCase(forgotPasswordUser.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(forgotPasswordUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
            })
            .addCase(forgotPasswordUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload.error;
            })
             // reset password state
             .addCase(resetPasswordUser.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(resetPasswordUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
            })
            .addCase(resetPasswordUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload.error;
            })
            // logout user
            .addCase(logoutUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = null;
                state.isAuthenticated = false;
                state.error = null;
            })
            .addCase(logoutUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload.error;
            })
    }
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;