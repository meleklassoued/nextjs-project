import React from "react";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import styles from "../style/Layout.module.scss";

function Layout({ children }) {
  return (
    <>
      <Header></Header>
      <div className={styles.children}>{children}</div>
      <Footer></Footer>
    </>
  );
}

export default Layout;
