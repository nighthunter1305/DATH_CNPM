import React from "react";
import styles from "./SellerNavBar.module.css";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

function SellerNavbar({ title }) {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <button
          className={styles.logoButton}
          onClick={() => window.location.reload()}
        >
          {/* eslint-disable-next-line */}
          <a href="#">
            <Icon className={styles.logo} icon="noto:leafy-green" />
          </a>{" "}
          <p className={styles.shopName}>GreenFood</p>
          <p className={styles.title}>{title}</p>
        </button>
      </div>
      <div className={styles.authLinks}>
        {/* eslint-disable-next-line */}
        <Link to="/login">Đăng nhập</Link>
        {/* eslint-disable-next-line */}
        <Link to="/signup">Đăng ký</Link>
      </div>
    </div>
  );
}
export default SellerNavbar;
