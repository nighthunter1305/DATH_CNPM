const db = require('../config/db');
// delete product
exports.deleteProduct = async (req, res) => {
  const { productId } = req.params;
  try {
    const [product] = await db.execute('SELECT * FROM products WHERE id = ?', [productId]);
    if (product.length === 0) {
      return res.status(404).json({ message: 'Sản phẩm không tồn tại!' });
    }

    await db.execute('DELETE FROM products WHERE id = ?', [productId]);
    res.status(200).json({ message: 'Sản phẩm đã được xóa thành công!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Đã xảy ra lỗi trong khi xóa sản phẩm.' });
  }
};

// Ban user
exports.banUser = async (req, res) => {
  const { userId } = req.params;
  try {
    const [user] = await db.execute('SELECT * FROM users WHERE id = ?', [userId]);
    if (user.length === 0) {
      return res.status(404).json({ message: 'Người dùng không tồn tại!' });
    }

    await db.execute('UPDATE users SET banned = 1 WHERE id = ?', [userId])
    res.status(200).json({ message: 'Người dùng đã bị ban thành công!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Đã xảy ra lỗi trong khi ban người dùng.' });
  }
};
