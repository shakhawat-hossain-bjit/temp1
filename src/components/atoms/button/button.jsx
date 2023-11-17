import React from "react";

export default function Button({ className, children, size, handleClick }) {
  return (
    <button
      className={`${className} custom-${size}-btn  `}
      onClick={(e) => handleClick(e)}
    >
      {" "}
      {children}{" "}
    </button>
  );
}
