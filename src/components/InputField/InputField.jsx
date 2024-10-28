import { useState } from "react";
import styles from "./InputField.module.css";

const InputField = ({ type, placeholder, icon, value, onChange }) => {
  // State to toggle password visibility
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  return (
    <div className={styles.wrapper}>
      <input
        type={isPasswordShown ? "text" : type}
        placeholder={placeholder}
        className={styles.inputField}
        value={value}
        onChange={onChange}
        required
      />
      <i className="material-symbols-rounded">{icon}</i>
      {type === "password" && (
        <i
          onClick={() => setIsPasswordShown((prevState) => !prevState)}
          className="material-symbols-rounded eye-icon"
        >
          {isPasswordShown ? "visibility" : "visibility_off"}
        </i>
      )}
    </div>
  );
};

export default InputField;
