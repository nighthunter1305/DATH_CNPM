import express from 'express';
import { ProductController } from '~/controllers/ProductController';

const router = express.Router();

router.post('/:sellerId/add', ProductController.createProduct);

// for 1 seller
router.route('/:id')
  .get(ProductController.getProduct)
  .put(ProductController.editProduct)
  .delete(ProductController.deleteProduct);

export const ProductRoutes = router;
