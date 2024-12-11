import { axiosInstance } from './axiosInstance';

export const updateQuantityAPI = async (buyerId, productId, newQuantity) => {
  const response = await axiosInstance.put('/cart/update-quantity', {
    buyer_id: buyerId,
    product_id: productId,
    quantity: newQuantity,
  });

  return response.data;
};
