import React from "react";
import "./style.css";

interface TextAreaProps {
  title?: string;
  text: string;
  textError?: string;
  placeholder: string;
  handleChange?: (event: any) => void;
}
export default function TextArea({
  title,
  text,
  textError,
  placeholder,
  handleChange,
}: TextAreaProps) {
  return (
    <div className="textarea-container">
      <label className="textarea-label">{title}</label>
      <textarea
        className="textarea-box"
        value={text === null ? undefined : text}
        onChange={handleChange}
        placeholder={placeholder}
        rows={5}
      />
      {textError !== undefined ? (
        <div style={{ color: "#ff0000", fontSize: "10px" }}>{textError}</div>
      ) : null}
    </div>
  );
}
