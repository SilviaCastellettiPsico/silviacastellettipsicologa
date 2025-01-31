import React from "react";
import useCheckSmallScreen from "../../hook/useCheckSmallScreen";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useLocalDataSource } from "./data";
import { Link } from "gatsby";
import "./style.css";

export function WhoAmI({ sectionId }) {
  const isSmallScreen = useCheckSmallScreen();
  const data = useLocalDataSource();
  const whoami = data.allWhoamiJson.nodes[0];
  const { html } = data.markdownRemark;

  return (
    <section className="section-whoami">
      <div id={sectionId} className="section-container">
        {isSmallScreen ? (
          <>
            <div className="section-title">{whoami.title}</div>
            <div
              className="section-description "
              dangerouslySetInnerHTML={{ __html: html }}
            />
            <div style={{ marginBottom: "20px" }}>
              <Link to={whoami.ctaButton.url}>
                <button
                  type="button"
                  className="btn btn-secondary"
                  style={{ marginRight: "20px" }}
                >
                  {whoami.ctaButton.label}
                </button>
              </Link>
              <Link to={whoami.ctaButton2.url}>
                <button type="button" className="btn btn-info">
                  {whoami.ctaButton2.label}
                </button>
              </Link>
            </div>

            <GatsbyImage
              className="section-image"
              imgClassName="section-image"
              image={getImage(whoami.image.src)}
              alt={whoami.image.alt}
              loading="eager"
            />
          </>
        ) : (
          <div className="row" style={{ display: "flex" }}>
            <div style={{ flex: "1", marginRight: "50px" }}>
              <div className="section-title">{whoami.title}</div>
              <div className="section-title" style={{ marginTop: "-30px" }}>
                {whoami.subtitle}
              </div>
              <div
                className="section-description"
                dangerouslySetInnerHTML={{ __html: html }}
              />

              <div style={{ display: "flex", marginTop: "30px" }}>
                <Link to={whoami.ctaButton.url} style={{ marginRight: "20px" }}>
                  <button type="button" className="btn btn-secondary">
                    {whoami.ctaButton.label}
                  </button>
                </Link>
                <Link to={whoami.ctaButton2.url}>
                  <button type="button" className="btn btn-info">
                    {whoami.ctaButton2.label}
                  </button>
                </Link>
              </div>
            </div>

            <GatsbyImage
              className="section-image"
              image={getImage(whoami.image.src)}
              alt={whoami.image.alt}
              loading="eager"
            />
          </div>
        )}
      </div>
    </section>
  );
}
