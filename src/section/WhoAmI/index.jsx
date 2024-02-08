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
        <div className="container">
          <div className="row">
            <div className="whoami col-sm-12 col-md-6 col-lg-6">
              {isSmallScreen ? (
                <div className="section-title">{whoami.title}</div>
              ) : (
                <>
                  <div className="section-title">{whoami.title}</div>
                  <div className="section-title" style={{ marginTop: "-30px" }}>
                    {whoami.subtitle}
                  </div>
                </>
              )}
              <div
                className="section-description "
                dangerouslySetInnerHTML={{ __html: html }}
              />

              <div
                style={
                  isSmallScreen
                    ? {
                        marginRight: "auto",
                        marginBottom: "20px",
                      }
                    : { marginRight: "auto" }
                }
              >
                <Link to={whoami.ctaButton.url} style={{ marginRight: "20px" }}>
                  <button type="button" className="btn btn-info">
                    {whoami.ctaButton.label}
                  </button>
                </Link>
                <Link to={whoami.ctaButton2.url}>
                  <button type="button" className="btn btn-secondary">
                    {whoami.ctaButton2.label}
                  </button>
                </Link>
              </div>
            </div>

            <GatsbyImage
              className="section-image col-sm-12 col-md-6 col-lg-6"
              imgClassName="section-image"
              image={getImage(whoami.image.src)}
              alt={whoami.image.alt}
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
