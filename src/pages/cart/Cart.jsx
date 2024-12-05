import CartSummary from "../../components/CartSummary/CartSummary";
import ModalBox from "../../components/ModalBox/ModalBox";

import styles from "./Cart.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import EmptyCart from "../../components/EmptyCart/EmptyCart";
import { mockVouchers } from "../../apis/mock-data";
import ProductInfo from "../../components/ProductInfo/ProductInfo";
import { useProducts } from "../../contexts/ProductContext";
import { payByZalo } from '../../apis/postAPIs';
import { getUserData } from '../../apis/getAPIs';

function Cart() {
  const [user, setUser] = useState(null);
  const { cart, updateCart } = useProducts();
  const [products, setProducts] = useState(cart);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await getUserData();
        setUser(data);

      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, []);

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

  useEffect(() => {
    updateCart(products);
  }, [products, updateCart]);

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

  const handleCheckout = async (amount) => {
    // tạm thời code cứng call api zalo pay trong hàm này
    const chosenProducts = products.filter(product => product?.checked === true);

    const res = await payByZalo(amount, chosenProducts, user.id);
    
    if (res.return_code === 1) {
      window.location.href = res.order_url;
    }
    
  };
  return (
    <div className={styles.wrapper}>
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
            {(() => {
              const shopSet = new Set();
              return products.map((product) => {
                const isFirstProductOfShop = !shopSet.has(product.shopName);
                if (isFirstProductOfShop) {
                  shopSet.add(product.shopName);
                }
                return (
                  <ProductInfo
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
                    isShopChecked={products
                      .filter((item) => item.shopId === product.shopId)
                      .every((item) => item.checked)}
                    showShopInfo={isFirstProductOfShop}
                  />
                );
              });
            })()}
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
              vouchers={mockVouchers}
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
                {mockVouchers.map((voucher) => (
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
            onCheckout={() => handleCheckout(totalPrice + shippingFee)}
            shippingFee={shippingFee}
            products={products}
          />
        </>
      )}
    </div>
  );
}

export default Cart;
