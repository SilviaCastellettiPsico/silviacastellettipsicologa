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
        {/* <div style={{ display: "flex", flexDirection: "row" }}> */}
        <div className="container">
          <div className="row">
            <div className="col-sm-12, col-md-6 col-lg-4">
              <GatsbyImage
                className="section-image"
                style={{ marginBottom: "20px" }}
                image={getImage(whoami.image.src)}
                alt={whoami.image.alt}
                loading="eager"
              />
            </div>

            <div
              className="section-description col-sm-12, col-md-6 col-lg-4"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
