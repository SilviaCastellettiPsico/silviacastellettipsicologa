import React from "react";

export function Card({ title, children, footer }) {
  return (
    <div
      style={{
        backgroundColor: "#e8f8ef",
        /* border: "1px solid #000000", */
        borderRadius: "16px",
        padding: "15px",
        minHeight: "370px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {title ? (
        <div
          style={{
            fontSize: "16px",
            fontWeight: "600",
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
