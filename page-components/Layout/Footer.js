import React, { useContext } from "react";
import styles from "../../style/Layout.module.scss";
import { ThemeContext } from "../Layout";

function Footer() {
  const { Theme } = useContext(ThemeContext);
  if (Theme === false) {
    return (
      <footer className={styles.pagefooter}>
        <p>
          &copy;{new Date().getfullYear} <span>Github Users</span>. built By{" "}
          <a href='https://github.com/meleklassoued'>Melek lassoued</a>
        </p>
      </footer>
    );
  } else {
    return (
      <footer className={styles.pagefooterwhite}>
        <p>
          &copy;{new Date().getfullYear} <span>Github Users</span>. built By{" "}
          <a href='https://github.com/meleklassoued'>Melek lassoued</a>
        </p>
      </footer>
    );
  }
}

export default Footer;
