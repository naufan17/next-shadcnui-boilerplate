/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  accessToken: string | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  accessToken: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
      state.isAuthenticated = true;
    },
    setLogout: (state) => {
      state.accessToken = null;
      state.isAuthenticated = false;
    },
  },
});

// export const login = createAsyncThunk(
//   "auth/login",
//   async (credentials: { email: string; password: string }, { rejectWithValue }) => {
//     try {
//       const response: AxiosResponse = await axiosInstance.post('/login', credentials);
//       const accessToken: string = response.data.data.accessToken;

//       localStorage.setItem('accessToken', accessToken);
//       return accessToken;
//     } catch (error: any) {
//       return rejectWithValue(error.response.data.message);
//     }
//   }
// )

export const { setLogin, setLogout } = authSlice.actions;
export default authSlice.reducer;