import styles from "./ManageOrder.module.css";
import SellerNavbar from "../seller/components/SellerNavBar";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { getSoldProducts } from "../../apis/getAPIs";
import { acceptOrder } from '../../apis/putAPIs';

function ManageOrder() {
  const [currentOrders, setCurrentOrders] = useState([]);

  useEffect(() => {
    const fetchSoldProduct = async () => {
      const response = await getSoldProducts();
      
      if (response.status === 200) {
        setCurrentOrders(response.data);
      }
    }

    fetchSoldProduct();
  }, []);

  const handleAcceptOrder = async (orderId, productId) => {
    const response = await acceptOrder(orderId, productId);

    console.log(response);
    
    setCurrentOrders((prevOrders) => {
      const updatedOrders = prevOrders.map((order) =>
        order.order_id === orderId ? { ...order, status: "Accepted" } : order
      );

      const updatedOrder = updatedOrders.find(
        (order) => order.order_id === orderId
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
                  {currentOrders.map((product) => {
                    return (
                      <tr key={product.order_id}>
                        <td>{product.buyer_name}</td>
                        <td>{`${product.street} ${product.town} ${product.district} ${product.city}`}</td>
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
                        <td>{product.quantity}</td>
                        <td>
                          {product.status === "Pending" ? (
                            <div className={styles.statusBox}>
                              <p className={styles.statusPending}>
                                {product.status}
                              </p>
                              <button
                                className={styles.acceptButton}
                                onClick={() =>
                                  handleAcceptOrder(
                                    product.order_id,
                                    product.id
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
                              {product.status}
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
