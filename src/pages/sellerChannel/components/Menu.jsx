import { useState } from "react";
import { Icon } from "@iconify/react";
import styles from "./Menu.module.css";

const Menu = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className={styles.container}>
      <div className={styles.menuHeader}>
        {title}
        <span onClick={toggleMenu}>
          <Icon
            icon={isOpen ? "ri:arrow-up-s-fill" : "ri:arrow-down-s-fill"}
            className={`${styles.iconify} ${isOpen ? styles.rotate : ""}`}
          />
        </span>
      </div>
      <ul
        className={`${styles.menuList} ${isOpen ? styles.open : styles.closed}`}
      >
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
