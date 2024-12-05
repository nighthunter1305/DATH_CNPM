import { axiosInstance } from './axiosInstance';

export const register = async (data) => {
  console.log(data);

  const response = await axiosInstance.post(`/auth/signup`, data);

  return response.data;
}

export const login = async (data) => {
  const response = await axiosInstance.post(`/auth/login`, data);

  return response.data;
}

export const logout = async () => {
  const response = await axiosInstance.post('/auth/logout');

  return response.data;
}

export const getProductsInCartAPI = async (buyerId) => {
  const response = await axiosInstance.post('/cart/products', {
    buyer_id: buyerId,
  });
  return response;

};

export const updateCheckedStatusAPI = async (buyerId, productId) => {
  const response = await axiosInstance.post('/cart/checked', {
    buyer_id: buyerId,
    product_id: productId,
  });
  return response.data;
};

