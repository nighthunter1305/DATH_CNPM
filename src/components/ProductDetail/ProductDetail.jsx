import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContext";
import { FaFacebook, FaShare, FaFacebookMessenger } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import { FaPhone, FaMessage, FaStore } from "react-icons/fa6";
import "./ProductDetail.scss";
import { getProductReview, getUserData } from '../../apis/getAPIs';
import { addProductToCart } from "../../apis/postAPIs";
// import {
//   TbPlayerTrackNextFilled,
//   TbPlayerTrackPrevFilled,
// } from "react-icons/tb";

const ProductDetail = () => {
  const { id } = useParams();
  const { products, addToCart } = useProducts();
  const product = products.find((prod) => prod.id.toString() === id);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [showPopup, setShowPopup] = useState(false);
  const [user, setUser] = useState(null);
  const [comments, setComments] = useState([]);
  const navigate = useNavigate();

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
    const fetchUser = async () => {
      try {
        const data = await getProductReview(id);
        setComments(data);

      } catch (error) {
        console.error("Error fetching product review:", error);
      }
    };

    fetchUser();
  }, [id]);

  const handlePurchase = () => {
    const isLoggedIn = !!sessionStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      navigate('/login');
      return;
    }

    navigate(`/payment/${product.id}`)
  }

  const handleAddToCart = async () => {
    const isLoggedIn = !!sessionStorage.getItem("isLoggedIn");
    
    if (!isLoggedIn) {
      navigate('/login');
      return;
    }
    try {
      if (isLoggedIn) {
        const buyerId = user?.id;
        const response = response = await addProductToCart(buyerId, product.id, quantity);
        console.log(response);
        
        if (response.status === 201) {
          addToCart({ ...product, quantity });
          setShowPopup(true);
          setTimeout(() => {
            setShowPopup(false);
          }, 1000);
        }
      }
    } catch (error) {
      console.error('Error adding product to cart:', error);
      navigate('/login');
    }
  };

  const handleQuantityChange = (e) => {
    setQuantity(Number(e.target.value));
  };

  if (!product) {
    return <h1>Không tìm thấy sản phẩm</h1>;
  }

  const images = product.image.split(",");

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : 0
    );
  };

  const handleShare = (platform) => {
    const url = window.location.href;
    let shareUrl;

    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          url
        )}`;
        break;
      case "messenger":
        shareUrl = `https://www.messenger.com/share?link=${encodeURIComponent(
          url
        )}`;
        break;
      case "zalo":
        shareUrl = `https://zalo.me/share?link=${encodeURIComponent(url)}`;
        break;
      default:
        break;
    }

    if (shareUrl) {
      window.open(shareUrl, "_blank");
    }
  };

  const handleCopyLink = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      alert("Đã sao chép liên kết vào clipboard!");
    });
  };

  const handleMessageClick = (seller) => {
    alert(`Gửi tin nhắn tới ${seller.name}`);
  };

  const cmtsPerPage = 10;
  const changePage = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  const currentcmts = comments.slice(
    (currentPage - 1) * cmtsPerPage,
    currentPage * cmtsPerPage
  );

  const totalPages = Math.ceil(comments.length / cmtsPerPage);

  return (
    <div className="product-detail-container">
      {/* Phần ảnh sản phẩm */}
      <div className="product-image-section">
        <img
          src={images[currentImageIndex]}
          alt="Ảnh sản phẩm chính"
          className="product-main-image"
        />
        <div className="product-thumbnail-container">
          <button className="thumbnail-nav prev" onClick={handlePrevClick}>
            ◀
          </button>
          {images.slice(0, 5).map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Ảnh nhỏ ${index + 1}`}
              className={`product-thumbnail ${index === currentImageIndex ? "selected" : ""
                }`}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
          <button className="thumbnail-nav next" onClick={handleNextClick}>
            ▶
          </button>
        </div>
      </div>

      {/* Thông tin sản phẩm */}
      <div className="product-info-section">
        <h2 className="product-title">{product.name}</h2>
        <div className="product-rating">
          <span className="star-rating">⭐ {product.rating}</span>
          <span>({product.comments} bình luận)</span>
          <span>Đã bán {product.sold}</span>
        </div>
        <div className="product-price">{product.price} VNĐ</div>
        <div className="quantity-section">
          <span>Số lượng:</span>
          <input
            type="number"
            value={quantity}
            min={1}
            onChange={handleQuantityChange}
            className="quantity-input"
          />
          <span className="available-stock">Kho: {product.quantity}</span>
        </div>
        <div className="button-area">
          <button className="buy-now-button" onClick={handlePurchase}>Mua ngay</button>
          <button className="add-to-cart-button" onClick={handleAddToCart}>
            Thêm vào giỏ hàng
          </button>
        </div>

        {/* Chia sẻ sản phẩm */}
        <div className="share-buttons">
          <h3>Chia sẻ:</h3>
          <button
            className="share-button"
            onClick={() => handleShare("facebook")}
          >
            <FaFacebook size={32} style={{ color: "#006AFF" }} />
          </button>
          <button
            className="share-button"
            onClick={() => handleShare("messenger")}
          >
            <FaFacebookMessenger size={32} style={{ color: "#006AFF" }} />
          </button>
          <button className="share-button" onClick={() => handleShare("zalo")}>
            <SiZalo size={32} style={{ color: "#00B2FF" }} />
          </button>
          <button className="share-button" onClick={handleCopyLink}>
            <FaShare size={32} style={{ color: "#0068ff" }} />
          </button>
        </div>
      </div>

      {showPopup && (
        <div className="popup-message">
          <p>Sản phẩm đã được thêm vào giỏ hàng!</p>
        </div>
      )}

      {/* Thông tin người bán */}
      <div className="seller-info-section">
        <h3>Thông tin người bán</h3>
        <div className="seller-info">
          <div className="seller-details">
            <img
              src="https://via.placeholder.com/100"
              alt="Người bán"
              className="seller-image"
            />
            <p className="seller-name">{product.sellerName}</p>
            <p className="seller-contact">
              <button className="call-bt">
                <a href="tel:+84817727460" className="call-link">
                  <FaPhone size={32} />
                </a>
              </button>
              <button
                className="message-bt"
                onClick={() => handleMessageClick({ name: "Người bán" })}
              >
                <FaMessage size={32} />
              </button>
              <button className="view-shop-bt">
                <a href="https://exampleshop.com" className="call-link">
                  <FaStore size={32} />
                </a>
                <span>Xem gian hàng</span>
              </button>
            </p>
          </div>
        </div>
      </div>

      {/* Chi tiết sản phẩm */}
      <div className="product-info-section">
        <h3>Chi tiết sản phẩm</h3>
        <p>{product.description}</p>
      </div>

      {/* Đánh giá sản phẩm */}
      <div className="product-reviews-section">
        <h3>Đánh giá sản phẩm</h3>
        <div className="vote-bar">
          <div className="star">
            <span>{product.rating} trên 5 sao</span>
            <span>
              {'⭐'.repeat(Math.floor(product.rating))}
              {'☆'.repeat(5 - Math.floor(product.rating))}
            </span>
          </div>
          <div className="star-detail">
            <button className="star-bt">Tất cả</button>
            <button className="star-bt">5 sao</button>
            <button className="star-bt">4 sao</button>
            <button className="star-bt">3 sao</button>
            <button className="star-bt">2 sao</button>
            <button className="star-bt">1 sao</button>
            <button className="star-bt">Có ảnh/video</button>
          </div>
        </div>
        <div className="vote-comments">
          {currentcmts.map((cmt) => (
            <div key={cmt.id} className="cmt-item">
              <img src={cmt.userImage} alt="Người dùng" />
              <div className="user-cmt">
                <p>{cmt.name}</p>
                <p>{cmt.created_at}</p>
                <p>Đánh giá: {cmt.rate}</p>
                <p>{cmt.comment}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={`page-button ${currentPage === page ? "active" : ""}`}
              onClick={() => changePage(page)}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
