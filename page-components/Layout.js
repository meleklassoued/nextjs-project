import React, { useState, useContext, createContext } from "react";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import styles from "../style/Layout.module.scss";
export const ThemeContext = createContext();
function Layout({ children }) {
  const [Theme, SetTheme] = useState(true);
  const changeTheme = () => {
    Theme === false ? SetTheme(!Theme) : SetTheme(!Theme);
    console.log(Theme);
  };

  return (
    <>
      <ThemeContext.Provider value={{ Theme, changeTheme }}>
        <Header></Header>
        <div
          className={Theme === false ? styles.childrenwhite : styles.children}>
          {children}
        </div>
        <Footer></Footer>
      </ThemeContext.Provider>
    </>
  );
}

export default Layout;
