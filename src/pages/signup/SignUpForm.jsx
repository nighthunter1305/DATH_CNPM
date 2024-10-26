import InputField from "../../components/InputField";
import SocialLogIn from "../../components/SocialLogIn";
function SignUpForm() {
  return (
    <>
      <h1>GreenFood</h1>
      <div className="login-container">
        <h2 className="form-title">Đăng ký</h2>

        <form action="#" className="login-form">
          <InputField
            type="text"
            placeholder="Tên người dùng"
            icon="person"
          ></InputField>
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
          <button type="submit" className="login-button">
            Đăng ký
          </button>
          <p className="separator">
            <span>Hoặc</span>
          </p>
          <SocialLogIn />
        </form>
        <p className="policy-prompt">
          Bằng việc đăng ký, bạn đã đồng ý về
          {/* eslint-disable-next-line */}{" "}
          <a href="#" className="policy-link">
            Điều khoản dịch vụ
          </a>
          {/* eslint-disable-next-line */} &{" "}
          <a href="#" className="policy-link">
            Chính sách bảo mật
          </a>
        </p>

        <p className="signup-prompt">
          Bạn đã có tài khoản?
          {/* eslint-disable-next-line */}
          <a href="#" className="signup-link">
            Đăng nhập
          </a>
        </p>
      </div>
    </>
  );
}

export default SignUpForm;
