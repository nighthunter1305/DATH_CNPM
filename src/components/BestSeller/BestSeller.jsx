import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './BestSeller.scss'

const BestSelling = ({ products }) => {
    const navigate = useNavigate();
    const [currentSlide, setCurrentSlide] = useState(0);

    // Number of products per row
    const productsPerRow = 6;
    const totalRows = 2; // You want 2 rows

    // Handler to go to the previous slide
    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? totalRows - 1 : prev - 1));
    };

    // Handler to go to the next slide
    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === totalRows - 1 ? 0 : prev + 1));
    };

    // Function to slice the products into rows of 6 items
    const productRows = Array.from({ length: totalRows }, (_, rowIndex) => {
        const startIndex = rowIndex * productsPerRow;
        return products.slice(startIndex, startIndex + productsPerRow);
    });

    // Handle product click to navigate to the product detail page
    const handleProductClick = (product) => {
        navigate(`/product/${product.id}`, { state: { product } });
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
                {productRows.map((row, rowIndex) => (
                    <div
                        key={rowIndex}
                        className={`product-slide ${rowIndex === currentSlide ? "active" : ""}`}
                        style={{ display: rowIndex === currentSlide ? "flex" : "none" }}
                    >
                        {row.map((product) => (
                            <div
                                key={product.id}
                                className="product-item"
                                onClick={() => handleProductClick(product)}
                            >
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="product-image"
                                />
                                <h3 className="product-name">{product.name}</h3>
                                <p className="product-price">{product.price}₫</p>
                                <button className="buy-now" onClick={(e) => {
                                    e.stopPropagation();
                                    navigate(`/payment/${product.id}`);
                                }}>Mua ngay</button>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BestSelling;