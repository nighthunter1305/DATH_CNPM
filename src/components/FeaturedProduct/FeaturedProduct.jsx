import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './FeatureProduct.scss';

const FeaturedProducts = ({ products }) => {
  const navigate = useNavigate();
  const productsPerPage = 30;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(products.length / productsPerPage);

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  const changePage = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  const currentProducts = products.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  return (
    <section className="featured-products">
      <h2>Tất Cả Sản Phẩm</h2>
      <div className="product-grid" id="productGrid">
        {currentProducts.map((product) => (
            <button
                key={product.id}
                className="product"
                onClick={() => handleProductClick(product)}
            >

              <img src={product.image} alt={product.name}/>
              <h3>{product.name}</h3>
              <div className="price-sold">
                <p1>{product.price}₫</p1>
                <p>Đã bán:</p>
              </div>
            </button>
        ))}
      </div>
      <div className="pagination">
        <button onClick={() => changePage(currentPage - 1)} disabled={currentPage === 1}>
          Trang trước
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={currentPage === index + 1 ? "active" : ""}
            onClick={() => changePage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button onClick={() => changePage(currentPage + 1)} disabled={currentPage === totalPages}>
          Trang sau
        </button>
      </div>
    </section>
  );
};

export default FeaturedProducts;
