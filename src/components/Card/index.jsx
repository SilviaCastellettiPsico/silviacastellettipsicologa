import React from "react";
import "./style.css";

export function Card({ header, title, children, footer }) {
  return (
    <div className="card-box">
      {header ? (
        <div
          style={{
            fontWeight: "bold",
            marginBottom: "10px",
            flex: "1",
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
            flex: "1",
          }}
        >
          {title}
        </div>
      ) : null}
      {children ? (
        <div
          style={{
            fontSize: "14px",
            marginBottom: "10px",
            flex: "8",
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
