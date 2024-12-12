import React, { useEffect, useState } from "react";
import { Icon } from '@iconify/react';
import fishsauce from "../../assets/images/fishsauce.png";
import { useNavigate } from "react-router-dom"; 
import { ProductsByCategory } from "../../apis/getAPIs";
const Menu = () => {
  const [products, setProducts] = useState({
    rauCu: [],
    thucAnNhanh: [],
    haiSan: [],
    giaVi: [],
    nuocMam: [],
    banhTet: [],
    thucPhamKhac: [],
  });
  const fetchProducts = async (categoryId, categoryKey) => {
    try {
      const response = await ProductsByCategory(categoryId);
      if (response) {
        setProducts((prevProducts) => ({
          ...prevProducts,
          [categoryKey]: response.data,
        }));
      } else {
        console.error(`Failed to fetch products for category ${categoryId}`);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  

  useEffect(() => {
    fetchProducts('e66abf11-afee-11ef-b2c3-74d4dd0c2a47', 'rauCu');  
    fetchProducts('153579b0-aff0-11ef-b2c3-74d4dd0c2a47', 'thucAnNhanh');  
    fetchProducts('1535db50-aff0-11ef-b2c3-74d4dd0c2a47', 'haiSan'); 
    fetchProducts('e66b17be-afee-11ef-b2c3-74d4dd0c2a47', 'nuocMam');  
    fetchProducts('e66b177d-afee-11ef-b2c3-74d4dd0c2a47', 'HoaQuaSay'); 
    fetchProducts('e66b17f6-afee-11ef-b2c3-74d4dd0c2a47', 'Thit');  
    fetchProducts('e66b17f6-afee-11ef-b2c3-74d4dd0c2a47', 'thucPhamKhac');  
  }, []);
  const navigate = useNavigate();

  const renderProductLinks = (productsArray) => {
  return (productsArray || [] ).map((product) => (
    <a 
      key={product.id} 
      href={`/product/${product.id}`} 
      onClick={(e) => {
        e.preventDefault();
        navigate(`/product/${product.id}`);
      }}
    >
      {product.name}
    </a>
  ));
};

  
  return (
    <div className="dropdown-container">
      <div className="dropdown">
        <button className="dropbtn">
          <Icon className="button-icon" style={{color:'#b2dd74'}} icon="fluent-emoji:leafy-green" />
          RAU CỦ 
        </button>
        <div className="dropdown-content">
          {renderProductLinks(products.rauCu)}
        </div>
      </div>

      <div className="dropdown">
        <button className="dropbtn">
          <Icon className="button-icon" icon="fluent-emoji:cut-of-meat" />
          THỨC ĂN NHANH
        </button>
        <div className="dropdown-content">
          {renderProductLinks(products.thucAnNhanh)}
        </div>
      </div>

      <div className="dropdown">
        <button className="dropbtn">
          <Icon className="button-icon" icon="fluent-emoji:lobster" />
          HẢI SẢN
        </button>
        <div className="dropdown-content">
          {renderProductLinks(products.haiSan)}
        </div>
      </div>

      <div className="dropdown">
        <button className="dropbtn">
          <Icon className="button-icon" icon="fluent-emoji:beans" />
          HOA QUẢ SẤY KHÔ
        </button>
        <div className="dropdown-content">
          {renderProductLinks(products.HoaQuaSay)}
        </div>
      </div>

      <div className="dropdown">
        <button className="dropbtn">
          <img src={fishsauce} alt="Danh mục" className="button-icon" />
          NƯỚC MẮM
        </button>
        <div className="dropdown-content">
          {renderProductLinks(products.nuocMam)}
        </div>
      </div>

      <div className="dropdown">
        <button className="dropbtn">
          <Icon className="button-icon" icon="fluent-emoji:baguette-bread" />
          BÁNH TẾT
        </button>
        <div className="dropdown-content">
          {renderProductLinks(products.Thit)}
        </div>
      </div>

      <div className="dropdown">
        <button className="dropbtn">
          <Icon className="button-icon" icon="basil:other-1-outline" />
          THỰC PHẨM KHÁC
        </button>
        <div className="dropdown-content">
          {renderProductLinks(products.thucPhamKhac)}
        </div>
      </div>
    </div>
  );
};

export default Menu;
