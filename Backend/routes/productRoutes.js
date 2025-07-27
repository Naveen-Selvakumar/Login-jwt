const express = require('express');
const router = express.Router();
const Product = require('../models/productModel');
const { protect } = require('../middleware/authMiddleware');

// GET /api/products (Protected)
router.get('/', protect, async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch products' });
  }
});

module.exports = router;
