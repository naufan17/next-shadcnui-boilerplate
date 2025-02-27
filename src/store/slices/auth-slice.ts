/* eslint-disable @typescript-eslint/no-explicit-any */
import axiosInstance from "@/lib/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";

interface AuthState {
  accessToken: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  accessToken: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.accessToken = action.payload;
      state.isAuthenticated = true;
      state.isLoading = false;
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.accessToken = null;
      state.isAuthenticated = false;
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const login = createAsyncThunk(
  "auth/login",
  async (credentials: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const response: AxiosResponse = await axiosInstance.post('/login', credentials);
      const accessToken: string = response.data.data.accessToken;

      localStorage.setItem('accessToken', accessToken);
      return accessToken;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  }
)

export const { loginSuccess, loginFailure } = authSlice.actions;
export default authSlice.reducer;