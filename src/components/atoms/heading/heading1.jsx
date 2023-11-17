import React from "react";

export default function Heading1({ className, children, styles }) {
  return (
    <h1 className={`${className} text-3xl font-bold capitalize`}>{children}</h1>
  );
}
