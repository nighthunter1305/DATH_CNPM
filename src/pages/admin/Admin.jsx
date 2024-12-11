import React, { useState } from "react";
import styles from "./Admin.module.css";
import { mockUsers } from "../../apis/mock-data";
import { Icon } from "@iconify/react";

const USERS_PER_PAGE = 6;

function Admin() {
  const [users, setUsers] = useState(mockUsers);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const totalPages = Math.ceil(users.length / USERS_PER_PAGE);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const currentUsers = filteredUsers.slice(
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

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.adminInfo}>
          <img
            src="https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/avatars/7.png"
            alt="Admin Avatar"
            className={styles.avatar}
          />
          <span className={styles.adminName}>John Doe</span>
        </div>
        <button className={styles.logoutButton}>Đăng xuất</button>
      </div>

      <p className={styles.title}>Quản lý người dùng</p>

      <div className={styles.searchWrapper}>
        <Icon icon="tabler:search" className={styles.searchIcon} />
        <input
          type="text"
          placeholder="Tìm kiếm theo tên người dùng"
          className={styles.searchInput}
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      {filteredUsers.length > 0 ? (
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
                      <Icon icon="mingcute:delete-fill" />
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
      ) : (
        <div className={styles.noUser}>
          <Icon icon="ix:user-fail-filled" className={styles.userIcon} />
          <p>Không tìm thấy người dùng.</p>
        </div>
      )}
    </div>
  );
}

export default Admin;
