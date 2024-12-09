import React, { useState } from "react";
import styles from "./Admin.module.css";
import { mockUsers } from "../../apis/mock-data";

const USERS_PER_PAGE = 6;

function Admin() {
  const [users, setUsers] = useState(mockUsers);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(users.length / USERS_PER_PAGE);

  const currentUsers = users.slice(
    (currentPage - 1) * USERS_PER_PAGE,
    currentPage * USERS_PER_PAGE
  );

  const handleDelete = (userId) => {
    const confirmDelete = window.confirm(
      "Bạn có chắc chắn muốn xóa người dùng này?"
    );
    if (confirmDelete) {
      setUsers(users.filter((user) => user.id !== userId));
      if (currentUsers.length === 1 && currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return users.length > 0 ? (
    <div className={styles.container}>
      <p className={styles.title}>Quản lý người dùng</p>

      <div className={styles.tableWrapper}>
        <table className={styles.userTable}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Tên</th>
              <th>Email</th>
              <th>Số điện thoại</th>
              <th>Vai trò</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.role}</td>
                <td>
                  <button
                    className={styles.deleteButton}
                    onClick={() => handleDelete(user.id)}
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className={styles.pagination}>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`${styles.pageButton} ${
                currentPage === index + 1 ? styles.activePage : ""
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  ) : (
    <div className={styles.noUser}>Không có người dùng</div>
  );
}

export default Admin;
