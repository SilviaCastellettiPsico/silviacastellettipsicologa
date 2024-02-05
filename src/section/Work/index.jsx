import React from "react";
import useCheckSmallScreen from "../../hook/useCheckSmallScreen";
import { useLocalDataSource } from "./data";
import { Card } from "../../components/Card";
import { Link } from "gatsby";
import "./style.css";

export function Work({ sectionId }) {
  const isSmallScreen = useCheckSmallScreen();
  const data = useLocalDataSource();
  const work = data.allWorkJson.nodes[0];

  return (
    <section>
      <div id={sectionId} className="section-container">
        <div className="section-title">{work.title}</div>
        <div className="section-intro">{work.intro}</div>
        <div className="container">
          <div className="row">
            {work.cards.map((card, index) => {
              if (index < work.cards.length - 1) {
                return (
                  <div
                    className="col-sm-12, col-md-6 col-lg-4"
                    style={
                      isSmallScreen
                        ? { marginBottom: "20px" }
                        : { marginBottom: "0px" }
                    }
                    key={index}
                  >
                    <Card
                      title={card.title}
                      children={card.description}
                      footer={
                        <Link to={card.ctaButton.url} className="gatsby-link ">
                          <button type="button" className="btn btn-primary">
                            {card.ctaButton.label}
                          </button>
                        </Link>
                      }
                    />
                  </div>
                );
              } else {
                return (
                  <div className="col-sm-12, col-md-6 col-lg-4" key={index}>
                    <Card
                      title={card.title}
                      children={card.description}
                      footer={
                        <Link to={card.ctaButton.url} className="gatsby-link ">
                          <button type="button" className="btn btn-primary">
                            {card.ctaButton.label}
                          </button>
                        </Link>
                      }
                    />
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
