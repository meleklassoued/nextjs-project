import React, { useContext, useState } from "react";
import styles from "../../style/Layout.module.scss";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/Md";
import { ThemeContext } from "../Layout";

function Header() {
  const { Theme, changeTheme } = useContext(ThemeContext);

  if (Theme === false) {
    return (
      <div className={styles.navcontainer}>
        <div className={styles.LogoContainer}>
          <h1> Github Users </h1>
        </div>

        <ul className={styles.links}>
          <li>Users</li>
          <MdDarkMode onClick={() => changeTheme()}> </MdDarkMode>
          <input type='search' />
        </ul>
      </div>
    );
  } else {
    return (
      <div className={styles.navcontainerwhite}>
        <div className={styles.LogoContainer}>
          <h1> Github Users </h1>
        </div>

        <ul className={styles.links}>
          <li>Users</li>
          <MdOutlineDarkMode onClick={() => changeTheme()}></MdOutlineDarkMode>
          <input type='search' />
        </ul>
      </div>
    );
  }
}

export default Header;
