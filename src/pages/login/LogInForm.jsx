import InputField from "../../components/InputField/InputField";
import SocialLogIn from "../../components/SocialLogIn/SocialLogIn";
import styles from "./LogInForm.module.css";
import { Link } from "react-router-dom";

function LogInForm() {
  return (
    <>
      <h1>GreenFood</h1>
      <div className={styles.container}>
        <h2 className={styles.title}>Welcome !</h2>
        <p className={styles.subTitle}>Sign in to your account</p>

        <form action="#">
          <InputField
            type="email"
            placeholder="Username, email or phone number"
          ></InputField>
          <InputField type="password" placeholder="Password"></InputField>
          {/* eslint-disable-next-line */}
          <a href="#" className={styles.forgot}>
            Forgot password?
          </a>

          <button type="submit" className={styles.button}>
            SIGN IN
          </button>

          <p className={styles.separator}>
            <span>OR Continue with</span>
          </p>
          <SocialLogIn />
        </form>
        <p className={styles.signup}>
          Don't have an account?
          {/* eslint-disable-next-line */}
          <Link to="/signup" className={styles.link}>
            Sign up
          </Link>
        </p>
      </div>
    </>
  );
}

export default LogInForm;
