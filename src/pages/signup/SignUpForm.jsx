import InputField from "../../components/InputField/InputField";
import SocialLogIn from "../../components/SocialLogIn/SocialLogIn";
import loginPic from "../../assets/images/login_pic.png";
import styles from "./SignUpForm.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function SignUpForm() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setErrorMessage("");
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setErrorMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (confirmPassword !== password) {
      setErrorMessage("Mật khẩu xác nhận không khớp!");
      setPassword("");
      setConfirmPassword("");
    } else {
      console.log("Đăng ký thành công.");
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1>GreenFood</h1>
        <h2 className={styles.title}>Đăng ký</h2>
        <p className={styles.subTitle}>
          Tạo tài khoản và tham gia mua sắm ngay
        </p>

        <form action="#" onSubmit={handleSubmit}>
          <InputField
            type="email"
            placeholder="Email hoặc số điện thoại"
          ></InputField>
          <InputField
            type="password"
            placeholder="Mật khẩu"
            value={password}
            onChange={handlePasswordChange}
          ></InputField>
          <InputField
            type="password"
            placeholder="Xác nhận lại mật khẩu"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          ></InputField>
          {errorMessage && <p className={styles.error}>{errorMessage}</p>}
          <button type="submit" className={styles.button}>
            ĐĂNG KÝ
          </button>
          <p className={styles.separator}>
            <span>HOẶC</span>
          </p>
          <SocialLogIn />
        </form>
        <p className={styles.login}>
          Đã có tài khoản?
          <Link to="/login" className={styles.link}>
            Đăng nhập
          </Link>
        </p>
      </div>
      <div className={styles.imageContainer}>
        <img src={loginPic} alt="Login pic" className={styles.image} />
      </div>
    </div>
  );
}

export default SignUpForm;
