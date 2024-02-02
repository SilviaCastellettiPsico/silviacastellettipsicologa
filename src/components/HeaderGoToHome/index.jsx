import React from "react";
import { Link } from "gatsby";
import BackArrowIcon from "./../../content/images/svg/back_arrow.svg";
import "./style.css";

export function HeaderGoToHome() {
  return (
    <header className="header">
      <div className="header-container" style={{ paddingBottom: "15px" }}>
        <Link to="/#comelavoro" className="gatsby-link">
          <img
            src={BackArrowIcon}
            alt="BackArrowIcon"
            style={{ width: "35px" }}
          />
        </Link>
      </div>
    </header>
  );
}
