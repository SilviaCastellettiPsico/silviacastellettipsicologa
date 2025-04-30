import React from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { HeaderGoToHome } from "../HeaderGoToHome";
import { Helmet } from "react-helmet";
import "./style.css";

export function Layout({ headerType, children }) {
  return (
    <div className="app">
      <Helmet>
        <title>Silvia Castelletti Psicologa</title>
        <meta
          name="description"
          content="Sito ufficiale di Silvia Castelletti, psicologa clinica e psicoterapeuta sistemico-dialogica ."
        />
        <meta
          name="keywords"
          content="psicologa, supporto psicologico, terapia, Clusone, Bergamo, psicoterapia, psicologia, Silvia Castelletti"
        />
      </Helmet>
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
