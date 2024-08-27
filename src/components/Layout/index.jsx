import React from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { HeaderGoToHome } from "../HeaderGoToHome";
import "./style.css";

export function Layout({ headerType, children }) {
  return (
    <div className="app">
      <header className="app-header">
        {headerType === "root" ? <Header /> : <HeaderGoToHome />}
      </header>
      <main className="app-content">{children}</main>
      <footer className="app-footer">
        <Footer />
      </footer>
    </div>
  );
}
