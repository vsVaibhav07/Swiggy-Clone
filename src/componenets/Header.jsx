import React, { useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import { IoSearch } from "react-icons/io5";
import { RiDiscountPercentLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineHelpOutline } from "react-icons/md";
import { BsCart2 } from "react-icons/bs";


const Header = () => {
  const [toggle, setToggle] = useState(false);

  const showSideMenu = () => {
    setToggle(true);
  };
  const hideSideMenu = () => setToggle(false);

  const links = [
    { icon: <IoSearch />, name: "Search" },
    { icon: <RiDiscountPercentLine />, name: "Offers", sup:"new" },
    { icon: <MdOutlineHelpOutline/> , name: "Help" },
    { icon: <FaRegUser  />, name: "Sign in" },
    { icon: < BsCart2/>, name: "Cart", sup:0 },
  ];

  return (
    <>
      <div
        className="black-overlay w-full h-full fixed duration-500 z-30"
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
        }}
        onClick={hideSideMenu}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="  bg-white h-full overline w-1/3 absolute duration-[400ms]"
          style={{
            left: toggle ? "0%" : "-100%",
          }}
        ></div>
      </div>

      <header className="p-2 shadow-xl flex sticky top-0 z-20 bg-white">
        <div className="max-w-[1200px] mx-auto w-full flex items-center">
          <div className="w-[100px]">
            <img src="images/logo.png" alt="" />
          </div>
          <div className="">
            <span className="font-bold border-b-[3px] border-black">
              Lucknow{" "}
            </span>{" "}
            UP, India
          </div>
          <div className="font-extrabold">
            {" "}
            <RxCaretDown className="cursor-pointer" onClick={showSideMenu} />
          </div>
        </div>
        <nav className="flex list-none gap-10 items-center mx-5   text-lg font-semibold ">
          {links.map((link, index) => {
            return (
              <li key={index} className=" cursor-pointer hover:text-orange-500 w-max flex items-center gap-2">
                {link.icon}
                {link.name} <sup>{link.sup}</sup>
              </li>
            );
          })}
        </nav>
      </header>
    </>
  );
};

export default Header;
