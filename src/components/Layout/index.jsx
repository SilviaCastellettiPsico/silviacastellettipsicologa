import React from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";
import "../../globalStyles/global.css";
import { HeaderGoToHome } from "../HeaderGoToHome";

export function Layout({ headerType, children }) {
  return (
    <>
      <>{headerType === "root" ? <Header /> : <HeaderGoToHome />}</>
      <main>{children}</main>
      <Footer />
    </>
  );
}
