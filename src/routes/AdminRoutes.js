const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin.controller');

router.delete('/product/:id', adminController.deleteProduct);

router.patch('/user/:id/ban', adminController.banUser);

module.exports = router;
