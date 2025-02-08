const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// POST request to create a new order
router.post('/orders', orderController.createOrder);

// GET request to retrieve orders by userId
router.get('/orders/user/:userId', orderController.getOrdersByUser);

module.exports = router;
