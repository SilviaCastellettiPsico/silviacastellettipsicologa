import React from "react";
import { useLocalDataSource } from "./data";
import InstagramIcon from "./../../content/images/svg/instagram_logo.svg";
import LinkedinIcon from "./../../content/images/svg/linkedin_logo.svg";

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
            <img
              src={InstagramIcon}
              alt="InstagramIcon"
              style={{ width: "24px" }}
            />
          </a>
          <a
            href={footer.linkedinLogo.linkTo}
            target="_blank"
            rel="noreferrer"
            style={{ cursor: "pointer", marginLeft: "6px" }}
          >
            <img
              src={LinkedinIcon}
              alt="LinkedinIcon"
              style={{ width: "20px" }}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
