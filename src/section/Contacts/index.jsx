import React from "react";
import useCheckSmallScreen from "../../hook/useCheckSmallScreen";
import { useLocalDataSource } from "./data";
import "./style.css";

export function Contacts({ sectionId }) {
  const isSmallScreen = useCheckSmallScreen();
  const data = useLocalDataSource();
  const contacts = data.allContactsJson.nodes[0];
  const { html } = data.markdownRemark;

  function openEmailClient(email) {
    window.location.href = "mailto:" + email;
  }

  function openTelephoneClient(telephoneNumber) {
    window.location.href = "tel:" + telephoneNumber;
  }

  return (
    <section className="section-contacts">
      <div id={sectionId} className="section-container">
        <div className="section-title">{contacts.title}</div>
        <div
          style={isSmallScreen ? {} : { textAlign: "center" }}
          className="section-description"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        {isSmallScreen ? (
          <button
            type="button"
            className="btn btn-info"
            style={{ marginBottom: "10px" }}
            onClick={() => openTelephoneClient(contacts.ctaButton1.phoneNumber)}
          >
            {contacts.ctaButton1.label}
          </button>
        ) : null}
        <button
          type="button"
          className="btn btn-success"
          onClick={() => openEmailClient(contacts.ctaButton2.url)}
        >
          {contacts.ctaButton2.label}
        </button>
      </div>
    </section>
  );
}
