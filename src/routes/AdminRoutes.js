const express = require('express');
const router = express.Router();
const AdminController = require('./AdminController');

router.delete('/products/:id', AdminController.deleteProduct);

router.put('/users/:id/ban', AdminController.banUser);

module.exports = router;
