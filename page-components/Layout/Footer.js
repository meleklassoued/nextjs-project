import React from "react";
import styles from "../../style/Layout.module.scss";
function Footer() {
  return (
    <footer className={styles.pagefooter}>
      <p>
        &copy;{new Date().getfullYear} <span>Github Users</span>. built By{" "}
        <a href='https://github.com/meleklassoued'>Melek lassoued</a>
      </p>
    </footer>
  );
}

export default Footer;
