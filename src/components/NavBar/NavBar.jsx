import React from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/images/trolley.png";
import bell from "../../assets/images/bell.png";
import email from "../../assets/images/email.png";
import grocery from "../../assets/images/grocery-store.png";

function Navbar() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <button
          className={styles.logoButton}
          onClick={() => window.location.reload()}
        >
          {/* eslint-disable-next-line */}
          <a href="#">
            <img src={logo} alt="Logo" className={styles.logoImage} />
          </a>{" "}
          CleanFoods
        </button>
      </div>

      <div className={styles.searchBar}>
        <input type="text" placeholder="Tìm kiếm" />
        <button>🔎</button>
      </div>

      <div className={styles.userOptions}>
        <div className={styles.notificationIcon}>
          {/* eslint-disable-next-line */}
          <a href="#">
            <img
              src={bell}
              alt="notification"
              className={styles.notificationIcon}
            />
            <span className={styles.notificationCount}>3</span>
          </a>
        </div>

        <div className={styles.messageIcon}>
          {/* eslint-disable-next-line */}
          <a href="#">
            <img src={email} alt="message" className={styles.messageIcon} />
            <span className={styles.messageCount}>5</span>
          </a>
        </div>

        <div className={styles.cart}>
          {/* eslint-disable-next-line */}
          <a href="#">
            <img src={grocery} alt="cart" className={styles.cartIcon} />
          </a>
          <span className={styles.cartCount}>10</span>
        </div>
        {/* eslint-disable-next-line */}
        <a href="#">Đăng nhập</a>
        {/* eslint-disable-next-line */}
        <a href="#">Đăng ký</a>
      </div>
    </div>
  );
}
export default Navbar;
