import * as React from "react";
import { Link } from "gatsby";
import { Page } from "../components/Page";
import "../globalStyles/global.css";

const PageNotFound = () => {
  return (
    <Page>
      <div className="section-container">
        <div className="section-title">Pagina non trovata</div>
        <p>
          Mi dispiace 😔&#44; non è possibile trovare la pagina che stai
          cercando.
        </p>
        <Link to="/">Torna indietro</Link>.
      </div>
    </Page>
  );
};

export default PageNotFound;

export const Head = () => <title>Pagina non trovata</title>;
