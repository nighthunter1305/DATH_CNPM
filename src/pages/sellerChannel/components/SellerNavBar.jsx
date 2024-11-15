import React from "react";
import styles from "./SellerNavBar.module.css";
import { Icon } from "@iconify/react";

function SellerNavbar() {
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
          <p className={styles.title}>Kênh Người Bán</p>
        </button>
      </div>
    </div>
  );
}
export default SellerNavbar;
