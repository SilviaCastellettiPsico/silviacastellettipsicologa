import React from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { HeaderGoToHome } from "../HeaderGoToHome";
import "../../globalStyles/global.css";

export function Layout({ headerType, children }) {
  return (
    <>
      <>{headerType === "root" ? <Header /> : <HeaderGoToHome />}</>
      <main>{children}</main>
      <Footer />
    </>
  );
}
