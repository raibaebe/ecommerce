const mongoose = require('mongoose');
const Order = require('../models/orderModel');
const Product = require('../models/productModel');  // Import product model to verify product existence

exports.createOrder = async (req, res) => {
  try {
    const { userId, productIds } = req.body;

    // Convert strings to ObjectId
    const userObjectId = mongoose.Types.ObjectId(userId);
    const productObjectIds = productIds.map(id => mongoose.Types.ObjectId(id));

    // Validate if the products exist
    const productsExist = await Product.find({ '_id': { $in: productObjectIds } });
    if (productsExist.length !== productObjectIds.length) {
      return res.status(404).json({ error: 'Some products not found' });
    }

    // Create the order
    const order = new Order({ userId: userObjectId, productIds: productObjectIds });
    await order.save();

    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
