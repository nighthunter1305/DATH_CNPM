import { ProductModel } from '~/models/ProductModel';
import { StatusCodes } from 'http-status-codes';

async function getProduct(req, res) {
  try {
    let { id } = req.params;
    const product = await ProductModel.getProduct(id);

    res.status(StatusCodes.OK).json(product);
  } catch (error) {
    throw new Error(error);
  }
};

async function createProduct(req, res) {
  try {
    await ProductModel.createProduct(req.body, req.params.sellerId);
    res.status(StatusCodes.CREATED).json('Created');

  } catch (error) {
    throw new Error(error);
  }
}

async function editProduct(req, res) {
  try {
    let { id } = req.params;
    let editedProduct = await ProductModel.editProduct(id, req.body);

    res.status(StatusCodes.OK).json(editedProduct);

  } catch (error) {
    throw new Error(error);
  }
}

async function deleteProduct(req, res) {
  try {
    let { id } = req.params;
    await ProductModel.deleteProduct(id);
    res.status(StatusCodes.OK).json('Deleted');

  } catch (error) {
    throw new Error(error);
  }
}

export const ProductController = {
  getProduct,
  createProduct,
  editProduct,
  deleteProduct
};
