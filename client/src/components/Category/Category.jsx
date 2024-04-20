import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Category.module.css";

export const Category = () => {
  const [isActive, setIsActive] = useState(false);

  const activeHandler = () => {
    setIsActive(!isActive);
  };
  return (
    <section className={styles.Category}>
      <div className={styles.Title}>
        <h2>카테고리</h2>
      </div>
      <Link onClick={activeHandler}>
        <div className={isActive ? styles.MainCat : styles.MainCatActive}>
          JAVA
        </div>
      </Link>
      <Link onClick={() => activeHandler}>
        <div className={isActive ? styles.MainCat : styles.MainCatActive}>
          SPRING
        </div>
      </Link>
    </section>
  );
};
