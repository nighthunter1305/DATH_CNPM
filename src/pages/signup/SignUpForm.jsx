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
      setErrorMessage("The confirm password does not match!");
    else {
      console.log("Sign up successfully.");
    }
  };

  return (
    <>
      <h1>GreenFood</h1>
      <div className={styles.container}>
        <h2 className={styles.title}>Welcome !</h2>
        <p className={styles.subTitle}>Sign up to create new account</p>

        <form action="#" onSubmit={handleSubmit}>
          <InputField type="text" placeholder="Username"></InputField>
          <InputField
            type="email"
            placeholder="Emai or phone number"
          ></InputField>
          <InputField
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          ></InputField>
          <InputField
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          ></InputField>
          {errorMessage && <p className={styles.error}>{errorMessage}</p>}
          <button type="submit" className={styles.button}>
            SIGN UP
          </button>
          <p className={styles.separator}>
            <span>OR Continue with</span>
          </p>
          <SocialLogIn />
        </form>
        <p className={styles.login}>
          Already have an account?
          <Link to="/login" className={styles.link}>
            Sign in
          </Link>
        </p>
      </div>
    </>
  );
}

export default SignUpForm;
