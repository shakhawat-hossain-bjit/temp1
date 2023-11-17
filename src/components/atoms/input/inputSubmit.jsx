import React from "react";
export default function InputSubmit({ name, id, className, field, value }) {
  return (
    <input
      id={id}
      type="submit"
      name={name}
      className={`${className} cursor-pointer`}
      value={value}
    />
  );
}
