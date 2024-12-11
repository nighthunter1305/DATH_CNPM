import { Link } from "react-router-dom";
import styles from "./EmptyProduct.module.css";
import { Icon } from "@iconify/react";

function EmptyProduct() {
  return (
    <div className={styles.emptyProduct}>
      <Icon icon="fluent-emoji:bento-box" className={styles.box} />
      <p>Bạn chưa thêm sản phẩm nào</p>
      <Link to="/seller/add-product" className={styles.addNowButton}>
        Thêm sản phẩm ngay
      </Link>
    </div>
  );
}

export default EmptyProduct;
