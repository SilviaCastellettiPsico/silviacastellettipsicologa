import React from "react";
import { Link } from "gatsby";
import { useLocalDataSource } from "./data";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import "./style.css";

export function HeaderGoToHome() {
  const header = useLocalDataSource();

  return (
    <header className="header">
      <div className="header-container" style={{ paddingBottom: "15px" }}>
        <Link to="/#comelavoro" className="gatsby-link">
          <GatsbyImage
            image={getImage(header.image.src)}
            alt={header.image.alt}
            loading="eager"
          />
        </Link>
      </div>
    </header>
  );
}
