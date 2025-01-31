import React from "react";
import useCheckSmallScreen from "../../hook/useCheckSmallScreen";
import { useLocalDataSource } from "./data";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export function Where({ sectionId }) {
  const isSmallScreen = useCheckSmallScreen();
  const data = useLocalDataSource();
  const where = data.allWhereJson.nodes[0];
  const { html } = data.markdownRemark;

  return (
    <section id={sectionId} className="section-container">
      {isSmallScreen ? (
        <>
          <div className="section-title">{where.title}</div>
          <div
            className="section-description"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <GatsbyImage
            className="section-image"
            image={getImage(where.image2.src)}
            alt={where.image2.alt}
            loading="eager"
          />
        </>
      ) : (
        <div className="row" style={{ display: "flex" }}>
          {/* style={{ flex: 1, marginRight: "50px" }} */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              flex: 1,
              marginRight: "50px",
            }}
          >
            <div className="section-title">{where.title}</div>
            <div
              className="section-description"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
          <GatsbyImage
            className="section-image"
            image={getImage(where.image2.src)}
            alt={where.image2.alt}
            loading="eager"
          />
        </div>
      )}
    </section>
  );
}
