// BestSelling.jsx
import React, { useState } from "react";

const BestSelling = () => {
  // Sample product data
  const products = [
    [
      { imgSrc: "product1.jpg", name: "Sản phẩm 1", price: "500,000 VND" },
      { imgSrc: "product2.jpg", name: "Sản phẩm 2", price: "650,000 VND" },
      { imgSrc: "product3.jpg", name: "Sản phẩm 3", price: "750,000 VND" },
      { imgSrc: "product4.jpg", name: "Sản phẩm 4", price: "550,000 VND" },
      { imgSrc: "product5.jpg", name: "Sản phẩm 5", price: "620,000 VND" },
      { imgSrc: "product6.jpg", name: "Sản phẩm 6", price: "780,000 VND" },
    ],
    [
      { imgSrc: "product7.jpg", name: "Sản phẩm 7", price: "400,000 VND" },
      { imgSrc: "product8.jpg", name: "Sản phẩm 8", price: "520,000 VND" },
      { imgSrc: "product9.jpg", name: "Sản phẩm 9", price: "640,000 VND" },
      { imgSrc: "product10.jpg", name: "Sản phẩm 10", price: "580,000 VND" },
      { imgSrc: "product11.jpg", name: "Sản phẩm 11", price: "720,000 VND" },
      { imgSrc: "product12.jpg", name: "Sản phẩm 12", price: "900,000 VND" },
    ],
  ];

  // State for current slide
  const [currentSlide, setCurrentSlide] = useState(0);

  // Handler to go to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  // Handler to go to the next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="best-sellers-carousel">
      <h2>Sản phẩm bán chạy</h2>

      {/* Left Button */}
      <button className="carousel-btn left-btn" onClick={prevSlide}>
        &#10094;
      </button>

      {/* Right Button */}
      <button className="carousel-btn right-btn" onClick={nextSlide}>
        &#10095;
      </button>

      <div className="product-container">
        {products.map((slide, index) => (
          <div
            key={index}
            className={`product-slide ${
              index === currentSlide ? "active" : ""
            }`}
            style={{ display: index === currentSlide ? "flex" : "none" }}
          >
            {slide.map((product, i) => (
              <div key={i} className="product-item">
                <img
                  src={product.imgSrc}
                  alt={product.name}
                  className="product-image"
                />
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">{product.price}</p>
                <button className="buy-now">Mua ngay</button>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSelling;
