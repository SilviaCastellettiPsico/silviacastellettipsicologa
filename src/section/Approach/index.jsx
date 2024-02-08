import React from "react";
import useCheckSmallScreen from "../../hook/useCheckSmallScreen";
import { useLocalDataSource } from "./data";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import "./style.css";

export function Approach({ sectionId }) {
  const isSmallScreen = useCheckSmallScreen();
  const data = useLocalDataSource();
  const aproach = data.allApproachJson.nodes[0];
  const { html } = data.markdownRemark;

  return (
    <section>
      <div id={sectionId} className="section-container">
        {isSmallScreen ? (
          <>
            <div className="section-title">{aproach.title}</div>
            <div className="approach col-sm-12 col-md-6 col-lg-6">
              <div
                className="section-description"
                dangerouslySetInnerHTML={{ __html: html }}
              />
              <Link
                to={aproach.ctaButton.url}
                style={
                  isSmallScreen
                    ? {
                        marginRight: "auto",
                        marginBottom: "20px",
                      }
                    : { marginRight: "auto" }
                }
              >
                <button type="button" className="btn btn-primary">
                  {aproach.ctaButton.label}
                </button>
              </Link>
            </div>
            <GatsbyImage
              className="section-image col-sm-12 col-md-6 col-lg-6"
              imgClassName="section-image"
              image={getImage(aproach.image.src)}
              alt={aproach.image.alt}
              loading="eager"
            />
          </>
        ) : (
          <div className="container">
            <div className="row">
              <GatsbyImage
                className="section-image col-sm-12 col-md-6 col-lg-6"
                imgClassName="section-image"
                image={getImage(aproach.image.src)}
                alt={aproach.image.alt}
                loading="eager"
              />
              <div className="approach col-sm-12 col-md-6 col-lg-6">
                <div className="section-title">{aproach.title}</div>
                <div
                  className="section-description"
                  dangerouslySetInnerHTML={{ __html: html }}
                />
                <Link
                  to={aproach.ctaButton.url}
                  style={
                    isSmallScreen
                      ? {
                          marginRight: "auto",
                          marginBottom: "20px",
                        }
                      : { marginRight: "auto" }
                  }
                >
                  <button type="button" className="btn btn-primary">
                    {aproach.ctaButton.label}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
