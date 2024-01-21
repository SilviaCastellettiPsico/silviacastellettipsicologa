import React from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";
import "../../globalStyles/global.css";

export function Layout(props) {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
}
