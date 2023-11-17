import React, { useEffect, useState } from "react";
import UnorderedList from "../../molecules/unorderedList/unorderedList";
import "./navbar.scss";
import Button from "../../atoms/button/button";
import { RxHamburgerMenu } from "react-icons/rx";
import NavDrawer from "../navDrawer/navDrawer";

export default function Navbar() {
  const [show, setShow] = useState(false);
  const showNavbar = (e) => {
    // console.log(e);
    console.log("clicked");
    setShow(!show);
  };

  // window.addEventListener("resize", () => {
  //   // type width = number;
  //   const { innerWidth } = window;
  //   console.log(innerWidth);
  //   if (innerWidth > 767) {
  //     setShow(false);
  //   }
  // });

  //   const { innerWidth } = window;
  //   console.log(innerWidth);

  return (
    <div className={`${className} container mx-auto  px-6  md:px-8`}>
      <div>{/* logo */}</div>
      <div>
        <div className="flex justify-end options ">
          <Button
            size="xs"
            className="md:hidden px-3 py-2"
            handleClick={showNavbar}
          >
            <RxHamburgerMenu size={30} />
          </Button>
          <UnorderedList
            items={items}
            className="custom-navbar-ul-container hidden  md:flex "
          />
          {/* <div className={`${!show ? "hidden" : "block"}`}>
            <UnorderedList
              items={items}
              className="custom-navbar-ul-container"
            />
          </div> */}
        </div>
      </div>
      <NavDrawer show={show} items={items} handleClick={showNavbar} />
    </div>
  );
}
