import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useProducts } from '../../Context/ProductContext';
import facebookLogo from '../../assets/images/facebook.png';
import messengerLogo from '../../assets/images/messenger.png';
import zaloLogo from '../../assets/images/zalo.png';
import copyLinkLogo from '../../assets/images/link.png';
import callLogo from '../../assets/images/call.png';
import messageLogo from '../../assets/images/mesage.png';
import './ProductDetail.scss';

const ProductDetail = () => {
    const { id } = useParams();
    const { products } = useProducts();
    const product = products.find((prod) => prod.id.toString() === id);

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    if (!product) {
        return <h1>Product not found</h1>;
    }

    // Đặt ảnh mẫu tạm thời nếu product.images không có giá trị
    const images = product.images && product.images.length > 0 ? product.images : ["https://via.placeholder.com/400"];

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
            case 'facebook':
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
                break;
            case 'messenger':
                shareUrl = `https://www.messenger.com/share?link=${encodeURIComponent(url)}`;
                break;
            case 'zalo':
                shareUrl = `https://zalo.me/share?link=${encodeURIComponent(url)}`;
                break;
            default:
                break;
        }

        if (shareUrl) {
            window.open(shareUrl, '_blank');
        }
    };

    const handleCopyLink = () => {
        const url = window.location.href;
        navigator.clipboard.writeText(url).then(() => {
            alert('Đã sao chép liên kết!');
        });
    };

    const handleMessageClick = (seller) => {
        alert(`Nhắn tin cho ${seller.name}`);
    };

    return (
        <div className="product-detail-container">
            {/* Phần hình ảnh sản phẩm */}
            <div className="product-image-section">
                <img
                    src={images[currentImageIndex]}
                    alt="Main Product"
                    className="product-main-image"
                />
                <div className="product-thumbnail-container">
                    <button className="thumbnail-nav prev" onClick={handlePrevClick}>◀</button>
                    {images.slice(0, 5).map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Thumbnail ${index + 1}`}
                            className={`product-thumbnail ${index === currentImageIndex ? 'selected' : ''}`}
                            onClick={() => setCurrentImageIndex(index)}
                        />
                    ))}
                    <button className="thumbnail-nav next" onClick={handleNextClick}>▶</button>
                </div>
            </div>

            {/* Phần thông tin sản phẩm */}
            <div className="product-info-section">
                <h2 className="product-title">{product.name}</h2>
                <div className="product-rating">
                    <span className="star-rating">⭐{product.rating}</span>
                    <span>({product.comments} bình luận)</span>
                    <span>Đã bán {product.sold}</span>
                </div>
                <div className="product-price">{product.price} đ</div>
                <div className="quantity-section">
                    <span>Số lượng:</span>
                    <input type="number" defaultValue={1} min={1} className="quantity-input" />
                    <span className="available-stock">Có sẵn: {product.availableStock}</span>
                </div>
                <button className="buy-now-button">Mua ngay</button>
                <button className="add-to-cart-button">Thêm vào giỏ</button>

                {/* Phần chia sẻ sản phẩm */}
                <div className="share-buttons">
                    <h3>Chia sẻ:</h3>
                    <button className="share-button" onClick={() => handleShare('facebook')}>
                        <img src={facebookLogo} alt="Chia sẻ Facebook" />
                    </button>
                    <button className="share-button" onClick={() => handleShare('messenger')}>
                        <img src={messengerLogo} alt="Chia sẻ Messenger" />
                    </button>
                    <button className="share-button" onClick={() => handleShare('zalo')}>
                        <img src={zaloLogo} alt="Chia sẻ Zalo" />
                    </button>
                    <button className="share-button" onClick={handleCopyLink}>
                        <img src={copyLinkLogo} alt="Sao chép liên kết" />
                    </button>
                </div>
            </div>

            {/* Phần thông tin người bán */}
            <div className="seller-info-section">
                <h3>Thông tin người bán</h3>
                <div className="seller-info">
                    <div className="seller-details">
                        <img 
                            src="https://via.placeholder.com/100"
                            alt="Seller"
                            className="seller-image" 
                        />
                        <p className="seller-name">Nguyễn Văn A</p>
                        <p className="seller-contact">
                            <a href="tel:0123456789" className="call-link" aria-label="Gọi điện cho người bán">
                                <img src={callLogo} alt="Gọi điện" className="call-icon" />
                            </a>
                            <button className="message-button" onClick={() => handleMessageClick({ name: 'Người bán tạm thời' })}>
                                <img src={messageLogo} alt="Tin nhắn" className="message-icon" />
                            </button>
                        </p>
                        <a href="https://example.com/shop" target="_blank" rel="noopener noreferrer" className="view-shop-button">Xem shop</a>
                    </div>
                    <div className="info-item">
                        <p>Số lượng sản phẩm: {product.sold}</p>
                        <p>Đánh giá: {product.rating} ({product.comments} bình luận)</p>
                    </div>
                    <div className="info-item">
                        <p>Tham gia: 1 năm</p>
                        <p>Người theo dõi: 150</p>
                    </div>
                </div>
            </div>

            {/* Phần chi tiết sản phẩm */}
            <div className="product-info-section">
                <h3>Chi tiết sản phẩm</h3>
                <h4>Thông tin chi tiết về sản phẩm sẽ được đặt ở đây</h4>
                <p>{product.description}</p>
            </div>

            {/* Phần đánh giá sản phẩm */}
            <div className="product-reviews-section">
                <h3>Đánh giá sản phẩm</h3>
                {/* Thêm các đánh giá ở đây */}
            </div>
        </div>
    );
};

export default ProductDetail;
