import React from "react";
import "./style.css";

export function Card({ title, children, footer }) {
  return (
    <div className="card-box">
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
            marginTop: "auto",
          }}
        >
          {footer}
        </div>
      ) : null}
    </div>
  );
}
