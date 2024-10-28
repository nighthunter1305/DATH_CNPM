import React from "react";
const Slider = () => {
  return (
    <div class="best-sellers-carousel">
      <h2>Sản phẩm bán chạy</h2>

      <button class="carousel-btn left-btn" onclick="prevSlide()">
        &#10094;
      </button>

      <button class="carousel-btn right-btn" onclick="nextSlide()">
        &#10095;
      </button>

      <div class="product-container">
        <div class="product-slide active">
          <div class="product-item">
            <img src="product1.jpg" alt="Sản phẩm 1" class="product-image" />
            <h3 class="product-name">Sản phẩm 1</h3>
            <p class="product-price">500,000 VND</p>
            <button class="buy-now">Mua ngay</button>
          </div>
          <div class="product-item">
            <img src="product2.jpg" alt="Sản phẩm 2" class="product-image" />
            <h3 class="product-name">Sản phẩm 2</h3>
            <p class="product-price">650,000 VND</p>
            <button class="buy-now">Mua ngay</button>
          </div>
          <div class="product-item">
            <img src="product3.jpg" alt="Sản phẩm 3" class="product-image" />
            <h3 class="product-name">Sản phẩm 3</h3>
            <p class="product-price">750,000 VND</p>
            <button class="buy-now">Mua ngay</button>
          </div>
          <div class="product-item">
            <img src="product4.jpg" alt="Sản phẩm 4" class="product-image" />
            <h3 class="product-name">Sản phẩm 4</h3>
            <p class="product-price">550,000 VND</p>
            <button class="buy-now">Mua ngay</button>
          </div>
          <div class="product-item">
            <img src="product5.jpg" alt="Sản phẩm 5" class="product-image" />
            <h3 class="product-name">Sản phẩm 5</h3>
            <p class="product-price">620,000 VND</p>
            <button class="buy-now">Mua ngay</button>
          </div>
          <div class="product-item">
            <img src="product6.jpg" alt="Sản phẩm 6" class="product-image" />
            <h3 class="product-name">Sản phẩm 6</h3>
            <p class="product-price">780,000 VND</p>
            <button class="buy-now">Mua ngay</button>
          </div>
        </div>

        <div class="product-slide">
          <div class="product-item">
            <img src="product7.jpg" alt="Sản phẩm 7" class="product-image" />
            <h3 class="product-name">Sản phẩm 7</h3>
            <p class="product-price">400,000 VND</p>
            <button class="buy-now">Mua ngay</button>
          </div>
          <div class="product-item">
            <img src="product8.jpg" alt="Sản phẩm 8" class="product-image" />
            <h3 class="product-name">Sản phẩm 8</h3>
            <p class="product-price">520,000 VND</p>
            <button class="buy-now">Mua ngay</button>
          </div>
          <div class="product-item">
            <img src="product9.jpg" alt="Sản phẩm 9" class="product-image" />
            <h3 class="product-name">Sản phẩm 9</h3>
            <p class="product-price">640,000 VND</p>
            <button class="buy-now">Mua ngay</button>
          </div>
          <div class="product-item">
            <img src="product10.jpg" alt="Sản phẩm 10" class="product-image" />
            <h3 class="product-name">Sản phẩm 10</h3>
            <p class="product-price">580,000 VND</p>
            <button class="buy-now">Mua ngay</button>
          </div>
          <div class="product-item">
            <img src="product11.jpg" alt="Sản phẩm 11" class="product-image" />
            <h3 class="product-name">Sản phẩm 11</h3>
            <p class="product-price">720,000 VND</p>
            <button class="buy-now">Mua ngay</button>
          </div>
          <div class="product-item">
            <img src="product12.jpg" alt="Sản phẩm 12" class="product-image" />
            <h3 class="product-name">Sản phẩm 12</h3>
            <p class="product-price">900,000 VND</p>
            <button class="buy-now">Mua ngay</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
