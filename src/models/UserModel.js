import { deleteRow, getOne, insertSingleRow, updateRow } from '~/database/query';

// Lấy thông tin một người dùng theo ID
async function getUser(id) {
  try {
    let user = await getOne('users', 'id', id);
    return user;
  } catch (err) {
    throw new Error(`Error fetching user with ID ${id}: ${err.message}`);
  }
}

// Tạo mới một người dùng
async function createUser(user) {
  try {
    await insertSingleRow('users', user);
    console.log('User created successfully');
  } catch (err) {
    throw new Error(`Error creating user: ${err.message}`);
  }
}

// Cập nhật thông tin người dùng
async function updateUser(id, data) {
  try {
    const conditions = { id: id };
    let updatedUser = await updateRow('users', conditions, data);
    return updatedUser;
  } catch (err) {
    throw new Error(`Error updating user with ID ${id}: ${err.message}`);
  }
}

// Khóa người dùng (cập nhật trạng thái thành 'banned')
async function banUser(id) {
  try {
    const conditions = { id: id };
    await updateRow('users', conditions, { status: 'banned' }); // Lưu ý: Cần cột `status` trong bảng `users`
    console.log(`User with ID ${id} has been banned`);
  } catch (err) {
    throw new Error(`Error banning user with ID ${id}: ${err.message}`);
  }
}

// Xóa người dùng
async function deleteUser(id) {
  try {
    const conditions = { id: id };
    await deleteRow('users', conditions);
    console.log(`User with ID ${id} has been deleted`);
  } catch (err) {
    throw new Error(`Error deleting user with ID ${id}: ${err.message}`);
  }
}

// Lấy danh sách người dùng theo điều kiện
async function getUsersByCondition(condition) {
  try {
    let users = await getOne('users', condition);
    return users;
  } catch (err) {
    throw new Error(`Error fetching users by condition ${JSON.stringify(condition)}: ${err.message}`);
  }
}

// Export các hàm dưới dạng object
export const UserModel = {
  getUser,
  createUser,
  updateUser,
  banUser,
  deleteUser,
  getUsersByCondition, // Hàm mở rộng để tìm kiếm người dùng theo điều kiện
};
