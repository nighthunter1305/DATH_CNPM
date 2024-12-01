import { useNavigate } from "react-router-dom";
import React from "react";
import styles from "./Navbar.module.css";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <button className={styles.logoButton} onClick={() => navigate("/")}>
          {/* eslint-disable-next-line */}
          <a href="#">
            <Icon className={styles.logo} icon="noto:leafy-green" />
          </a>{" "}
          <p className={styles.shopName}>GreenFood</p>
        </button>
      </div>

      <div className={styles.searchBar}>
        <input type="text" placeholder="Nhập từ khoá..." />
        <button className={styles.searchBtn}>
          <Icon icon="fe:search" />
        </button>
      </div>

      <div className={styles.userOptions}>
        <div className={styles.notificationIcon}>
          {/* eslint-disable-next-line */}
          <a href="#">
            <Icon
              icon="mingcute:notification-fill"
              className={styles.iconify}
            />
            <span className={styles.notificationCount}>3</span>
          </a>
        </div>

        <div className={styles.messageIcon}>
          {/* eslint-disable-next-line */}
          <a href="#" onClick={() => navigate("/status")}>
            <Icon icon="tabler:mail-filled" className={styles.iconify} />
            <span className={styles.messageCount}>5</span>
          </a>
        </div>

        <div className={styles.cart}>
          {/* eslint-disable-next-line */}
          <Link to="/cart">
            <Icon icon="mdi:cart" className={styles.iconify} />
            <span className={styles.cartCount}>10</span>
          </Link>
        </div>
        {/* eslint-disable-next-line */}
        <Link to="/login">Đăng nhập</Link>
        {/* eslint-disable-next-line */}
        <Link to="/signup">Đăng ký</Link>
      </div>
    </div>
  );
}
export default Navbar;
