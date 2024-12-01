import React, { useState } from "react";
import Menu from "../../components/Menu/Menu";
import Location from "../../components/Location/Location";
import BestSelling from "../../components/BestSeller/BestSeller";
import FeaturedProducts from "../../components/FeaturedProduct/FeaturedProduct";
import { useProducts } from "../../contexts/ProductContext";

const HomePage = () => {
  // Trạng thái để lưu thông tin sản phẩm được chọn
  const [setSelectedProduct] = useState(null);

  // Lấy dữ liệu sản phẩm từ context
  const { products } = useProducts();

  // Hàm để chọn sản phẩm (nếu cần)
  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };
  return (
    <div>
      <Menu />
      <Location />
      <BestSelling products={products} onProductClick={handleProductClick} />
      <FeaturedProducts
        products={products}
        onProductClick={handleProductClick}
      />
    </div>
  );
};

export default HomePage;
