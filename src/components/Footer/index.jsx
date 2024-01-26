import React from "react";
import { useLocalDataSource } from "./data";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import "./style.css";

export function Footer() {
  const footer = useLocalDataSource();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* <div className="footer-names">{siteConfiguration.wedding.names}</div> */}
        {/*         <a
          className="footer-copyright"
          href={
            code !== null
              ? "https://link.wamoo.app/wamoo/" +
                siteConfiguration.wedding.identifier +
                "?source=website&code=" +
                code
              : "https://link.wamoo.app/wamoo/" +
                siteConfiguration.wedding.identifier +
                "?source=website"
          }
          target="__blank"
        > */}
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
            <GatsbyImage
              image={getImage(footer.instagramLogo.src)}
              alt={footer.instagramLogo.alt}
              loading="eager"
            />
          </a>
          <a
            href={footer.linkedinLogo.linkTo}
            target="_blank"
            rel="noreferrer"
            style={{ cursor: "pointer", marginLeft: "8px" }}
          >
            <GatsbyImage
              image={getImage(footer.linkedinLogo.src)}
              alt={footer.linkedinLogo.alt}
              loading="eager"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
