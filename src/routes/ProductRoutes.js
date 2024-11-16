import express from 'express';
import { ProductController } from '~/controllers/ProductController';
import { auth } from '~/middlewares/verify';

const router = express.Router();

router.post('/:sellerId/add', auth(['SELLER']), ProductController.createProduct);

// for 1 seller
router.route('/:id')
  .get(ProductController.getProduct)
  .put(ProductController.editProduct)
  .delete(ProductController.deleteProduct);

export const ProductRoutes = router;
