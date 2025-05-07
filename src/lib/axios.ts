import Axios, { AxiosInstance } from 'axios';
import { store } from '@/lib/store/store';
import { setLogout } from '@/lib/store/slices/auth';

const axiosInstance: AxiosInstance = Axios.create({
  baseURL: "http://localhost:8000/api/v1",
  headers: {
    'Content-Type': 'application/json',
  },

  timeout: 10000,
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken');

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
)

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response.message === 'jwt expired' && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const response = await axiosInstance.get('/auth/refresh', { withCredentials: true });

        const { accessToken } = response.data.data.accessToken;
        localStorage.setItem('accessToken', accessToken);
        originalRequest.headers.Authorization = `Bearer ${accessToken}`;

        return axiosInstance(originalRequest);
      } catch (err) {
        return Promise.reject(err);
      }
    } else if (
      // error.response?.data.message === "Internal server error" || 
      error.response?.data.message === "User not found" ||
      error.response?.data.message === 'Access token is invalid' ||
      error.response?.data.message === 'Refresh token is invalid' ||
      error.response?.data.message === 'No auth token' ||
      error.response?.data.message === 'jwt malformed' ||
      error.response?.data.message === 'invalid signature'
    ) {
      store.dispatch(setLogout());
      localStorage.removeItem('accessToken');
      window.location.href = '/login';
    } 
    
    return Promise.reject(error);
  }
)

export default axiosInstance;