import Navbar from "../../components/Navbar/Navbar";
import CartSummary from "../../components/CartSummary/CartSummary";
import ModalBox from "../../components/ModalBox/ModalBox";
import ProductDetail from "../../components/ProductDetail/ProductDetail";

import styles from "./Cart.module.css";
import strawberry from "../../assets/images/strawberry.jpg";
import papaya from "../../assets/images/papaya.jpg";
import corn from "../../assets/images/corn.jpg";

import { Link } from "react-router-dom";
import { useState } from "react";
import EmptyCart from "../../components/EmptyCart/EmptyCart";

const initialCart = [
  {
    id: 1,
    name: "Dâu tây Jumbo Rainer",
    image: strawberry,
    price: 100000,
    quantity: 1,
    checked: false,
    shopName: "Dalat FreshFruit Store",
    category: "Yêu thích",
  },
  {
    id: 2,
    name: "Đu đủ nhiệt đới",
    image: papaya,
    price: 121000,
    quantity: 3,
    checked: false,
    shopName: "Bach Hoa Xanh Market",
    category: "Mall",
  },
  {
    id: 3,
    name: "Ngô hữu cơ",
    image: corn,
    price: 56000,
    quantity: 4,
    checked: false,
    shopName: "Coop Mart",
    category: "Hot sale",
  },
];

const vouchers = [
  { id: 1, code: "GREEN20", description: "Giảm 20k cho đơn từ 100k" },
  {
    id: 2,
    code: "FREESHIP",
    description: "Miễn phí vận chuyển cho đơn từ 200k",
  },
  { id: 3, code: "SALE50", description: "Giảm 50k cho đơn từ 500k" },
  { id: 4, code: "SUMMER10", description: "Giảm 10% cho đơn hàng mùa hè" },
  { id: 5, code: "WELCOME15", description: "Giảm 15k cho khách hàng mới" },
  {
    id: 6,
    code: "BUY2GET1",
    description: "Mua 2 tặng 1 cho sản phẩm chọn lọc",
  },
  { id: 7, code: "FLASHSALE", description: "Giảm 30% trong 24 giờ tới" },
  {
    id: 8,
    code: "HEALTHY30",
    description: "Giảm 30k cho đơn hàng thực phẩm sạch",
  },
  {
    id: 9,
    code: "CHIPSLIFE",
    description: "Giảm 20% cho tất cả sản phẩm snack",
  },
];

function Cart() {
  const [products, setProducts] = useState(initialCart);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleQuantityChange = (id, newQuantity) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, quantity: newQuantity } : product
      )
    );
  };

  const handleRemove = (id) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  };

  const handleCheck = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, checked: !product.checked } : product
      )
    );
  };

  const handleShopCheck = (shopName) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.shopName === shopName
          ? { ...product, checked: !product.checked }
          : product
      )
    );
  };

  const handleCheckAll = (event) => {
    const isChecked = event.target.checked;
    setProducts((prevProducts) =>
      prevProducts.map((product) => ({ ...product, checked: isChecked }))
    );
  };

  const totalPrice = products.reduce(
    (total, product) =>
      total + (product.checked ? product.price * product.quantity : 0),
    0
  );
  const shippingFee = 30000;

  const handleCheckout = () => {
    alert("Thanh toán thành công!");
  };
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <section className={styles.container}>
        <h2 className={styles.title}>GIỎ HÀNG</h2>
        <p className={styles.nav}>
          <Link to="/">Home</Link> / Giỏ hàng
        </p>
      </section>

      {products.length === 0 ? (
        <EmptyCart />
      ) : (
        <>
          <section className={styles.product}>
            <div className={styles.productInfo}>
              <div>
                <input
                  type="checkbox"
                  onChange={handleCheckAll}
                  checked={products.every((product) => product.checked)}
                  className={styles.selectAllCheckbox}
                />
              </div>
              <div>Sản phẩm </div>
              <div>Đơn giá</div>
              <div>Số lượng</div>
              <div>Số tiền</div>
              <div>Thao tác</div>
            </div>
            {products.map((product) => (
              <ProductDetail
                key={product.id}
                image={product.image}
                name={product.name}
                price={product.price}
                quantity={product.quantity}
                checked={product.checked}
                onCheck={() => handleCheck(product.id)}
                onQuantityChange={(newQuantity) =>
                  handleQuantityChange(product.id, newQuantity)
                }
                onRemove={() => handleRemove(product.id)}
                shopName={product.shopName}
                category={product.category}
                onShopCheck={handleShopCheck}
                isShopChecked={products.some(
                  (item) => item.shopName === product.shopName && item.checked
                )}
              />
            ))}
          </section>
          <section className={styles.coupon}>
            <div className={styles.voucherGroup}>
              <div className={styles.icon}>
                <span class="material-symbols-rounded">
                  confirmation_number
                </span>
              </div>
              <div className={styles.voucher}>GreenFood voucher</div>
            </div>
            <button className={styles.voucherButton} onClick={handleOpenModal}>
              Chọn hoặc nhập mã
            </button>
            <ModalBox
              isOpen={isModalOpen}
              onClose={handleCloseModal}
              vouchers={vouchers}
            >
              <div className={styles.inputContainer}>
                <input
                  type="text"
                  placeholder="Mã GreenFood Voucher"
                  className={styles.input}
                />
                <button className={styles.applyButton}>ÁP DỤNG</button>
              </div>
              <div className={styles.voucherList}>
                {vouchers.map((voucher) => (
                  <div key={voucher.id} className={styles.voucherItem}>
                    <div className={styles.voucherCode}>{voucher.code}</div>
                    <div className={styles.voucherDescription}>
                      {voucher.description}
                    </div>
                  </div>
                ))}
              </div>
            </ModalBox>
          </section>
          <CartSummary
            totalPrice={totalPrice}
            onCheckout={handleCheckout}
            shippingFee={shippingFee}
            products={products}
          />
        </>
      )}
    </div>
  );
}

export default Cart;
