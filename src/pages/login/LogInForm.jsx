import InputField from "../../components/InputField/InputField";
import SocialLogIn from "../../components/SocialLogIn/SocialLogIn";
import styles from "./LogInForm.module.css";
import { Link } from "react-router-dom";

function LogInForm() {
  return (
    <>
      <h1>GreenFood</h1>
      <div className={styles.container}>
        <h2 className={styles.title}>Đăng nhập</h2>

        <form action="#">
          <InputField
            type="email"
            placeholder="Email/Số điện thoại/Tên đăng nhập"
            icon="mail"
          ></InputField>
          <InputField
            type="password"
            placeholder="Mật khẩu"
            icon="lock"
          ></InputField>
          {/* eslint-disable-next-line */}
          <a href="#" className={styles.forgot}>
            Quên mật khẩu
          </a>
          <button type="submit" className={styles.button}>
            Đăng nhập
          </button>
          <p className={styles.separator}>
            <span>Hoặc</span>
          </p>
          <SocialLogIn />
        </form>
        <p className={styles.signup}>
          Chưa có tài khoản?
          {/* eslint-disable-next-line */}
          <Link to="/signup" className={styles.link}>
            Đăng ký
          </Link>
        </p>
      </div>
    </>
  );
}

export default LogInForm;
