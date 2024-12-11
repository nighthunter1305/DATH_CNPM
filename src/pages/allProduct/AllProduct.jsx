import styles from "./AllProduct.module.css";
import SellerNavbar from "../seller/components/SellerNavBar";
import EmptyProduct from "../../components/EmptyProduct/EmptyProduct";
import { mockSellerProducts } from "../../apis/mock-data";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

function AllProduct() {
  const navigate = useNavigate();
  const [currentProducts, setCurrentProducts] = useState(mockSellerProducts);
  const [editingProduct, setEditingProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleEditClick = (product) => {
    setEditingProduct(product);
  };

  const handleSave = () => {
    setCurrentProducts((prevProducts) =>
      prevProducts.map((prod) =>
        prod.id === editingProduct.id ? editingProduct : prod
      )
    );
    setEditingProduct(null);
  };

  const handleDelete = (product) => {
    setCurrentProducts((prevProducts) =>
      prevProducts.filter((prod) => product.id !== prod.id)
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditingProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const filteredProducts = currentProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <SellerNavbar title={"Tất cả sản phẩm"} />
      <div className={styles.orderBox}>
        <p className={styles.title}>Danh sách sản phẩm </p>
        <div className={styles.headerWrapper}>
          <div className={styles.searchContainer}>
            <div className={styles.searchWrapper}>
              <Icon icon="tabler:search" className={styles.searchIcon} />
              <input
                type="text"
                placeholder="Tìm kiếm sản phẩm..."
                className={styles.searchInput}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <button
            className={styles.addProductButton}
            onClick={() => {
              navigate("/seller/add-product");
            }}
          >
            Thêm sản phẩm
          </button>
        </div>

        <div className={styles.orderContainer}>
          {currentProducts.length > 0 ? (
            <>
              <div className={styles.orderHeader}>
                <div className={styles.orderHeaderItem}>Hình ảnh</div>
                <div className={styles.orderHeaderItem}>Tên sản phẩm</div>
                <div className={styles.orderHeaderItem}>Giá bán</div>
                <div className={styles.orderHeaderItem}>Kho hàng</div>
                {/* <div className={styles.orderHeaderItem}>Đã bán</div> */}
                <div className={styles.orderHeaderItem}>Thao tác</div>
              </div>
              <div className={styles.orderList}>
                <table>
                  <tbody>
                    {filteredProducts.map((product) => (
                      <tr key={product.id}>
                        <td>
                          <img
                            src={product.image}
                            alt={product.name}
                            style={{
                              width: "50px",
                              height: "50px",
                              objectFit: "cover",
                            }}
                          />
                        </td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.stock}</td>
                        {/* <td>{product.sold}</td> */}
                        <td>
                          <button
                            className={styles.editButton}
                            onClick={() => handleEditClick(product)}
                          >
                            <Icon icon="mingcute:pencil-fill" />
                          </button>
                          <button
                            className={styles.deleteButton}
                            onClick={() => handleDelete(product)}
                          >
                            <Icon icon="mingcute:delete-fill" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          ) : (
            <EmptyProduct />
          )}
        </div>
        {editingProduct && (
          <div
            className={styles.modalOverlay}
            onClick={() => setEditingProduct(null)}
          >
            <div
              className={styles.modalContent}
              onClick={(e) => e.stopPropagation()}
            >
              <p className={styles.modalTitle}>Chỉnh sửa sản phẩm</p>
              <div className={styles.modalField}>
                <div className={styles.fieldContainer}>
                  <p className={styles.fieldLabel}>Tên sản phẩm:</p>
                  <input
                    type="text"
                    name="name"
                    value={editingProduct.name}
                    onChange={handleInputChange}
                    className={styles.fieldInput}
                  />
                </div>
                <div className={styles.fieldContainer}>
                  <p className={styles.fieldLabel}>Giá bán:</p>
                  <input
                    type="text"
                    name="price"
                    value={editingProduct.price}
                    onChange={handleInputChange}
                    className={styles.fieldInput}
                  />
                </div>
                <div className={styles.fieldContainer}>
                  <p className={styles.fieldLabel}>Kho hàng:</p>
                  <input
                    type="number"
                    name="stock"
                    value={editingProduct.stock}
                    onChange={handleInputChange}
                    className={styles.fieldInput}
                  />
                </div>
              </div>
              <div className={styles.modalActions}>
                <button onClick={handleSave} className={styles.saveButton}>
                  Lưu
                </button>
                <button
                  onClick={() => setEditingProduct(null)}
                  className={styles.cancelButton}
                >
                  Hủy
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default AllProduct;
