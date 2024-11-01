// src/components/ProductDetail/ProductDetail.jsx
import React from "react";
import styles from "./ProductDetail.module.css";

const ProductDetail = ({
  image,
  name,
  price,
  quantity = 1,
  onQuantityChange,
  onRemove,
}) => {
  const formattedPrice = price.toLocaleString();
  const formattedTotal = (price * quantity).toLocaleString();

  return (
    <div className={styles.productDetail}>
      <div className={styles.productName}>
        <img
          src={image}
          alt={`Hình ảnh ${name}`}
          className={styles.productImage}
        />
        <span>{name}</span>
      </div>
      <div className={styles.productPrice}>{formattedPrice} VNĐ</div>
      <div className={styles.productQuantity}>
        <input
          type="number"
          value={quantity}
          min="1"
          onChange={onQuantityChange}
          className={styles.quantityInput}
        />
      </div>
      <div className={styles.productTotal}>{formattedTotal} VNĐ</div>
      <div className={styles.productActions}>
        <button className={styles.actionButton} onClick={onRemove}>
          Xóa
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
