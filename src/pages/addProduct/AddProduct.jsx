import { useState } from "react";
import SellerNavbar from "../sellerChannel/components/SellerNavBar";
import styles from "./AddProduct.module.css";
import { Icon } from "@iconify/react";

const maxCharInput = 120;
const minCharText = 100;
const maxCharText = 3000;

function AddProduct() {
  const [inputValue, setInputValue] = useState("");
  const [textValue, setTextValue] = useState("");
  const [brandSelected, setBrandSelected] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleTextChange = (event) => {
    setTextValue(event.target.value);
  };

  const handleBrandChange = (event) => {
    setBrandSelected(event.target.value !== "");
  };

  const isProductNameValid =
    inputValue.length >= 25 && inputValue.length <= 100;
  const isDescriptionValid = textValue.length >= minCharText;
  const isBrandValid = brandSelected;

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
                className={styles.uncheck}
              />
              <p>Thêm ít nhất 3 hình ảnh</p>
            </div>
            <div className={styles.taskItem}>
              <Icon
                icon="teenyicons:tick-circle-solid"
                className={styles.uncheck}
              />
              <p>Thêm video sản phẩm</p>
            </div>
            <div className={styles.taskItem}>
              <Icon
                icon="teenyicons:tick-circle-solid"
                className={isProductNameValid ? styles.check : styles.uncheck}
              />

              <p>Tên sản phẩm có ít nhất 25~100 kí tự</p>
            </div>
            <div className={styles.taskItem}>
              <Icon
                icon="teenyicons:tick-circle-solid"
                className={isDescriptionValid ? styles.check : styles.uncheck}
              />
              <p>Thêm ít nhất 100 kí tự hoặc 1 hình ảnh trong mô tả sản phẩm</p>
            </div>
            <div className={styles.taskItem}>
              <Icon
                icon="teenyicons:tick-circle-solid"
                className={isBrandValid ? styles.check : styles.uncheck}
              />
              <p>Thêm thương hiệu</p>
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

            <div className={styles.imageButton}>
              <Icon icon="mage:image-plus" className={styles.addIcon} />
              <p>Thêm hình ảnh (0/9)</p>
            </div>
            <div className={styles.imageDesc}>
              Tải lên hình ảnh 1:1. Những hình ảnh này sẽ được hiển thị khi xem
              chi tiết sản phẩm
            </div>
          </div>
          <div className={styles.imageSection}>
            <div className={styles.label}>
              <span>*</span>
              <p>Ảnh bìa</p>
            </div>

            <div className={styles.imageButton}>
              <Icon icon="mage:image-plus" className={styles.addIcon} />
              <p>(0/1)</p>
            </div>
            <div className={styles.imageDesc}>
              Tải lên hình ảnh 1:1. Ảnh bìa sẽ được hiển thị tại các trang Kết
              quả tìm kiếm, Gợi ý hôm nay,... Việc sử dụng ảnh bìa đẹp sẽ thu
              hút thêm lượt truy cập vào sản phẩm của bạn
            </div>
          </div>
          <div className={styles.imageSection}>
            <div className={styles.label}>
              <span>*</span>
              <p>Video sản phẩm</p>
            </div>

            <div className={styles.imageButton}>
              <Icon icon="mage:image-plus" className={styles.addIcon} />
              <p>Thêm video</p>
            </div>
            <div className={styles.imageDesc}>
              Kích thước tối đa 30Mb, độ phân giải không vượt quá 1280x1280px.
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
                placeholder="Tên sản phẩm + Thương hiệu"
                value={inputValue}
                maxLength={maxCharInput}
                onChange={handleInputChange}
              />
              <span className={styles.inputCounter}>
                {inputValue.length}/{maxCharInput}
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
                value={textValue}
                onChange={handleTextChange}
              />
              <span className={styles.textCounter}>
                {textValue.length}/{maxCharText}
              </span>
              {textValue.length > 0 && textValue.length < minCharText && (
                <p className={styles.warning}>
                  Mô tả phải có ít nhất {minCharText} ký tự.
                </p>
              )}
            </div>
          </div>
          <div className={styles.divider}></div>
          <p className={styles.detailForm}>Thông tin chi tiết</p>
          <div className={styles.detailContainer}>
            <div className={styles.detailSide}>
              <div className={styles.formGroup}>
                <label className={styles.detailLabel} htmlFor="brand">
                  Thương hiệu
                </label>
                <select
                  className={styles.selectBox}
                  id="brand"
                  onChange={handleBrandChange}
                  required
                >
                  <option value="" disabled selected hidden>
                    Vui lòng chọn
                  </option>
                  <option value="1">No brand</option>
                  <option value="2">Xtra Mart</option>
                  <option value="3">Big Market</option>
                  <option value="4">Dalat FreshFruit</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.detailLabel} htmlFor="expirationDate">
                  Ngày hết hạn
                </label>
                <input
                  type="date"
                  className={styles.input}
                  id="expirationDate"
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.detailLabel} htmlFor="expiration">
                  Hạn sử dụng
                </label>
                <select className={styles.selectBox} id="expiration" required>
                  <option value="" disabled selected hidden>
                    Vui lòng chọn
                  </option>
                  <option value="1">1 tháng</option>
                  <option value="3">3 tháng</option>
                  <option value="6">6 tháng</option>
                  <option value="12">12 tháng</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.detailLabel} htmlFor="ingredients">
                  Thành phần
                </label>
                <input
                  type="text"
                  className={styles.input}
                  id="ingredients"
                  placeholder="Vui lòng điền vào"
                />
              </div>
            </div>

            <div className={styles.detailSide}>
              <div className={styles.formGroup}>
                <label className={styles.detailLabel} htmlFor="origin">
                  Xuất xứ
                </label>
                <select className={styles.selectBox} id="origin" required>
                  <option value="" disabled selected hidden>
                    Vui lòng chọn
                  </option>
                  <option value="VN">Việt Nam</option>
                  <option value="CN">Trung Quốc</option>
                  <option value="US">Mỹ</option>
                  <option value="JP">Nhật Bản</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.detailLabel} htmlFor="productionDate">
                  Ngày sản xuất
                </label>
                <input
                  type="date"
                  className={styles.input}
                  id="productionDate"
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.detailLabel} htmlFor="weight">
                  Trọng lượng
                </label>
                <select className={styles.selectBox} id="origin" required>
                  <option value="" disabled selected hidden>
                    Vui lòng chọn
                  </option>
                  <option value="1">500g</option>
                  <option value="2">1kg</option>
                  <option value="3">2kg</option>
                  <option value="4">5kg</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.detailLabel} htmlFor="diet">
                  Chế độ ăn uống
                </label>
                <select className={styles.selectBox} id="diet" required>
                  <option value="" disabled selected hidden>
                    Vui lòng chọn
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div className={styles.actions}>
            <button className={styles.cancelButton}>Huỷ</button>
            <button className={styles.saveButton}>Lưu & Ẩn</button>
            <button className={styles.saveShowButton}>Lưu & Hiển thị</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddProduct;
