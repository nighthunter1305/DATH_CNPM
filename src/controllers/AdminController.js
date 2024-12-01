const { ProductModel } = require('../models/productmodel');
const { UserModel } = require('../models/UserModel');

// Xóa sản phẩm
exports.deleteProduct = async (req, res) => {
    try {
        const productId = req.params.id;

        // Sử dụng hàm từ productmodel.js
        await ProductModel.deleteProduct(productId);

        return res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error', error });
    }
};

// Ban người dùng
exports.banUser = async (req, res) => {
    try {
        const userId = req.params.id;

        // Giả sử UserModel có hàm banUser
        await UserModel.banUser(userId);

        return res.status(200).json({ message: 'User banned successfully' });
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error', error });
    }
};
