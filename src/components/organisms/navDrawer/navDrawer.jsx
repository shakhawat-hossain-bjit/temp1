import React from "react";
import UnorderedList from "../../molecules/unorderedList/unorderedList";
import { AiFillCloseSquare } from "react-icons/ai";
import "./navDrawer.scss";

export default function NavDrawer({ show, items, handleClick }) {
  // console.log("myShow ", show);
  return (
    <div className={`${!show ? "hide-nav-drawer" : "show-nav-drawer"}`}>
      <div
        id="drawer-navigation"
        className="absolute  right-0 z-40 h-screen-ss overflow-y-auto transition-transform drawer-s bg-white w-full dark:bg-gray-400"
        aria-labelledby="drawer-navigation-label"
      >
        <div className="flex justify-end " onClick={() => handleClick()}>
          <AiFillCloseSquare size={35} />
        </div>
        <UnorderedList items={items} className="custom-navbar-ul-container" />
      </div>
    </div>
  );
}
