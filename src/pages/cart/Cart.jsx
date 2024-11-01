import Navbar from "../../components/NavBar/NavBar";
import CartSummary from "../../components/CartSummary/CartSummary";
import styles from "./Cart.module.css";
import { Link } from "react-router-dom";
import strawberry from "../../assets/images/strawberry.jpg";
import papaya from "../../assets/images/papaya.jpg";
import corn from "../../assets/images/corn.jpg";

import ProductDetail from "../../components/ProductDetail/ProductDetail";
import { useState } from "react";

const initialCart = [
  {
    id: 1,
    name: "Dâu tây Jumbo Rainer",
    image: strawberry,
    price: 100000,
    quantity: 1,
  },
  {
    id: 2,
    name: "Đu đủ nhiệt đới",
    image: papaya,
    price: 121000,
    quantity: 3,
  },
  {
    id: 3,
    name: "Ngô hữu cơ",
    image: corn,
    price: 56000,
    quantity: 4,
  },
];

function Cart() {
  const [products, setProducts] = useState(initialCart);

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

  const totalPrice = products.reduce(
    (total, product) => total + product.price * product.quantity,
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

      <section className={styles.product}>
        <div className={styles.productInfo}>
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
            onQuantityChange={(e) =>
              handleQuantityChange(product.id, parseInt(e.target.value, 10))
            }
            onRemove={() => handleRemove(product.id)}
          />
        ))}
      </section>
      <section className={styles.coupon}>
        <input
          type="text"
          className={styles.couponCode}
          placeholder="Nhập mã giảm giá"
        />
        <button className={styles.button}>Áp mã</button>
      </section>
      <CartSummary
        totalPrice={totalPrice}
        onCheckout={handleCheckout}
        shippingFee={shippingFee}
        products={products}
      />
    </div>
  );
}

export default Cart;
