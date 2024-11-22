import React from "react";
import broccoli from "../../assets/images/broccoli.png";
import beef from "../../assets/images/beef.png";
import fish from "../../assets/images/fish.png";
import nuts from "../../assets/images/nuts.png";
import fishsauce from "../../assets/images/fishsauce.png";
import chung from "../../assets/images/chung-cake.png";
import different from "../../assets/images/different.png";
const Menu = () => {
  return (
    <div className="dropdown-container">
      <div className="dropdown">
        <button className="dropbtn">
          <img src={broccoli} alt="Danh mục" className="button-icon" />
          RAU CỦ
        </button>
        <div className="dropdown-content">
          <a href="#">Rau</a>
          <a href="#">Củ</a>
          <a href="#">Quả</a>
          <a href="#">Khác</a>
        </div>
      </div>

      <div className="dropdown">
        <button className="dropbtn">
          <img src={beef} alt="Danh mục" className="button-icon" />
          THỊT
        </button>
        <div className="dropdown-content">
          <a href="#">Thịt</a>
          <a href="#">Cá</a>
          <a href="#">Hải Sản</a>
          <a href="#">Trứng</a>
          <a href="#">Sữa</a>
          <a href="#">Khác</a>
        </div>
      </div>

      <div className="dropdown">
        <button className="dropbtn">
          <img src={fish} alt="Danh mục" className="button-icon" />
          ĐỒ KHÔ
        </button>
        <div className="dropdown-content">
          <a href="#">Cá khô</a>
          <a href="#">Khô gà</a>
          <a href="#">Khô mực</a>
          <a href="#">Bò khô</a>
          <a href="#">Trâu gác bếp</a>
          <a href="#">Khác</a>
        </div>
      </div>

      <div className="dropdown">
        <button className="dropbtn">
          <img src={nuts} alt="Danh mục" className="button-icon" />
          HOA QUẢ SẤY
        </button>
        <div className="dropdown-content">
          <a href="#">Hạt điều</a>
          <a href="#">Macca</a>
          <a href="#">Hạnh nhân</a>
          <a href="#">Hạt dẻ</a>
          <a href="#">Hoa quả sấy dẻo</a>
          <a href="#">Khác</a>
        </div>
      </div>

      <div className="dropdown">
        <button className="dropbtn">
          <img src={fishsauce} alt="Danh mục" className="button-icon" />
          MẮM
        </button>
        <div className="dropdown-content">
          <a href="#">Mắm cá</a>
          <a href="#">Mắm nêm</a>
          <a href="#">Mắm tôm</a>
          <a href="#">Mắm mực</a>
          <a href="#">Khác</a>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">
          <img src={chung} alt="Danh mục" className="button-icon" />
          BÁNH
        </button>
        <div className="dropdown-content">
          <a href="#">Bánh chưng</a>
          <a href="#">Bánh giò</a>
          <a href="#">Bánh tét</a>
          <a href="#">Khác</a>
        </div>
      </div>

      <div className="dropdown">
        <button className="dropbtn">
          <img src={different} alt="Danh mục" className="button-icon" />
          KHÁC
        </button>
        <div className="dropdown-content">
          <a href="#">Mật ong</a>
          <a href="#">Trà</a>
          <a href="#">Gạo sạch</a>
          <a href="#">Thảo mộc</a>
          <a href="#">Dầu</a>
        </div>
      </div>
    </div>
  );
};

export default Menu;
