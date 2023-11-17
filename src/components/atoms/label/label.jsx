import React, { Children } from "react";

export default function Label({ htmlFor, className, children }) {
  return (
    <label htmlFor={htmlFor} className={className}>
      {children}
    </label>
  );
}
