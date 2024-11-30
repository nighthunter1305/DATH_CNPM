const express = require('express');
const router = express.Router();
const adminController = require('../controller/adminController');

// Route để xóa sản phẩm
router.delete('/products/:productId', adminController.deleteProduct);

// Route để ban người dùng
router.put('/users/ban/:userId', adminController.banUser);

module.exports = router;
