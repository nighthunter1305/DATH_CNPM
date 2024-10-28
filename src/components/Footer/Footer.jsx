import React from "react";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import tik from "../../assets/tik-tok.png";
const Footer = () => {
  return (
    <div>
      <div class="content">
        <h2>Welcome to Our Store</h2>
        <p>Enjoy our fresh products with the best quality!</p>
      </div>
      <footer>
        <div class="footer-container">
          <div class="footer-item contact-info">
            <h3>Liên hệ với chúng tôi</h3>
            <p>Địa chỉ: 123 Đường ABC, Thành phố XYZ</p>
            <p>Điện thoại: (012) 345-6789</p>
            <p>Email: info@company.com</p>
          </div>
          <div class="footer-item quick-links">
            <h3>Liên kết nhanh</h3>
            <ul>
              <li>
                <a href="/about">Giới thiệu</a>
              </li>
              <li>
                <a href="/privacy">Chính sách bảo mật</a>
              </li>
              <li>
                <a href="/returns">Chính sách hoàn trả</a>
              </li>
              <li>
                <a href="/faq">Câu hỏi thường gặp</a>
              </li>
            </ul>
          </div>
          <div class="footer-item social-media">
            <h3>Kết nối với chúng tôi</h3>
            <a
              href="https://facebook.com"
              target="_blank"
              aria-label="Facebook"
            >
              <img src={facebook} alt="Facebook" class="social-icon" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              aria-label="Instagram"
            >
              <img src={instagram} alt="Instagram" class="social-icon" />
            </a>
            <a href="https://tiktok.com" target="_blank" aria-label="Tiktok">
              <img src={tik} alt="Twitter" class="social-icon" />
            </a>
          </div>

          <div class="footer-item newsletter">
            <h3>Đăng ký nhận bản tin</h3>
            <form action="#">
              <input type="email" placeholder="Nhập email của bạn" required />
              <button type="submit">Đăng ký</button>
            </form>
          </div>
        </div>
        <div class="footer-bottom">
          <p>© Copyright 2024.Pi314 . All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
