import React from "react";
import { Link } from "gatsby";
import "./style.css";

export function HeaderGoToHome() {
  return (
    <header className="header">
      <div className="header-container ">
        <Link to="/" className="gatsby-link ">
          Torna alla Home
        </Link>
      </div>
    </header>
  );
}
