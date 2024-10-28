import React from "react";
import "./Navbar.scss";
import logo from "../../assets/trolley.png";
import bell from "../../assets/bell.png";
import email from "../../assets/email.png";
import grocery from "../../assets/grocery-store.png";

function Navbar() {
  return (
    <div className="header">
      <div className="logo">
        <button
          className="logo-button"
          onClick={() => window.location.reload()}
        >
          <a href="#"><img src={logo} alt="Logo" className="logo-image" /></a> CleanFoods
        </button>
      </div>

      <div className="search-bar">
        <input type="text" placeholder="Tìm kiếm" />
        <button>🔎</button>
      </div>

      <div className="user-options">
        <div className="notification-icon">
          <a href="#">
            <img src={bell} alt="notification" className="notification-icon" />
            <span className="notification-count">3</span>
          </a>
        </div>

        <div className="message-icon">
          <a href="#">
            <img src={email} alt="message" className="message-icon" />
            <span className="message-count">5</span>
          </a>
        </div>

        <div className="cart">
          <a href="#">
            <img src={grocery} alt="cart" className="cart-icon" />
          </a>
          <span className="cart-count">10</span>
        </div>

        <a href="#">Đăng nhập</a>
        <a href="#">Đăng ký</a>
      </div>
    </div>
  );
}
export default Navbar;
