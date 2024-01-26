import React from "react";
import { useLocalDataSource } from "./data";
import { Card } from "../../components/Card";
import useCheckSmallScreen from "../../hook/useCheckSmallScreen";
import "./style.css";

export function Work({ sectionId }) {
  const isSmallScreen = useCheckSmallScreen();
  const data = useLocalDataSource();
  const work = data.allWorkJson.nodes[0];

  return (
    <div id={sectionId} className="section-container">
      <div className="section-title">{work.title}</div>
      <div className="section-intro">{work.intro}</div>
      <div className="container">
        <div className="row">
          {work.cards.map((card, index) => {
            if (index === work.cards.length - 1) {
              return (
                <div className="col-sm-12, col-md-6 col-lg-4" key={index}>
                  <Card
                    title={card.title}
                    children={card.description}
                    footer={
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() =>
                          window.open(card.ctaButton.url, "__blank")
                        }
                      >
                        {card.ctaButton.label}
                      </button>
                    }
                  />
                </div>
              );
            } else {
              return (
                <div
                  className="col-sm-12, col-md-6 col-lg-4"
                  style={
                    isSmallScreen
                      ? { marginBottom: "24px" }
                      : { marginBottom: "0px" }
                  }
                  key={index}
                >
                  <Card
                    title={card.title}
                    children={card.description}
                    footer={
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() =>
                          window.open(card.ctaButton.url, "__blank")
                        }
                      >
                        {card.ctaButton.label}
                      </button>
                    }
                  />
                </div>
              );
            }
          })}
        </div>

        {/*         <GatsbyImage
          className="work-image"
          style={{ marginBottom: "20px" }}
          image={getImage(work.image1.src)}
          alt={work.image1.alt}
          loading="eager"
        /> */}
      </div>
    </div>
  );
}
