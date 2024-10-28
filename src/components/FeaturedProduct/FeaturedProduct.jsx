// FeaturedProducts.jsx
import React, { useState } from "react";

const FeaturedProducts = () => {
  // Sample product data
  const products = [
    { name: "Sản phẩm 1", price: "500,000" },
    { name: "Sản phẩm 2", price: "650,000" },
    { name: "Sản phẩm 3", price: "750,000" },
    { name: "Sản phẩm 4", price: "550,000" },
    { name: "Sản phẩm 5", price: "620,000" },
    { name: "Sản phẩm 6", price: "780,000" },
    { name: "Sản phẩm 7", price: "400,000" },
    { name: "Sản phẩm 8", price: "520,000" },
    { name: "Sản phẩm 9", price: "640,000" },
    { name: "Sản phẩm 10", price: "580,000" },
    { name: "Sản phẩm 11", price: "720,000" },
    { name: "Sản phẩm 12", price: "900,000" },
    // Add more products as needed
  ];

  // Constants for pagination
  const productsPerPage = 3;
  const rowsPerPage = 2;

  // State to manage the current index of loaded products
  const [currentIndex, setCurrentIndex] = useState(
    productsPerPage * rowsPerPage
  );

  // Function to load more products
  const loadMoreProducts = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + productsPerPage * rowsPerPage, products.length)
    );
  };

  return (
    <section className="featured-products">
      <h2>Tất Cả Sản Phẩm</h2>
      <div className="product-grid" id="productGrid">
        {products.slice(0, currentIndex).map((product, index) => (
          <div key={index} className="product">
            <h3>{product.name}</h3>
            <p>{product.price} VNĐ</p>
          </div>
        ))}
      </div>
      {currentIndex < products.length && (
        <button id="loadMore" onClick={loadMoreProducts}>
          Tải Thêm Sản Phẩm
        </button>
      )}
    </section>
  );
};

export default FeaturedProducts;
