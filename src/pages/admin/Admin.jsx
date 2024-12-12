import React, { useEffect, useState } from "react";
import styles from "./Admin.module.css";
import { mockUsers } from "../../apis/mock-data";
import { Icon } from "@iconify/react";
import { getAllUsers, getUserData } from '../../apis/getAPIs';
import { deleteUser } from '../../apis/deleteAPIs';
import { logout } from '../../apis/postAPIs';
import { useNavigate } from 'react-router-dom';

const USERS_PER_PAGE = 6;

function Admin() {
  const navigate = useNavigate();
  const [admin, setAdmin] = useState({});
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

  useEffect(() => {
    const fetchAdminInfor = async () => {
      const response = await getUserData();

      setAdmin(response);
    }
    const fetchAllUsers = async () => {
      const response = await getAllUsers();

      if (response.status === 200) {
        setUsers(response.data);
      }
    }

    fetchAdminInfor();
    fetchAllUsers();
  }, []);

  const handleDelete = async (userId) => {
    const confirmDelete = window.confirm(
      "Bạn có chắc chắn muốn xóa người dùng này?"
    );
    if (confirmDelete) {
      const response = await deleteUser(userId);

      if (response.status === 200) {
        setUsers(users.filter((user) => user.id !== userId));
        if (currentUsers.length === 1 && currentPage > 1) {
          setCurrentPage(currentPage - 1);
        }
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

  const handleLogout = async () => {
    const response = await logout();
    console.log(response);
   
    sessionStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.adminInfo}>
          {/* này được 2 thông tin lười mock quá =)) */}
          <img
            src="https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/avatars/7.png"
            alt="Admin Avatar"
            className={styles.avatar}
          />
          <span className={styles.adminName}>{admin.name}</span>
        </div>
        <button className={styles.logoutButton} onClick={handleLogout}>Đăng xuất</button>
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
              {currentUsers.map((user, index) => (
                <tr key={user.id}>
                  <td>{(currentPage - 1) * USERS_PER_PAGE + index + 1}</td>
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
                className={`${styles.pageButton} ${currentPage === index + 1 ? styles.activePage : ""
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
