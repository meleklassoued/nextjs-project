import React from "react";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";

function Layout({ children }) {
  return (
    <>
      <Header></Header>
      {children}
      <Footer></Footer>
    </>
  );
}

export default Layout;
