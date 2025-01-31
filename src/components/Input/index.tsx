import React from "react";
import "./style.css";

interface InputProps {
  styleContainer?: React.CSSProperties;
  label?: string;
  text: string;
  isTextTitle?: boolean;
  textError?: string;
  placeholder: string;
  isReadOnly?: boolean;
  handleChange?: (event: any) => void;
}
export default function Input({
  styleContainer,
  label,
  text,
  isTextTitle = false,
  textError,
  placeholder,
  isReadOnly = false,
  handleChange,
}: InputProps) {
  return (
    <div className="input-container" style={styleContainer}>
      {label ? <label className="input-label">{label}</label> : null}
      <input
        className={!isTextTitle ? "input-box" : "input-box-title"}
        value={text ?? ""}
        onChange={handleChange}
        placeholder={placeholder}
        readOnly={isReadOnly}
      />
      {textError !== undefined ? (
        <div style={{ color: "#ff0000", fontSize: "10px" }}>{textError}</div>
      ) : null}
    </div>
  );
}
