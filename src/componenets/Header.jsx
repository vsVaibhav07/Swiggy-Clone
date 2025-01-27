import React, { useState, useContext, useEffect } from "react";
import { RxCaretDown } from "react-icons/rx";
import { IoSearch } from "react-icons/io5";

import { SearchContext } from "../contexts/SearchContext";
import Nav from "./Nav";

const Header = () => {
  const { search, setSearch } = useContext(SearchContext);
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const [toggle, setToggle] = useState(false);

  const showSideMenu = () => {
    setToggle(true);
  };
  const hideSideMenu = () => setToggle(false);

  return (
    <>
      <div
        className="black-overlay md:hidden w-full h-full fixed duration-500 z-30"
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
        }}
        onClick={hideSideMenu}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="  bg-gray-100  h-full overline w-2/3 absolute duration-[400ms]"
          style={{
            left: toggle ? "0%" : "-100%",
          }}
        >
          <div className="my-8">
            <div className="flex items-center space-x-4">
              <img src="images/logo.png" alt="Logo" className="w-12" />
              <div className="flex items-center space-x-1">
                <span className="font-bold top-0 text-lg">Lucknow</span>
              </div>
            </div>
            <div className="my-20">
            <Nav  />
            </div>
            
          </div>
        </div>
      </div>

      <header className="p-3 shadow-md sticky top-0 z-20 bg-white flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img src="images/logo.png" alt="Logo" className="w-12" />
          <div className="flex items-center space-x-1">
            <span className="font-bold text-lg">Lucknow</span>
            <RxCaretDown
              onClick={showSideMenu}
              className="cursor-pointer block md:hidden"
            />
          </div>
        </div>

        <div className="relative flex-1 mx-5 max-w-lg">
          <input
            type="text"
            placeholder="Search..."
            className="w-full border border-gray-300 rounded-full px-4 py-2 focus:ring-2 focus:ring-orange-500 outline-none"
            onChange={handleSearchChange}
          />
          <IoSearch className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500" />
        </div>

        <div className="md:flex hidden ">
          <Nav />
        </div>
      </header>
    </>
  );
};

export default Header;
