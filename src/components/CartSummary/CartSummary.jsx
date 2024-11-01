import React from "react";
import styles from "./CartSummary.module.css";

const CartSummary = ({ products, totalPrice, shippingFee, onCheckout }) => {
  const formattedTotal = totalPrice.toLocaleString();
  const formattedShipping = shippingFee.toLocaleString();
  const finalTotal = (totalPrice + shippingFee).toLocaleString();

  return (
    <div className={styles.cartSummary}>
      <h3>Chi tiết hóa đơn</h3>
      <div className={styles.summaryItems}>
        {products.map((product) => (
          <div key={product.id} className={styles.summaryItem}>
            <span>
              {product.name} x {product.quantity}
            </span>
            <span>
              {(product.price * product.quantity).toLocaleString()} VNĐ
            </span>
          </div>
        ))}
      </div>
      <div className={styles.summaryRow}>
        <span>Tạm tính:</span>
        <span>{formattedTotal} VNĐ</span>
      </div>
      <div className={styles.summaryRow}>
        <span>Phí vận chuyển:</span>
        <span>{formattedShipping} VNĐ</span>
      </div>
      <div className={styles.summaryTotal}>
        <span>Tổng cộng:</span>
        <span>{finalTotal} VNĐ</span>
      </div>
      <button className={styles.checkoutButton} onClick={onCheckout}>
        Tiến hành thanh toán
      </button>
    </div>
  );
};

export default CartSummary;
