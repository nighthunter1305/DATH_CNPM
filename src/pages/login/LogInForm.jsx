import InputField from "../../components/InputField";
import SocialLogIn from "../../components/SocialLogIn";

function LogInForm() {
  return (
    <div className="login-container">
      <h2 className="form-title">Đăng nhập</h2>

      <form action="#" className="login-form">
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
        <a href="#" className="forgot-password-link">
          Quên mật khẩu
        </a>
        <button type="submit" className="login-button">
          Đăng nhập
        </button>
        <p className="separator">
          <span>or</span>
        </p>
        <SocialLogIn />
      </form>
      <p className="signup-prompt">
        Chưa có tài khoản?
        {/* eslint-disable-next-line */}
        <a href="#" className="signup-link">
          Đăng ký
        </a>
      </p>
    </div>
  );
}

export default LogInForm;
