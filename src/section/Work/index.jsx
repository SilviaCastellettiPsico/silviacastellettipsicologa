import React from "react";
import { useLocalDataSource } from "./data";
import { Card } from "../../components/Card";
import "./style.css";

export function Work({ sectionId }) {
  const data = useLocalDataSource();
  const work = data.allWorkJson.nodes[0];
  const { html } = data.markdownRemark;

  return (
    <section id={sectionId} className="section-container">
      <>
        <div className="section-title">{work.title}</div>
        <div
          className="section-description"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <div className="row">
          {work.cards.map((card, index) => {
            return (
              <div className="col-sm-12, col-md-6 col-lg-4" key={index}>
                <Card
                  image={card.image}
                  title={card.title}
                  children={card.description}
                  /* footer={
                        <>
                          <Link to={card.ctaButton.url} className="gatsby-link">
                            {card.ctaButton.label}
                          </Link>
                          <div className="vl"></div>
                        </>
                      } */
                />
              </div>
            );
          })}
        </div>
      </>
    </section>
  );
}
