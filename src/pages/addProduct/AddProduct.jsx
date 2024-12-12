import { useEffect, useState } from "react";
import SellerNavbar from "../seller/components/SellerNavBar";
import styles from "./AddProduct.module.css";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import { createProduct } from '../../apis/postAPIs';
import { getUserData } from '../../apis/getAPIs';

const maxCharInput = 50;
const minCharText = 10;
const maxCharText = 100;

function AddProduct() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [nameValue, setNameValue] = useState("");
  const [descValue, setDescValue] = useState("");
  const [file, setFile] = useState(null);
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

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

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleNameChange = (event) => {
    setNameValue(event.target.value);
  };

  const handleDescChange = (event) => {
    setDescValue(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleStockChange = (event) => {
    setStock(event.target.value);
  };

  // const newProduct = {
  //   file: file,
  //   name: nameValue,
  //   desription: descValue,
  //   quantity: stock,
  //   price: price,
  // };

  const isProductNameValid = nameValue.length >= 10 && nameValue.length <= 50;
  const isDescriptionValid = descValue.length >= minCharText;
  const isFormValid =
    isProductNameValid && isDescriptionValid && file && price && stock;

  const handleCancel = (event) => {
    event.preventDefault();
    navigate("/seller");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!isFormValid) {
      setErrorMessage("Vui lòng điền đầy đủ và hợp lệ thông tin.");
      return;
    }

    const formData = new FormData();

    formData.append('image', file);
    formData.append('name', nameValue);
    formData.append('description', descValue);
    formData.append('quantity', stock);
    formData.append('price', price);
    formData.append('sellerId', user.id);

    const res = await createProduct(formData);

    if (res.status === 201) {

      alert('Thêm sản phẩm thành công!');
      navigate('/seller');
    }
  };

  return (
    <>
      <SellerNavbar title={"Thêm 1 sản phẩm mới"} />
      <div className={styles.container}>
        <div className={styles.suggestionPanel}>
          <div className={styles.suggestionTitle}>
            <p>Gợi ý điền Thông tin</p>
          </div>
          <div className={styles.taskList}>
            <div className={styles.taskItem}>
              <Icon
                icon="teenyicons:tick-circle-solid"
                className={file ? styles.check : styles.uncheck}
              />
              <p>Thêm 1 hình ảnh</p>
            </div>

            <div className={styles.taskItem}>
              <Icon
                icon="teenyicons:tick-circle-solid"
                className={isProductNameValid ? styles.check : styles.uncheck}
              />

              <p>Tên sản phẩm có ít nhất 10~50 kí tự</p>
            </div>
            <div className={styles.taskItem}>
              <Icon
                icon="teenyicons:tick-circle-solid"
                className={isDescriptionValid ? styles.check : styles.uncheck}
              />
              <p>Thêm ít nhất 10 kí tự trong mô tả sản phẩm</p>
            </div>
          </div>
        </div>
        <div className={styles.formPanel}>
          <p className={styles.basicForm}>Thông tin cơ bản</p>
          <div className={styles.imageSection}>
            <div className={styles.label}>
              <span>*</span>
              <p>Hình ảnh sản phẩm</p>
            </div>
            <div className={styles.imageWrapper}>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className={styles.fileInput}
              />
            </div>
          </div>

          <div className={styles.productSection}>
            <div className={styles.label}>
              <span>*</span>
              <p>Tên sản phẩm</p>
            </div>
            <div className={styles.productName}>
              <input
                className={styles.nameInput}
                type="text"
                placeholder="Tên sản phẩm"
                value={nameValue}
                maxLength={maxCharInput}
                onChange={handleNameChange}
              />
              <span className={styles.inputCounter}>
                {nameValue.length}/{maxCharInput}
              </span>
            </div>
          </div>
          <div className={styles.productSection}>
            <div className={styles.label}>
              <span>*</span>
              <p>Mô tả sản phẩm </p>
            </div>
            <div className={styles.productName}>
              <textarea
                className={styles.nameText}
                maxLength={maxCharText}
                value={descValue}
                onChange={handleDescChange}
              />
              <span className={styles.textCounter}>
                {descValue.length}/{maxCharText}
              </span>
              {descValue.length > 0 && descValue.length < minCharText && (
                <p className={styles.warning}>
                  Mô tả phải có ít nhất {minCharText} ký tự.
                </p>
              )}
            </div>
          </div>
          <div className={styles.divider}></div>

          <p className={styles.sellForm}>Thông tin bán hàng</p>
          <div className={styles.sellContainer}>
            <div className={styles.sellWrapper}>
              <div className={styles.label}>
                <span>*</span>
                <p>Giá bán (VNĐ)</p>
              </div>
              <div className={styles.productPrice}>
                <input
                  className={styles.priceInput}
                  type="text"
                  placeholder="Nhập vào"
                  value={price}
                  onChange={handlePriceChange}
                />
              </div>
            </div>
            <div className={styles.sellWrapper}>
              <div className={styles.label}>
                <span>*</span>
                <p>Số lượng trong kho</p>
              </div>
              <div className={styles.productPrice}>
                <input
                  className={styles.priceInput}
                  type="text"
                  placeholder="Nhập vào"
                  value={stock}
                  onChange={handleStockChange}
                />
              </div>
            </div>
          </div>
          {errorMessage && <p className={styles.error}>{errorMessage}</p>}
          <div className={styles.actions}>
            <button onClick={handleCancel} className={styles.cancelButton}>
              Huỷ
            </button>
            <button
              type="submit"
              onClick={handleSubmit}
              className={styles.saveButton}
            >
              Lưu
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddProduct;