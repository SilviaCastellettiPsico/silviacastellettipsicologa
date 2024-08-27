import React from "react";
import "./style.css";

export function Card({ header, image, title, children, footer }) {
  return (
    <div className="card-box">
      {image ? (
        <div
          style={{
            marginBottom: "10px",
          }}
        >
          <img width="40" height="40" src={image.src} alt={image.alt} />
        </div>
      ) : null}

      {header ? (
        <div
          style={{
            fontWeight: "bold",
            marginBottom: "10px",
          }}
        >
          {header}
        </div>
      ) : null}
      {title ? (
        <div
          style={{
            fontWeight: "bold",
            marginBottom: "10px",
          }}
        >
          {title}
        </div>
      ) : null}
      {children ? (
        <div
          style={{
            fontSize: "14px",
            marginBottom: footer ? "10px" : "",
            flex: "1",
            textAlign: "justify",
          }}
        >
          {children}
        </div>
      ) : null}
      {footer ? (
        <div
          style={{
            fontSize: "14px",
            margin: "auto",
          }}
        >
          {footer}
        </div>
      ) : null}
    </div>
  );
}
