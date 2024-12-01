const Product = require('../models/product.model');
const User = require('../models/user.model');

// Xóa sản phẩm theo ID
exports.deleteProduct = async (req, res) => {
    try {
        const productId = req.params.id;

        // Tìm và xóa sản phẩm
        const product = await Product.findByIdAndDelete(productId);

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        return res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error', error });
    }
};

// Cấm người dùng theo ID
exports.banUser = async (req, res) => {
    try {
        const userId = req.params.id;

        // Tìm và cập nhật trạng thái bị cấm của người dùng
        const user = await User.findByIdAndUpdate(
            userId,
            { is_banned: true },
            { new: true }
        );

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        return res.status(200).json({ message: 'User banned successfully', user });
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error', error });
    }
};
