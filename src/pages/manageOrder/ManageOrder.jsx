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

  const handleAcceptOrder = (orderId, productId) => {
    setCurrentOrders((prevOrders) => {
      const updatedOrders = prevOrders.map((order) =>
        order.orderId === orderId ? { ...order, status: "Accepted" } : order
      );

      const updatedOrder = updatedOrders.find(
        (order) => order.orderId === orderId
      );

      if (updatedOrder) {
        console.log("Order Updated:", {
          orderId,
          productId: productId,
          status: updatedOrder.status,
        });
      }

      return updatedOrders;
    });
  };

  return (
    <>
      <SellerNavbar title={"Quản lý đơn hàng"} />

      <div className={styles.orderContainer}>
        {currentOrders.length > 0 ? (
          <>
            <div className={styles.orderHeader}>
              <div className={styles.orderHeaderItem}>Tên người mua</div>
              <div className={styles.orderHeaderItem}>Địa chỉ</div>
              <div className={styles.orderHeaderItem}>Hình ảnh</div>
              <div className={styles.orderHeaderItem}>Tên sản phẩm</div>
              <div className={styles.orderHeaderItem}>Số lượng</div>
              <div className={styles.orderHeaderItem}>Trạng thái</div>
            </div>
            <div className={styles.orderList}>
              <table>
                <tbody>
                  {currentOrders.map((order) => {
                    const product = getProductById(order.productId);
                    return (
                      <tr key={order.orderId}>
                        <td>placeholder</td>
                        <td>placeholder</td>
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
                        <td>{product?.name}</td>
                        <td>{order.quantity}</td>
                        <td>
                          {order.status === "Pending" ? (
                            <div className={styles.statusBox}>
                              <p className={styles.statusPending}>
                                {order.status}
                              </p>
                              <button
                                className={styles.acceptButton}
                                onClick={() =>
                                  handleAcceptOrder(
                                    order.orderId,
                                    order.productId
                                  )
                                }
                              >
                                <Icon
                                  icon="ic:twotone-check"
                                  className={styles.acceptIcon}
                                />
                              </button>
                            </div>
                          ) : (
                            <p className={styles.statusAccepted}>
                              {order.status}
                            </p>
                          )}
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
