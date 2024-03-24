const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  title: String,
  description: String,
  prodImg: Array,
  token: String,
  price: Number,
  mrp: Number,
  rating: Number,
  weight: String,
  qty: Number,
  hx: String,
  wx: String,
  lx: String
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;