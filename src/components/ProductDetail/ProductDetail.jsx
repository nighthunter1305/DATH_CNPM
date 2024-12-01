import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../../Context/ProductContext";
import { FaFacebook, FaShare, FaFacebookMessenger } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import { FaPhone, FaMessage, FaStore } from "react-icons/fa6";
import "./ProductDetail.scss";
import {
  TbPlayerTrackNextFilled,
  TbPlayerTrackPrevFilled,
} from "react-icons/tb";

const ProductDetail = () => {
  const { id } = useParams();
  const { products } = useProducts();
  const product = products.find((prod) => prod.id.toString() === id);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!product) {
    return <h1>Không tìm thấy sản phẩm</h1>;
  }

  // Chuyển chuỗi ảnh thành mảng URL ảnh
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

  const comments = [
    {
      id: 1,
      userImage: "https://via.placeholder.com/100",
      userName: "Nguyễn Văn A",
      voteTime: "14/10/2024",
      rating: 5,
      content: "Sản phẩm tuyệt vời, đáng đồng tiền",
    },
    {
      id: 2,
      userImage: "https://via.placeholder.com/100",
      userName: "Trần Thị B",
      voteTime: "3 giờ trước",
      rating: 4,
      content: "Chất lượng tốt, giao hàng nhanh",
    },
    {
      id: 3,
      userImage: "https://via.placeholder.com/100",
      userName: "Lê Văn C",
      voteTime: "5 giờ trước",
      rating: 3,
      content: "Tạm ổn, cần cải thiện",
    },
  ];

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
              className={`product-thumbnail ${
                index === currentImageIndex ? "selected" : ""
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
          <span className="star-rating">⭐4.7 {product.rating}</span>
          <span>({product.comments} bình luận)</span>
          <span>Đã bán {product.sold}</span>
        </div>
        <div className="product-price">{product.price} đ</div>
        <div className="quantity-section">
          <span>Số lượng:</span>
          <input
            type="number"
            defaultValue={1}
            min={1}
            className="quantity-input"
          />
          <span className="available-stock">Kho: {product.availableStock}</span>
        </div>
        <button className="buy-now-button">Mua ngay</button>
        <button className="add-to-cart-button">Thêm vào giỏ hàng</button>

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
            <p className="seller-name">Nguyễn Văn A</p>
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
          <div className="info-item">
            <p>Số lượng sản phẩm: {product.sold}</p>
            <p>
              Đánh giá: {product.rating} ({product.comments} bình luận)
            </p>
          </div>
          <div className="info-item">
            <p>Tham gia: 1 năm</p>
            <p>Người theo dõi: 15K</p>
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
            <span>4.8 trên 5 sao</span>
            <span>⭐⭐⭐⭐</span>
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
              <div>
                <p>{cmt.userName}</p>
                <p>{cmt.voteTime}</p>
                <p>Đánh giá: {cmt.rating}</p>
                <p>{cmt.content}</p>
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
