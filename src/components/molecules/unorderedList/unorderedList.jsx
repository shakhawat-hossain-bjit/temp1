import React from "react";
import Li from "../../atoms/listItem/Li";
import "./unorderedList.scss";
import { Link } from "react-router-dom";

export default function UnorderedList({ items, className, style }) {
  return (
    <ul className={className}>
      {items?.map((x) => (
        <Link to={x?.route} key={x?.route}>
          <Li>{x?.label}</Li>
        </Link>
      ))}
    </ul>
  );
}
