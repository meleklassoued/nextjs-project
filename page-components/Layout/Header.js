import React from "react";
import styles from "../../style/Layout.module.scss";
function Header() {
  return (
    <div className={styles.navcontainer}>
      <div className={styles.LogoContainer}>
        <h1> Github Users </h1>
      </div>

      <ul className={styles.links}>
        <li>Users</li>
        <li></li>
        <input type='search' />
      </ul>
    </div>
  );
}

export default Header;
