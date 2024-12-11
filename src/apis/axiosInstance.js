import axios from 'axios';
import { env } from '../config/env';
const API_ROOT = env.REACT_APP_API_ROOT;
export const axiosInstance = axios.create({
  baseURL: API_ROOT,
  withCredentials: true
});