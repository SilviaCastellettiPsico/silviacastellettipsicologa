import React from "react";
import "./style.css";

export function Footer() {
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
      </div>
    </footer>
  );
}
