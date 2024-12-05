import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Statusbar.scss";
import { getOrders, getUserData } from '../../apis/getAPIs';

const StatusBar = () => {
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState("Tất cả");
  const [currentOrders, setCurrentOrders] = useState([]);
  const [orders, setOrders] = useState({
    "Tất cả": [],
    "Chờ thanh toán": [],
    "Vận chuyển": [],
    "Hoàn thành": [],
    "Đã huỷ": []
  });
  const navigate = useNavigate();

  const tabs = [
    { name: "Tất cả", path: "/all" },
    { name: "Chờ thanh toán", path: "/waitpay" },
    { name: "Vận chuyển", path: "/transfer" },
    { name: "Hoàn thành", path: "/completed" },
    { name: "Đã huỷ", path: "/canceled" },
  ];

  useEffect(() => {
    setCurrentOrders(orders[activeTab]);
  }, [activeTab, orders]);

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

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await getOrders(user?.id);

        const categorizedOrders = {
          "Tất cả": response,
          "Chờ thanh toán": [],
          "Vận chuyển": [],
          "Hoàn thành": [],
          "Đã huỷ": []
        };

        response.forEach(order => {
          switch (order.status) {
            case "Pending":
              categorizedOrders["Chờ thanh toán"].push(order);
              break;
            case "Accepted":
              categorizedOrders["Vận chuyển"].push(order);
              break;
            case "Delivered":
              categorizedOrders["Hoàn thành"].push(order);
              break;
            case "Canceled":
              categorizedOrders["Đã huỷ"].push(order);
              break;
            default:
              break;
          }
        });

        setOrders(categorizedOrders);

      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    }

    fetchOrders();
  }, [user?.id])

  const handleTabClick = async (tab) => {
    setActiveTab(tab.name);
    setCurrentOrders(orders[tab.name]);
    navigate(tab.path);
  };

  return (
    <div className="status-bar">
      <div className="user-profile">
        <img src="profile-placeholder.png" alt="Profile" />
        <p>{user?.name}</p>
        <button>Sửa Hồ Sơ</button>
      </div>

      {/* Thêm vai trò tablist */}
      <div className="tabs" role="tablist" aria-label="Order Status Tabs">
        {tabs.map((tab) => (
          <div
            key={tab.name}
            role="tab" // Vai trò tab cho các phần tử tab
            tabIndex={0} // Cho phép dùng phím tab để chọn tab
            aria-selected={activeTab === tab.name}
            className={`tab ${activeTab === tab.name ? "active" : ""}`}
            onClick={() => handleTabClick(tab)}
            onKeyDown={(e) => e.key === "Enter" && handleTabClick(tab)} // Điều hướng khi nhấn Enter
          >
            {tab.name}
          </div>
        ))}
      </div>

      <input
        type="text"
        placeholder="Bạn có thể tìm kiếm theo tên Shop, ID đơn hàng hoặc Tên Sản phẩm"
        className="search-bar"
      />

      {/* Vai trò tabpanel để chứa nội dung tương ứng với tab */}
      <div className="order-list" role="tabpanel" aria-labelledby={activeTab}>
        {currentOrders.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Hình ảnh</th>
                <th>Tên sản phẩm</th>
                <th>Số lượng</th>
                <th>Giá tổng cộng (VND)</th>
                <th>Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              {currentOrders.map((order) => (
                <tr key={order.order_id}>
                  <td>
                    <img
                      src={order.image}
                      alt={order.name}
                      style={{ width: "50px", height: "50px", objectFit: "cover" }}
                    />
                  </td>
                  <td>{order.name}</td>
                  <td>{order.quantity}</td>
                  <td>{order.total_price.toLocaleString("vi-VN")}</td>
                  <td>{order.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="no-orders"> 🧾 CHƯA CÓ ĐƠN HÀNG </div>
        )}
      </div>

    </div>
  );
};

export default StatusBar;
