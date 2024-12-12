import CartSummary from "../../components/CartSummary/CartSummary";
import ModalBox from "../../components/ModalBox/ModalBox";
import styles from "./Cart.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import EmptyCart from "../../components/EmptyCart/EmptyCart";
import ProductInfo from "../../components/ProductInfo/ProductInfo";
import { useProducts } from "../../contexts/ProductContext";
import { decreaseVoucherQuantity, payByZalo } from '../../apis/postAPIs';
import { getCoupons, getUserData, totalprice } from '../../apis/getAPIs';
import { getProductsInCartAPI } from "../../apis/postAPIs";
import { updateQuantityAPI } from "../../apis/putAPIs";
import { removeProductAPI } from "../../apis/deleteAPIs";

function Cart() {
  const [user, setUser] = useState(null);
  const { cart, updateCart } = useProducts();
  const [products, setProducts] = useState(cart);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [total, setTotal] = useState(0);
  const [vouchers, setVouchers] = useState([]);
  const [selectedVoucher, setSelectedVoucher] = useState({});
  const [appliedVoucher, setAppliedVoucher] = useState({});

  useEffect(() => {

    const checkLoginStatus = () => {
      const isLoggedIn = !!sessionStorage.getItem("isLoggedIn");

      if (isLoggedIn) {
        const fetchUserData = async () => {
          try {
            const response = await getUserData();
            setUser(response);

            const fetchCart = async () => {
              const cartResponse = await getProductsInCartAPI(response.id);
              setProducts(cartResponse.data || []);
            };

            fetchCart();

            const fetchTotalPrice = async () => {
              const totalResponse = await totalprice(response.id);
              setTotal(totalResponse.total || 0);
            };

            fetchTotalPrice();
          } catch (error) {
            console.error("Error fetching user data:", error);
          }
        };
        fetchUserData();
      } else {
        setProducts([]);
      }
    };

    checkLoginStatus();
  }, []);

  useEffect(() => {
    const fetchCoupons = async () => {
      const response = await getCoupons();
      const availableCoupons = response.filter(coupon => coupon?.quantity > 0)
      setVouchers(availableCoupons);
    }

    fetchCoupons();
  }, [])

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleQuantityChange = async (id, newQuantity) => {
    try {
      const response = await updateQuantityAPI(user?.id, id, newQuantity);
      if (response) {
        setProducts((prevProducts) =>
          prevProducts.map((product) =>
            product.id === id ? { ...product, quantity: newQuantity } : product
          )
        );
      } else {
        console.error("Failed to update quantity:", response.data);
      }
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };

  useEffect(() => {
    updateCart(products);
  }, [products, updateCart]);

  const handleRemove = async (id) => {
    try {
      const response = await removeProductAPI(user?.id, id);

      console.log(response);
      if (response) {
        setProducts((prevProducts) =>
          prevProducts.filter((product) => product.id !== id)
        );
      } else {
        console.error("Failed to remove product:", response.data);
      }
    } catch (error) {
      console.error("Error removing product:", error);
    }
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

  const handleClickVoucher = (index) => {
    setSelectedVoucher(vouchers[index]);
  };

  const handleApplyVoucher = () => {
    if (selectedVoucher) {
      setAppliedVoucher(selectedVoucher); 
      setIsModalOpen(false);
    }
  };

  const shippingFee = 30000;

  const handleCheckout = async (amount) => {
    // tạm thời code cứng call api zalo pay trong hàm này
    const chosenProducts = products.filter(product => product?.checked === true);
    if (chosenProducts.length === 0) {
      alert('Vui lòng chọn ít nhất 1 sản phẩm');
      return;
    }
    
    const res = await payByZalo(amount, chosenProducts, user.id);
    if (!isEmpty(appliedVoucher)) {
      await decreaseVoucherQuantity(appliedVoucher);
    }

    if (res.return_code === 1) {
      window.location.href = res.order_url;
    }
  };

  function isEmpty(obj) {
    for (const prop in obj) {
      if (Object.hasOwn(obj, prop)) {
        return false;
      }
    }
    return true;
  }

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
                <span className="material-symbols-rounded">
                  confirmation_number
                </span>
              </div>
              <div className={styles.voucher}>{!isEmpty(appliedVoucher) ? `Mã áp dụng: ${appliedVoucher.code}` : 'GreenFood voucher'}</div>
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
                  value={selectedVoucher.code}
                />
                <button className={styles.applyButton} onClick={handleApplyVoucher}>ÁP DỤNG</button>
              </div>
              <div className={styles.voucherList}>
                {vouchers.map((voucher, index) => (
                  <div key={voucher.id} className={styles.voucherItem} onClick={() => { handleClickVoucher(index) }} style={{ cursor: "pointer" }}>
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
            totalPrice={total}
            voucher={appliedVoucher}
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
