import InputField from "../../components/InputField/InputField";
import SocialLogIn from "../../components/SocialLogIn/SocialLogIn";
import styles from "./LogInForm.module.css";
import { Link } from "react-router-dom";
import loginPic from "../../assets/images/login_pic.png";

function LogInForm() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1>GreenFood</h1>
        <h2 className={styles.title}>Đăng nhập</h2>
        <p className={styles.subTitle}>Truy cập vào tài khoản của bạn</p>

        <form action="#">
          <InputField
            type="email"
            placeholder="Tên đăng nhập, email hoặc số điện thoại"
          ></InputField>
          <InputField type="password" placeholder="Mật khẩu"></InputField>
          {/* eslint-disable-next-line */}
          <a href="#" className={styles.forgot}>
            Quên mật khẩu?
          </a>

          <button type="submit" className={styles.button}>
            ĐĂNG NHẬP
          </button>

          <p className={styles.separator}>
            <span>HOẶC</span>
          </p>
          <SocialLogIn />
        </form>
        <p className={styles.signup}>
          Chưa có tài khoản?
          {/* eslint-disable-next-line */}
          <Link to="/signup" className={styles.link}>
            Đăng ký ngay
          </Link>
        </p>
      </div>
      <div className={styles.imageContainer}>
        <img src={loginPic} alt="Login pic" className={styles.image} />
      </div>
    </div>
  );
}

export default LogInForm;
