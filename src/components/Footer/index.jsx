import React from "react";
import { useLocalDataSource } from "./data";
import { InstagramLogo } from "../SvgImage/InstagramLogo";
import { LinkedinLogo } from "../SvgImage/LinkedinLogo";
import "./style.css";

export function Footer() {
  const footer = useLocalDataSource();

  return (
    <footer className="footer">
      <div className="footer-container">
        <small className="footer-copyright">
          Copyright &copy; {new Date().getFullYear()} - Silvia Castelletti
        </small>
        <div style={{ marginLeft: "auto" }}>
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
            style={{ cursor: "pointer", marginLeft: "6px" }}
          >
            <LinkedinLogo />
          </a>
        </div>
      </div>
    </footer>
  );
}
