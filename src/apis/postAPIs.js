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

export const storeAddress = async (address) => {
  const response = await axiosInstance.post('/user/store-address', address);

  return response.data;
}

export const decreaseVoucherQuantity = async (voucher) => {
  const response = await axiosInstance.post('/coupon/decrease', voucher);

  return response.data;
}

export const createProduct = async (product) => {
  const response = await axiosInstance.post('/product/add', product, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });

  return response;
}

export const addProductToCart = async (buyerId, productId, quantity) => {
  const response = await axiosInstance.post(`/cart/add`, {
    buyer_id: buyerId,
    product_id: productId,
    quantity: quantity,
  });
  return response;
};
