import { axiosInstance } from './axiosInstance';

export const register = async (data) => {
  const response = await axiosInstance.post(`/auth/signup`, data);

  return response.data;
}

export const login = async (data) => {
  const response = await axiosInstance.post(`/auth/login`, data);

  return response.data;
}

export const loginByGoogle = async (token) => {
  const response = await axiosInstance.post(`/auth/google`, { token });

  return response.data;
}

export const logout = async () => {
  const response = await axiosInstance.post('/auth/logout');

  return response.data;
}

export const payByZalo = async (amount, items, userId) => {
  const response = await axiosInstance.post('/payment', { amount, items, userId });

  return response.data;
}
