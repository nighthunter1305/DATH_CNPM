import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContext";
import { logout } from '../../apis/postAPIs';

function Navbar() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const { cart } = useProducts();
  const cartCount = new Set(cart.map((product) => product.id)).size;

  useEffect(() => {
    const loggedInStatus = !!sessionStorage.getItem("isLoggedIn");
    if (loggedInStatus) {
      setIsLoggedIn(true);
      setUsername(sessionStorage.getItem("username"));
      setAvatar(sessionStorage.getItem("avatar"));
    }
  }, []);

  const handleLogout = async () => {
    const response = await logout();
    console.log(response);
   
    sessionStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  const handleSearch = async () => {
    if (!searchQuery.trim()) return; 
    try {
      const response = await fetch(`http://localhost:8000/api/search?query=${searchQuery}`); // hmmmmmm
      if (response.ok) {
        const data = await response.json();
        console.log("Search results:", data);
        setSearchResults(data);
      } else {
        console.error("Search API failed");
      }
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value); 
    handleSearch(); 
  };

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <button className={styles.logoButton} onClick={() => navigate("/")}>
            <Icon className={styles.logo} icon="noto:leafy-green" />
          <p className={styles.shopName}>GreenFood</p>
        </button>
      </div>

      <div className={styles.searchBar}>
        <input
          type="text"
          placeholder="Nhập từ khoá..."
          value={searchQuery}
          onChange={handleInputChange}
          onKeyPress={(e) => e.key === "Enter" && handleSearch()}
        />
        <button className={styles.searchBtn} onClick={handleSearch}>
          <Icon icon="fe:search" />
        </button>
      </div>

      <div className={styles.userOptions}>
        <div className={styles.notificationIcon}>
          <Link to="#">
            <Icon
              icon="mingcute:notification-fill"
              className={styles.iconify}
            />
            <span className={styles.notificationCount}>3</span>
          </Link>
        </div>

        <div className={styles.messageIcon}>
          <div onClick={() => navigate("/status")}>
            <Icon icon="tabler:mail-filled" className={styles.iconify} />
            <span className={styles.messageCount}>10</span>
          </div>
        </div>

        <div className={styles.cart}>
          <Link to="/cart">
            <Icon icon="mdi:cart" className={styles.iconify} />
            {cartCount > 0 && (
              <span className={styles.cartCount}>{cartCount}</span>
            )}
          </Link>
        </div>
        {isLoggedIn ? (
          <>
            <div className={styles.userAvatar}>
              <img src={avatar} alt="avatar" className={styles.avatar} />
              <span className={styles.username}>{username}</span>
            </div>
            <button className={styles.logoutBtn} onClick={handleLogout}>
              Đăng xuất
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Đăng nhập</Link>
            <Link to="/signup">Đăng ký</Link>
          </>
        )}
      </div>
      {searchResults.length > 0 && (
        <div className={styles.searchResultsContainer}>
          {searchResults.map((product) => (
            <div
              key={product.id}
              className={styles.searchResultItem}
              onClick={() => handleProductClick(product.id)}
            >
              <span>{product.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Navbar;
