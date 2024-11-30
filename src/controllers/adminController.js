const adminService = require('../service/adminService');


exports.deleteProduct = async (req, res) => {
  const { productId } = req.params;
  try {
    const result = await adminService.deleteProduct(productId);
    if (!result) {
      return res.status(404).json({ message: 'Sản phẩm không tồn tại!' });
    }
    res.status(200).json({ message: 'Sản phẩm đã được xóa thành công!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Đã xảy ra lỗi khi xóa sản phẩm.' });
  }
};


exports.banUser = async (req, res) => {
  const { userId } = req.params;
  try {
    const result = await adminService.banUser(userId);
    if (!result) {
      return res.status(404).json({ message: 'Người dùng không tồn tại!' });
    }
    res.status(200).json({ message: 'Người dùng đã bị ban thành công!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Đã xảy ra lỗi khi ban người dùng.' });
  }
};
