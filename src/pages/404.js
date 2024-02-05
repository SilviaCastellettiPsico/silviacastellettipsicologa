import * as React from "react";
import { Link } from "gatsby";
import { Page } from "../components/Page";
import "../globalStyles/global.css";

const PageNotFound = () => {
  return (
    <Page>
      <div className="section-container">
        <div className="section-title">Page not found</div>
        <p>Sorry 😔&#44; we couldn t find what you were looking for.</p>
        <Link to="/">Go home</Link>.
      </div>
    </Page>
  );
};

export default PageNotFound;

export const Head = () => <title>Page not found</title>;
