import React from "react";
import { useLocalDataSource } from "./data";
import "./style.css";

export function Contacts({ sectionId }) {
  const data = useLocalDataSource();
  const contacts = data.allContactsJson.nodes[0];
  const { html } = data.markdownRemark;

  return (
    <section>
      <div id={sectionId} className="section-container">
        <div className="section-title">{contacts.title}</div>
        <div
          style={{ marginBottom: "0px" }}
          className="section-intro"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        {/*         <button
          style={{ marginRight: "auto", marginBottom: "20px" }}
          type="button"
          className="btn btn-primary"
          onClick={() => window.open(contacts.ctaButton.url, "__blank")}
        >
          {contacts.ctaButton.label}
        </button> */}
      </div>
    </section>
  );
}
