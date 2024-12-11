import styles from "./ManageOrder.module.css";
import SellerNavbar from "../seller/components/SellerNavBar";
import { mockOrders, mockSellerProducts } from "../../apis/mock-data";
import { useState } from "react";
import { Icon } from "@iconify/react";

function ManageOrder() {
  const [currentOrders, setCurrentOrders] = useState(mockOrders);

  const getProductById = (productId) => {
    return mockSellerProducts.find((product) => product.id === productId);
  };

  return (
    <>
      <SellerNavbar title={"Quản lý đơn hàng"} />

      <div className={styles.orderContainer}>
        {currentOrders.length > 0 ? (
          <>
            <div className={styles.orderHeader}>
              {/* <div className={styles.orderHeaderItem}>ID</div> */}
              <div className={styles.orderHeaderItem}>Hình ảnh</div>
              <div className={styles.orderHeaderItem}>Tên sản phẩm</div>
              <div className={styles.orderHeaderItem}>Số lượng</div>
              <div className={styles.orderHeaderItem}>Thao tác</div>
            </div>
            <div className={styles.orderList}>
              <table>
                <tbody>
                  {currentOrders.map((order, index) => {
                    const product = getProductById(order.productId);
                    return (
                      <tr key={order.orderId}>
                        {/* <td>{index + 1}</td> */}
                        <td>
                          <img
                            src={product?.image}
                            alt={product?.name}
                            style={{
                              width: "50px",
                              height: "50px",
                              objectFit: "cover",
                            }}
                          />
                        </td>
                        <td>{product?.name || "Sản phẩm không tồn tại"}</td>
                        <td>{order.quantity}</td>
                        <td>
                          <button className={styles.viewButton}>
                            <Icon icon="carbon:view-filled" />
                          </button>
                          <button className={styles.deleteButton}>
                            <Icon icon="mingcute:delete-fill" />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <div>Chưa có đơn hàng nào.</div>
        )}
      </div>
    </>
  );
}

export default ManageOrder;
