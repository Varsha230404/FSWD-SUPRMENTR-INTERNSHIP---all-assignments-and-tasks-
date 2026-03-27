import {
  addProduct,
  getAllProducts,
  getProductById
} from '../models/productModel.js';

export const fetchProducts = (req, res) => {
  res.json(getAllProducts());
};

export const fetchProductById = (req, res, next) => {
  try {
    const productId = Number(req.params.id);
    const product = getProductById(productId);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    return res.json(product);
  } catch (error) {
    return next(error);
  }
};

export const createProduct = (req, res, next) => {
  try {
    const { name, price, category } = req.body;

    if (!name || typeof price !== 'number' || !category) {
      return res
        .status(400)
        .json({ message: 'name, numeric price and category are required' });
    }

    const product = addProduct({ name, price, category });
    return res.status(201).json(product);
  } catch (error) {
    return next(error);
  }
};
