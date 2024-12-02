
import { insertSingleRow, updateRow, getOne, deleteRow } from '~/database/query';
async function getCartIDbyBuyerID(buyer_id) {
  try {
    const cart = await getOne('carts', { buyer_id: buyer_id });
    return cart || null;
  } catch (error) {
    throw new Error(`Faild to get cart by buyer_id: ${buyer_id} - ${error.message}`);
  }
}

async function createCart(buyer_id) {
  const newCartData = { id: `cart${Date.now()}`, buyer_id };
  return await insertSingleRow('carts', newCartData);
}

async function getProductInCart(cart_id, product_id) {
  const rows = await getOne('cart_product', { cart_id, product_id });
  return rows;
}

async function addProductToCart(cart_id, product_id, quantity) {
  const data = { cart_id, product_id, quantity };
  return await insertSingleRow('cart_product', data);
}

async function updateProductQuantity(cart_id, product_id, quantity) {
  const data = { quantity };
  const where = { cart_id, product_id };
  return await updateRow('cart_product', data, where);
}

async function removeProductFromCart(cart_id, product_id) {
  const where = { cart_id, product_id };
  return await deleteRow('cart_product', where);
}


export const CartModel = {
  createCart,
  getCartIDbyBuyerID,
  getProductInCart,
  addProductToCart,
  updateProductQuantity,
  removeProductFromCart
};