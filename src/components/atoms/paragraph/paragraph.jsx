import React from "react";

export default function Paragraph({ className = "", children }) {
  return <p className={`${className} text-base`}>{children}</p>;
}
