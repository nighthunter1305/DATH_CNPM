import { axiosInstance } from './axiosInstance';

export const checkLogin = async () => {
  try {
    const response = await axiosInstance.get("/auth/protected");
    console.log(response.data.message);
    return true;
  } catch (error) {
    console.log(error.response?.data?.message || "Error occurred");
    return false;
  }
};

export const getProducts = async () => {
  const response = await axiosInstance.get(`/home`);

  return response.data;
}

export const getProductReview = async (id) => {
  const response = await axiosInstance.get(`/product/${id}`);
  
  return response.data;
}

export const getSellerHomePage = async () => {
  const response = await axiosInstance.get(`/home/seller`);

  return response.data;
};

export const getUserData = async () => {
  const response = await axiosInstance.get(`/user`);
  
  return response.data;
}

export const getOrders = async (buyerId) => {
  const response = await axiosInstance.get(`/order/${buyerId}`);
  
  return response.data;
}

export const totalprice = async (buyer_id) => {
  const response = await axiosInstance.get(`/cart/total/${buyer_id}`);
  console.log(response.data);
  return response.data;
}
