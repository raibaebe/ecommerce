const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

router.get('/orders', orderController.getOrders); // Example route with callback function
router.post('/orders', orderController.createOrder); // Example route with callback function

module.exports = router;