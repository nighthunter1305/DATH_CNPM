import { axiosInstance } from './axiosInstance';

export const removeProductAPI = async (buyerId, productId) => {
  const response = await axiosInstance.post('/cart/remove', {
    buyer_id: buyerId,
    product_id: productId,
  })
  return response.data;
};