import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.Header}>
      <div className={styles.Wrap}>
        <div>
          <div className={styles.Logo}>
            <Link to="/">
              <p>찰규의 숨겨진 공간</p>
            </Link>
          </div>
        </div>
        <div>
          <div className={styles.MenuList}>
            <Link to="/" className={styles.Home}>
              <p>Home</p>
            </Link>
            <Link to="/about" className={styles.About}>
              <p>About</p>
            </Link>
            <Link to="/blog" className={styles.Blog}>
              <p>Blog</p>
            </Link>
            <Link to="/portfolio" className={styles.Portfolio}>
              <p>Portfolio</p>
            </Link>
            <Link to="/contact" className={styles.Contact}>
              <p>Contact</p>
            </Link>
          </div>
        </div>
        <div>
          <Link to="/signin" className={styles.SignIn}>
            <p>Sign In</p>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
