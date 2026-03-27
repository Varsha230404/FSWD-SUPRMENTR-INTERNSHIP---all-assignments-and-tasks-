import express from 'express';
import {
  createProduct,
  fetchProductById,
  fetchProducts
} from '../controllers/productController.js';

const router = express.Router();

router.get('/products', fetchProducts);
router.get('/products/:id', fetchProductById);
router.post('/products', createProduct);

export default router;
