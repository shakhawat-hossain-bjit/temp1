import React from "react";

export default function InputBox({
  name,
  id,
  className,
  type,
  placeholder,
  autoComplete,
  iconPosition,
  showText,
  field,
}) {
  return (
    <input
      id={id}
      type={`${showText == false ? "password" : type}`}
      placeholder={placeholder}
      autoComplete={autoComplete}
      name={name}
      className={`${className}  ${iconPosition == "left" ? "pl-10" : "pr-10"}`}
      {...field}
    />
  );
}
