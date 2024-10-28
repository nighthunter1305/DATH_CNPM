import InputField from "../../components/InputField/InputField";
import SocialLogIn from "../../components/SocialLogIn/SocialLogIn";
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
    if (confirmPassword !== password)
      setErrorMessage("Mật khẩu xác nhận không khớp.");
    else {
      console.log("Đăng ký thành công");
    }
  };

  return (
    <>
      <h1>GreenFood</h1>
      <div className={styles.container}>
        <h2 className={styles.title}>Đăng ký</h2>

        <form action="#" onSubmit={handleSubmit}>
          <InputField
            type="text"
            placeholder="Tên người dùng"
            icon="person"
          ></InputField>
          <InputField
            type="email"
            placeholder="Email/Số điện thoại"
            icon="mail"
          ></InputField>
          <InputField
            type="password"
            placeholder="Mật khẩu"
            icon="lock"
            value={password}
            onChange={handlePasswordChange}
          ></InputField>
          <InputField
            type="password"
            placeholder="Xác nhận lại mật khẩu"
            icon="lock"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          ></InputField>
          {errorMessage && <p className={styles.error}>{errorMessage}</p>}
          <button type="submit" className={styles.button}>
            Đăng ký
          </button>
          <p className={styles.separator}>
            <span>Hoặc</span>
          </p>
          <SocialLogIn />
        </form>
        <p className={styles.policy}>
          Bằng việc đăng ký, bạn đã đồng ý về
          {/* eslint-disable-next-line */} {""}
          <a href="#">Điều khoản dịch vụ</a>
          {/* eslint-disable-next-line */} & {""}
          <a href="#">Chính sách bảo mật</a>
        </p>

        <p className={styles.login}>
          Bạn đã có tài khoản?
          <Link to="/login" className={styles.link}>
            Đăng nhập
          </Link>
        </p>
      </div>
    </>
  );
}

export default SignUpForm;
