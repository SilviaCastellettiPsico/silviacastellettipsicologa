import React from "react";
import useCheckSmallScreen from "../../hook/useCheckSmallScreen";
import { useLocalDataSource } from "./data";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import "./style.css";

export function Where({ sectionId }) {
  const isSmallScreen = useCheckSmallScreen();
  const data = useLocalDataSource();
  const where = data.allWhereJson.nodes[0];
  const { html } = data.markdownRemark;

  return (
    <section>
      <div id={sectionId} className="section-container">
        <div className="section-title">{where.title}</div>
        <div
          style={{ marginBottom: "0px" }}
          className="section-intro"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <button
          style={{ marginRight: "auto", marginBottom: "20px" }}
          type="button"
          className="btn btn-primary"
          onClick={() => window.open(where.ctaButton.url, "__blank")}
        >
          {where.ctaButton.label}
        </button>
        <div className="container">
          <div className="row">
            <div className="col-sm-12, col-md-6 col-lg-4">
              <GatsbyImage
                className="section-image"
                style={{ marginBottom: "20px" }}
                image={getImage(where.image1.src)}
                alt={where.image1.alt}
                loading="eager"
              />
            </div>
            <div className="col-sm-12, col-md-6 col-lg-4">
              <GatsbyImage
                className="section-image"
                style={{ marginBottom: "20px" }}
                image={getImage(where.image2.src)}
                alt={where.image2.alt}
                loading="eager"
              />
            </div>
            <div className="col-sm-12, col-md-6 col-lg-4">
              <GatsbyImage
                className="section-image"
                style={
                  isSmallScreen
                    ? { marginBottom: "0px" }
                    : { marginBottom: "20px" }
                }
                image={getImage(where.image3.src)}
                alt={where.image3.alt}
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
