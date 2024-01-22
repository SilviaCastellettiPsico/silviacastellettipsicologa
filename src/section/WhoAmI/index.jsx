import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useLocalDataSource } from "./data";
import "./style.css";

export function WhoAmI() {
  const whoami = useLocalDataSource();

  return (
    <div className="whoami-container">
      <div className="whoami-title">{whoami.title}</div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <GatsbyImage
          className="whoami-image"
          style={{ marginBottom: "20px" }}
          image={getImage(whoami.image.src)}
          alt={whoami.image.alt}
          loading="eager"
        />
        <div className="whoami-description">{whoami.description}</div>
      </div>

      {/*       {content.intro ? (
        <div className="cta-photo-type1-intro">{content.intro}</div>
      ) : null}
      {content.title ? (
        <div className="cta-photo-type1-title">{content.title}</div>
      ) : null}
      {content.description ? (
        <div className="cta-photo-type1-description">{content.description}</div>
      ) : null} */}
      {/*       {content.image1.showImage ? (
        <GatsbyImage
          className="cta-photo-type1-image"
          style={{ marginBottom: "20px" }}
          image={getImage(content.image1.src)}
          alt={content.image1.alt}
          loading="eager"
        />
      ) : null} */}
    </div>
  );
}
