import { axiosInstance } from './axiosInstance';

export const removeProductAPI = async (buyerId, productId) => {
  const response = await axiosInstance.post('/cart/remove', {
    buyer_id: buyerId,
    product_id: productId,
  })
  return response.data;
};

export const deleteAddress = async (address) => {
  const response = await axiosInstance.post('/user/delete-address', address);

  return response.data;
};

export const deleteProduct = async (id) => {
  const response = await axiosInstance.delete(`/product/${id}`);

  return response;
}

export const deleteUser = async (id) => {
  const response = await axiosInstance.delete(`/admin/delete-user/${id}`);

  return response;
}
