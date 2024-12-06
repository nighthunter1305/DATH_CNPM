import { axiosInstance } from './axiosInstance';

export const register = async (data) => {
  const response = await axiosInstance.post(`/auth/signup`, data);

  return response.data;
}

export const login = async (data) => {
  const response = await axiosInstance.post(`/auth/login`, data);
  console.log(response);


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
