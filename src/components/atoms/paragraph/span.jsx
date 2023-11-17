import React from "react";

export default function Span({ className, children, styles }) {
  return (
    <span className={`${className} text-sm inline-block`}>{children}</span>
  );
}
