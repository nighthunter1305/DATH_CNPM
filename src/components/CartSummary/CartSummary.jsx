import React from "react";
import styles from "./CartSummary.module.css";

const CartSummary = ({ products, voucher, totalPrice, shippingFee, onCheckout }) => {
  function isEmpty(obj) {
    for (const prop in obj) {
      if (Object.hasOwn(obj, prop)) {
        return false;
      }
    }
    return true;
  }

  const selectedProducts = products.filter((product) => product.checked);
  const selectedProductsTotal = products.reduce(
    (total, product) =>
      total + (product.checked ? product.price * product.quantity : 0),
    0
  );
  const effectiveShippingFee = selectedProducts.length > 0 ? shippingFee : 0;
  let discount = 0;
  if (voucher?.code === 'FREESHIP') {
    discount = effectiveShippingFee;
  } else {
    discount = selectedProductsTotal * voucher?.discount_percent / 100;
  }

  const formattedTotal = selectedProductsTotal.toLocaleString();
  const formattedShipping = effectiveShippingFee.toLocaleString();
  const formattedDiscount = discount.toLocaleString();
  const finalTotal = (
    selectedProductsTotal + effectiveShippingFee - (discount ? discount : 0)
  ).toLocaleString();

  return (
    <div className={styles.cartSummary}>
      <h3>Chi tiết hóa đơn</h3>
      {selectedProducts.length > 0 ? (
        <div className={styles.summaryItems}>
          {selectedProducts.map((product) => (
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
      ) : (
        <div className={styles.noProductsMessage}>
          Bạn hiện chưa chọn sản phẩm nào.
        </div>
      )}
      <div className={styles.summaryRow}>
        <span>Tạm tính:</span>
        <span>{formattedTotal} VNĐ</span>
      </div>
      <div className={styles.summaryRow}>
        <span>Phí vận chuyển:</span>
        <span>{formattedShipping} VNĐ</span>
      </div>
      {!isEmpty(voucher) &&
        <div className={styles.summaryRow}>
          <span>Giảm giá:</span>
          <span>- {formattedDiscount} VNĐ</span>
        </div>}
      <div className={styles.summaryTotal}>
        <span>Tổng cộng:</span>
        <span>{finalTotal} VNĐ</span>
      </div>
      <button className={styles.checkoutButton} onClick={onCheckout}>
        Mua hàng
      </button>
    </div>
  );
};

export default CartSummary;
