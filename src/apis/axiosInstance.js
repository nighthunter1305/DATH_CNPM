import axios from 'axios';

const API_ROOT = process.env.REACT_APP_API_ROOT;
export const axiosInstance = axios.create({
  baseURL: API_ROOT,
  withCredentials: true
});