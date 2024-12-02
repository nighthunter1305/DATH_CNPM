import { CartModel } from '~/models/CartModel';
import { StatusCodes } from 'http-status-codes';

async function getCartIDbyBuyerID(req, res) {
  try {
    const data = await CartModel.getCartIDbyBuyerID(req.params.buyer_id);
    res.status(StatusCodes.OK).json(data);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
  }
}

async function addProducttoCart(req, res) {
  const { buyer_id, product_id, quantity } = req.body;
  try {
    let cart = await CartModel.getCartIDbyBuyerID(buyer_id).catch(() => null);
    let cart_id;

    if (!cart) {
      const newCart = await CartModel.createCart(buyer_id);
      cart_id = newCart.id;
    } else {
      cart_id = cart.id;
    }
    const existingProduct = await CartModel.getProductInCart(cart_id, product_id);
    if (existingProduct) {
      await CartModel.updateProductQuantity(cart_id, product_id, existingProduct.quantity + quantity);
    } else {
      await CartModel.addProductToCart(cart_id, product_id, quantity);
    }
    res.status(StatusCodes.OK).json({ message: 'Product added to cart successfully' });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
  }
}

async function updateQuantity(req, res) {
  const { buyer_id, product_id, quantity } = req.body;

  if (quantity <= 0) {
    return res.status(StatusCodes.BAD_REQUEST).json({ error: 'Quantity must be greater than zero' });
  }

  try {
    const cart = await CartModel.getCartIDbyBuyerID(buyer_id);
    if (!cart) {
      return res.status(StatusCodes.NOT_FOUND).json({ error: 'Cart not found for this buyer' });
    }
    const cart_id = cart.id;
    const existingProduct = await CartModel.getProductInCart(cart_id, product_id);
    if (!existingProduct) {
      return res.status(StatusCodes.NOT_FOUND).json({ error: 'Product not found in the cart' });
    }
    await CartModel.updateProductQuantity(cart_id, product_id, quantity);
    res.status(StatusCodes.OK).json({ message: 'Product quantity updated successfully' });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
  }
}

async function removeProduct(req, res) {
  const { buyer_id, product_id } = req.body;

  try {
    // Lấy thông tin giỏ hàng của người mua
    const cart = await CartModel.getCartIDbyBuyerID(buyer_id);
    if (!cart) {
      return res.status(StatusCodes.NOT_FOUND).json({ error: 'Cart not found for this buyer' });
    }

    const cart_id = cart.id;

    // Kiểm tra xem sản phẩm có trong giỏ hàng hay không
    const existingProduct = await CartModel.getProductInCart(cart_id, product_id);
    if (!existingProduct) {
      return res.status(StatusCodes.NOT_FOUND).json({ error: 'Product not found in the cart' });
    }

    // Xóa sản phẩm khỏi giỏ hàng
    await CartModel.removeProductFromCart(cart_id, product_id);

    res.status(StatusCodes.OK).json({ message: 'Product removed from cart successfully' });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
  }
}

export const CartController = {
  getCartIDbyBuyerID,
  addProducttoCart,
  updateQuantity,
  removeProduct
};
