import React from "react";
import { Link } from "gatsby";
import { BackArrow } from "../SvgImage/BackArrow";
import "./style.css";

export function HeaderGoToHome() {
  return (
    <header className="header">
      <div className="header-container" style={{ paddingBottom: "15px" }}>
        <Link to="/#comelavoro">
          <BackArrow />
        </Link>
      </div>
    </header>
  );
}
