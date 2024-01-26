import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useLocalDataSource } from "./data";
import "./style.css";

export function WhoAmI({ sectionId }) {
  const data = useLocalDataSource();
  const whoami = data.allWhoamiJson.nodes[0];
  const { html } = data.markdownRemark;

  return (
    <section className="section">
      <div id={sectionId} className="section-container">
        <div className="section-title">{whoami.title}</div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <GatsbyImage
            className="section-image"
            style={{ marginBottom: "20px" }}
            image={getImage(whoami.image.src)}
            alt={whoami.image.alt}
            loading="eager"
          />
          <div
            className="section-description"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </section>
  );
}
