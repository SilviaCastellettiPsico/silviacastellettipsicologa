import React from "react";
import { useLocalDataSource } from "./data";
import { InstagramLogo } from "../SvgImage/InstagramLogo";
import { LinkedinLogo } from "../SvgImage/LinkedinLogo";
import { GuidaPsicologiLogo } from "../SvgImage/GuidaPsicologiLogo";
import "./style.css";

export function Footer() {
  const footer = useLocalDataSource();

  return (
    <div className="footer-container">
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <a
          href={footer.instagramLogo.linkTo}
          target="_blank"
          rel="noreferrer"
          style={{ cursor: "pointer" }}
        >
          <InstagramLogo />
        </a>
        <a
          href={footer.linkedinLogo.linkTo}
          target="_blank"
          rel="noreferrer"
          style={{ cursor: "pointer", marginLeft: "9px" }}
        >
          <LinkedinLogo />
        </a>
        <a
          href={footer.guidaPsicologiLogo.linkTo}
          target="_blank"
          rel="noreferrer"
          style={{ cursor: "pointer", marginLeft: "6px" }}
        >
          <GuidaPsicologiLogo />
        </a>
      </div>
      <div className="footer-copyright">
        &copy; {new Date().getFullYear()} - Silvia Castelletti
      </div>
    </div>
  );
}
