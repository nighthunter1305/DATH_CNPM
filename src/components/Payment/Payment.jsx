import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Payment.scss";
import styles from "./Payment.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { useProducts } from "../../contexts/ProductContext";
import { getUserData } from "../../apis/getAPIs";
import { getUserAddress } from "../../apis/getAPIs";
import { payByCash, payByZalo, storeAddress } from "../../apis/postAPIs";
import { deleteAddress } from "../../apis/deleteAPIs";

const shippingFee = 30000;

const Payment = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const { id } = useParams();
  const { products } = useProducts();
  const product = products.find((prod) => prod.id.toString() === id);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNewAddressFormOpen, setIsNewAddressFormOpen] = useState(false);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newstreet, setNewstreet] = useState("");
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState("");
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedcity, setSelectedcity] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selecteddistrict, setSelecteddistrict] = useState("");
  const [selectedWard, setSelectedWard] = useState("");
  const [selectedtown, setSelectedtown] = useState("");
  const [isDefault, setIsDefault] = useState(false);
  const [editingAddressIndex, setEditingAddressIndex] = useState(null);
  const [selectedFullAddress, setSelectedFullAddress] = useState(null);

  const host = "https://provinces.open-api.vn/api/";

  useEffect(() => {
    axios.get(host + "?depth=1").then((response) => {
      setProvinces(response.data);
    });
  }, []);

  useEffect(() => {
    const defaultAddress = addresses.find((address) => address.isDefault);
    if (defaultAddress) {
      setSelectedAddress(defaultAddress);
      setSelectedFullAddress(defaultAddress);
    }
  }, [addresses]);

  // set các giá trị khác về rỗng nếu chưa chọn tỉnh

  const handleProvinceChange = async (e) => {
    const city_code = e.target.value;

    if (!city_code) {
      setSelectedProvince(""); // tỉnh
      setSelectedcity("");
      setDistricts([]);
      setSelectedDistrict(""); // quận
      setSelecteddistrict("");
      setWards([]); // huyện
      setSelectedWard("");
      setSelectedtown("");

      return;
    }

    // nếu đã chọn tỉnh -> fetch data quận của tỉnh đó
    try {
      const response = await axios.get(`${host}p/${city_code}?depth=2`);
      const selectedProv = provinces.find(
        (p) => p.code === parseInt(city_code)
      );

      setSelectedProvince(city_code);
      setSelectedcity(selectedProv ? selectedProv.name : "");
      setDistricts(response.data.districts);

      setSelectedDistrict("");
      setSelecteddistrict("");
      setWards([]);
      setSelectedWard("");
      setSelectedtown("");
    } catch (error) {
      console.error("Error fetching districts:", error);
    }
  };

  const handleDistrictChange = async (e) => {
    const district_code = e.target.value;

    if (!district_code) {
      setSelectedDistrict("");
      setSelecteddistrict("");
      setWards([]);
      setSelectedWard("");
      setSelectedtown("");
      return;
    }

    try {
      const response = await axios.get(`${host}d/${district_code}?depth=2`);
      const selectedDist = districts.find(
        (d) => d.code === parseInt(district_code)
      );

      setSelectedDistrict(district_code);
      setSelecteddistrict(selectedDist ? selectedDist.name : "");
      setWards(response.data.wards);

      // Reset ward
      setSelectedWard("");
      setSelectedtown("");
    } catch (error) {
      console.error("Error fetching wards:", error);
    }
  };

  const handleWardChange = (e) => {
    const town_code = e.target.value;
    if (!town_code) {
      setSelectedWard("");
      setSelectedtown("");
      return;
    }

    const selectedW = wards.find((w) => w.code === parseInt(town_code));
    setSelectedWard(town_code);
    setSelectedtown(selectedW ? selectedW.name : "");
  };

  const handleSaveAddress = async () => {
    let errorMessage = "";

    if (!newName) {
      errorMessage += "Vui lòng nhập họ tên.\n";
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!newPhone || !phoneRegex.test(newPhone)) {
      errorMessage += "Vui lòng nhập số điện thoại hợp lệ (10 chữ số).\n";
    }

    if (!newstreet) {
      errorMessage += "Vui lòng nhập địa chỉ chi tiết.\n";
    }

    if (errorMessage) {
      alert(errorMessage);
      return;
    }

    const fullAddress = {
      name: newName,
      phone: newPhone,
      street: newstreet,
      isDefault: isDefault,
      city_code: selectedProvince,
      district_code: selectedDistrict,
      town_code: selectedWard,
      city: selectedcity,
      district: selecteddistrict,
      town: selectedtown,
    };

    let updatedAddresses = [...addresses];

    if (isDefault) {
      updatedAddresses = updatedAddresses.map((address) => ({
        ...address,
        isDefault: false,
      }));
    }

    if (editingAddressIndex !== null) {
      updatedAddresses[editingAddressIndex] = fullAddress;
    } else {
      updatedAddresses.push(fullAddress);
    }

    setAddresses(updatedAddresses);
    setSelectedFullAddress(fullAddress);
    if (isDefault) {
      setSelectedAddress(fullAddress);
    } else if (editingAddressIndex === null) {
      setSelectedAddress(fullAddress);
    }

    const res = await storeAddress(fullAddress);

    console.log(res);

    // Reset form
    resetForm();
    setIsNewAddressFormOpen(false);
  };

  const resetForm = () => {
    setNewName("");
    setNewPhone("");
    setNewstreet("");
    setSelectedProvince("");
    setSelectedcity("");
    setSelectedDistrict("");
    setSelecteddistrict("");
    setSelectedWard("");
    setSelectedtown("");
    setIsDefault(false);
    setEditingAddressIndex(null);
  };

  const handleOpenNewAddressForm = (index = null) => {
    if (index !== null) {
      const address = addresses[index];
      setNewName(address.name);
      setNewPhone(address.phone);
      setNewstreet(address.street);
      setSelectedProvince(address.city_code);
      setSelectedcity(address.city);
      setSelectedDistrict(address.district_code);
      setSelecteddistrict(address.district);
      setSelectedWard(address.town_code);
      setSelectedtown(address.town);
      setIsDefault(address.isDefault);
      setEditingAddressIndex(index);

      // Fetch districts and wards for editing
      axios
        .get(`${host}p/${address.city_code}?depth=2`)
        .then((response) => {
          setDistricts(response.data.districts);
          return axios.get(`${host}d/${address.district_code}?depth=2`);
        })
        .then((response) => {
          setWards(response.data.wards);
        })
        .catch((error) => {
          console.error("Error fetching address data:", error);
        });
    } else {
      resetForm();
    }
    setIsNewAddressFormOpen(true);
  };

  const handleDeleteAddress = async (index) => {
    const res = await deleteAddress(addresses[index]);

    if (res.status) {
      const updatedAddresses = addresses.filter((_, i) => i !== index);
      setAddresses(updatedAddresses);
    }
  };

  useEffect(() => {
    const isLoggedIn = !!sessionStorage.getItem("isLoggedIn");
    if (isLoggedIn) {
      const fetchUser = async () => {
        try {
          const data = await getUserData();
          const address = await getUserAddress();

          setUser(data);
          setAddresses(address);
        } catch (error) {
          console.error("Error fetching user:", error);
        }
      };

      fetchUser();
    } else {
      navigate("/login");
    }
  }, []);

  if (!user) {
    return (
      <div className={styles.spinnerContainer}>
        <div className={styles.spinner}></div>
      </div>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (selectedPaymentMethod === "") {
      alert("Vui lòng chọn phương thức thanh toán.");
      return;
    }

    const totalPrice =
      selectedPaymentMethod === "cod"
        ? product.price + shippingFee
        : product.price;

    // const paymentData = {
    //   userId: user?.id,
    //   productId: [product.id],
    //   amount: totalPrice,
    // };
    const chosenProduct = {
      ...product,
      quantity: 1,
    };

    if (selectedPaymentMethod === "cod") {
      const res = await payByCash(totalPrice, [chosenProduct], user?.id);

      if (res.status === 200) {
        navigate("/status");
      } else {
        alert("Thanh toán thất bại! Vui lòng thử lại.");
      }
    } else {
      try {
        const res = await payByZalo(totalPrice, [chosenProduct], user?.id);

        if (res.return_code === 1) {
          window.location.href = res.order_url;
        } else {
          alert("Thanh toán thất bại! Vui lòng thử lại.");
        }
      } catch (error) {
        console.error("Error processing payment:", error);
        alert("Có lỗi xảy ra, vui lòng thử lại sau.");
      }
    }
  };

  return (
    <>
      <h2>Thanh toán</h2>
      <div className="payment-pro">
        <div className="cus-in4">
          <label>
            <FaLocationDot size={24} /> Địa chỉ nhận hàng
          </label>
          <div className="cus-in4-detail">
            {selectedAddress ? (
              <>
                <span className="np">
                  {selectedAddress.name} | {selectedAddress.phone}
                </span>
                {/* <span>
                  Địa chỉ: {selectedAddress.street},{" "}
                  {selectedAddress.address}
                </span> */}
                <span>
                  Địa chỉ: {selectedAddress.street},{" "}
                  {`${selectedAddress.town}, ${selectedAddress.district}, ${selectedAddress.city}`}
                </span>
              </>
            ) : (
              <span>Chưa chọn địa chỉ mặc định</span>
            )}
            <button onClick={() => setIsModalOpen(true)}>Thay đổi</button>
          </div>
        </div>

        {isModalOpen && (
          <div className="modal">
            <div className="modal-content">
              <h3>Địa chỉ của tôi</h3>
              <div className="address-list">
                {addresses.map((address, index) => (
                  <div key={index} className="address-item">
                    <div className="address-item1">
                      <div className="address-info">
                        <input
                          type="radio"
                          id={`address-${index}`}
                          name="address"
                          checked={selectedFullAddress === address}
                          onChange={() => {
                            setSelectedFullAddress(address);
                            setSelectedAddress(address);
                          }}
                        />
                        <div>
                          {address.name} | {address.phone}
                        </div>
                      </div>
                      <button
                        className="change"
                        onClick={() => handleDeleteAddress(index)}
                      >
                        Xóa
                      </button>
                    </div>
                    <div className="address-item2">
                      <div>{address.street}</div>
                      <div>{`${address.town}, ${address.district}, ${address.city}`}</div>
                      {Boolean(address.isDefault) && (
                        <div className="default-badge">Mặc định</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="modal-button">
                <button onClick={() => handleOpenNewAddressForm()}>
                  Thêm địa chỉ mới
                </button>
                <button onClick={() => setIsModalOpen(false)}>Thoát</button>
              </div>
            </div>
          </div>
        )}

        {isNewAddressFormOpen && (
          <div className="modal">
            <div className="modal-content">
              <h3>
                {editingAddressIndex !== null
                  ? "Cập nhật địa chỉ"
                  : "Thêm địa chỉ mới"}
              </h3>
              <div className="name-phone">
                <input
                  type="text"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  placeholder="Nhập họ tên"
                />
                <input
                  type="text"
                  value={newPhone}
                  onChange={(e) => setNewPhone(e.target.value)}
                  placeholder="Nhập số điện thoại"
                />
              </div>
              <div className="new-loca">
                <select
                  value={selectedProvince}
                  onChange={handleProvinceChange}
                >
                  <option value="">Chọn tỉnh</option>
                  {provinces.map((province) => (
                    <option key={province.code} value={province.code}>
                      {province.name}
                    </option>
                  ))}
                </select>

                <select
                  value={selectedDistrict}
                  onChange={handleDistrictChange}
                  disabled={!selectedProvince}
                >
                  <option value="">Chọn huyện</option>
                  {districts.map((district) => (
                    <option key={district.code} value={district.code}>
                      {district.name}
                    </option>
                  ))}
                </select>

                <select
                  value={selectedWard}
                  onChange={handleWardChange}
                  disabled={!selectedDistrict}
                >
                  <option value="">Chọn xã</option>
                  {wards.map((ward) => (
                    <option key={ward.code} value={ward.code}>
                      {ward.name}
                    </option>
                  ))}
                </select>
              </div>

              <input
                type="text"
                className="address-detail"
                value={newstreet}
                onChange={(e) => setNewstreet(e.target.value)}
                placeholder="Nhập địa chỉ chi tiết"
              />

              <div className="set-loca-default">
                <input
                  type="checkbox"
                  id="default"
                  checked={isDefault}
                  onChange={(e) => setIsDefault(e.target.checked)}
                />
                <label htmlFor="default">Đặt làm địa chỉ mặc định</label>
              </div>

              <div className="modal-button">
                <button onClick={handleSaveAddress}>
                  {editingAddressIndex !== null ? "Cập nhật" : "Lưu"}
                </button>
                <button
                  onClick={() => {
                    resetForm();
                    setIsNewAddressFormOpen(false);
                  }}
                >
                  Hủy
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Product Section */}
      {product && (
        <section className={styles.product}>
          <div className={styles.productInfo}>
            <div className="pay-bar">Sản phẩm</div>
            <div>Đơn giá</div>
            <div>Số lượng</div>
            <div>Số tiền</div>
          </div>
          <div className={styles.productInfo}>
            <div className={styles.productName}>
              <img
                src={product.image}
                alt={`Hình ảnh ${product.name}`}
                className={styles.productImage}
              />
              <span>{product.name}</span>
            </div>
            <div className={styles.productPrice}>{product.price} VNĐ</div>
            <div className={styles.productQuantity}>
              <span>1</span>
            </div>
            <div className={styles.productTotal}>{product.price * 1} VNĐ</div>
          </div>
        </section>
      )}
      {/* Payment Method Section */}
      <section className={styles.productInfo}>
        <div className="method">Phương thức thanh toán</div>
        <div className="paycod">
          <input
            type="radio"
            id="cod"
            name="paymentMethod"
            value="cod"
            checked={selectedPaymentMethod === "cod"}
            onChange={() => setSelectedPaymentMethod("cod")}
          />
          <label htmlFor="cod">Khi nhận hàng</label>
        </div>
        <div className="payzalopay">
          <input
            type="radio"
            id="zalopay"
            name="paymentMethod"
            value="zalopay"
            checked={selectedPaymentMethod === "zalopay"}
            onChange={() => setSelectedPaymentMethod("zalopay")}
          />
          <label htmlFor="zalopay">Qua ZaloPay</label>
        </div>
      </section>
      <div className="payment-method">
        {selectedPaymentMethod === "cod" && (
          <div className="tab-cod">
            <p>Thanh toán khi nhận hàng (COD), phí thu hộ 0.</p>
          </div>
        )}
        {selectedPaymentMethod === "zalopay" && (
          <div className="tab-zalopay">
            <p>Thanh toán qua ZaloPay, phí thu hộ 0.</p>
          </div>
        )}
      </div>

      <div className="bill">
        <h3>Thông tin đơn hàng</h3>
        <div className="bill-info">
          <div>
            <span>Tổng tiền hàng : </span>
            <span>{product.price} VNĐ</span>
          </div>
          {selectedPaymentMethod === "cod" && (
            <div>
              <span>Phí vận chuyển : </span>
              <span>{shippingFee} VNĐ</span>
            </div>
          )}

          <div>
            <span>Tổng cộng : </span>
            <span>
              {selectedPaymentMethod === "cod"
                ? product.price + shippingFee
                : product.price}
              VNĐ
            </span>
          </div>
          <button type="submit" onClick={handleSubmit}>
            Mua hàng
          </button>
        </div>
      </div>
    </>
  );
};

export default Payment;
