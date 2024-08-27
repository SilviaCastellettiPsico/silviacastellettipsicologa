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
        {isSmallScreen ? (
          <>
            <div className="section-title">{where.title}</div>
            <div className="where col-sm-12 col-md-6 col-lg-6">
              <div
                className="section-description"
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
            </div>
            <GatsbyImage
              className="section-image col-sm-12 col-md-6 col-lg-6"
              imgClassName="section-image"
              image={getImage(where.image2.src)}
              alt={where.image2.alt}
              loading="eager"
            />
          </>
        ) : (
          <div className="container">
            <div className="row">
              <div className="where col-sm-12 col-md-6 col-lg-6">
                <div className="section-title">{where.title}</div>
                <div
                  className="section-description"
                  dangerouslySetInnerHTML={{ __html: html }}
                />
                <button
                  style={{
                    marginRight: "auto",
                  }}
                  type="button"
                  className="btn btn-primary"
                  onClick={() => window.open(where.ctaButton.url, "__blank")}
                >
                  {where.ctaButton.label}
                </button>
              </div>
              <GatsbyImage
                className="section-image col-sm-12 col-md-6 col-lg-6"
                imgClassName="section-image"
                image={getImage(where.image2.src)}
                alt={where.image2.alt}
                loading="eager"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
