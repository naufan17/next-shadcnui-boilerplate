import Axios, { AxiosInstance } from 'axios';

const axiosInstance: AxiosInstance = Axios.create({
  baseURL: process.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
  withCredentials: true,
});

export default axiosInstance;