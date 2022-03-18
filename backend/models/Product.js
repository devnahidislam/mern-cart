const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: {
    type: 'string',
    required: true,
  },
  description: {
    type: 'string',
    required: true,
  },
  price: {
    type: 'number',
    required: true,
  },
  countInStock: {
    type: 'number',
    required: true,
  },
  image: {
    type: 'string',
    required: true,
  }
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;