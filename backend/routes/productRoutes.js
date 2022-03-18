const express = require('express');
const router = express.Router();

const { getAllProducts, getAllProductById } = require('../controller/productController');

/**
 * @desc GET all products from db
 * @route get /api/products
 * @access Public
 */
router.get('/', getAllProducts);

/**
 * @desc GET a product by id from db
 * @route get /api/products/:id
 * @access Public
 */
router.get('/:id', getAllProductById);

module.exports = router;