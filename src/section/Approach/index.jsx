import React from "react";
import useCheckSmallScreen from "../../hook/useCheckSmallScreen";
import { useLocalDataSource } from "./data";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export function Approach({ sectionId }) {
  const isSmallScreen = useCheckSmallScreen();
  const data = useLocalDataSource();
  const aproach = data.allApproachJson.nodes[0];
  const { html } = data.markdownRemark;

  return (
    <section id={sectionId} className="section-container">
      {isSmallScreen ? (
        <>
          <div className="section-title">{aproach.title}</div>
          <div
            className="section-description"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <GatsbyImage
            className="section-image"
            imgClassName="section-image"
            image={getImage(aproach.image.src)}
            alt={aproach.image.alt}
            loading="eager"
          />
        </>
      ) : (
        <div className="row" style={{ display: "flex" }}>
          <GatsbyImage
            className="section-image"
            image={getImage(aproach.image.src)}
            alt={aproach.image.alt}
            loading="eager"
          />
          {/*           style={{ flex: "1", marginLeft: "50px" }}    */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              flex: 1,
              marginLeft: "50px",
            }}
          >
            <div className="section-title">{aproach.title}</div>
            <div
              className="section-description"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </div>
      )}
    </section>
  );
}
