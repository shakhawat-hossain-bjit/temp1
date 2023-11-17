import React from "react";

export default function Img({ src, alt, className, style }) {
  //   console.log(alt);
  return <img src={src} className={className} style={style} alt={alt} />;
}
