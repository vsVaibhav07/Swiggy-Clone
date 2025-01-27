import React from "react";
import { RiDiscountPercentLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineHelpOutline } from "react-icons/md";
import { BsCart2 } from "react-icons/bs";

const Nav = () => {
  const links = [
    { icon: <RiDiscountPercentLine />, name: "Offers", sup: "new" },
    { icon: <MdOutlineHelpOutline />, name: "Help" },
    { icon: <FaRegUser />, name: "Sign in" },
    { icon: <BsCart2 />, name: "Cart", sup: 0 },
  ];

  return (
    <div className="w-full  bg-gray-100 md:bg-transparent h-screen md:h-auto md:shadow-none shadow-lg flex flex-col md:flex-row items-center md:items-start md:justify-end md:space-x-6 pt-8 md:pt-0">
      <nav className="flex justify-center  flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 w-full md:w-auto">
        {links.map((link, index) => (
          <div
            key={index}
            className="relative flex  items-center max-w-52 md:max-w-max  space-x-3 p-4 md:p-2 rounded-lg bg-white md:bg-transparent shadow-md md:shadow-none hover:bg-orange-100 md:hover:bg-transparent hover:shadow-lg md:hover:shadow-none transition duration-300 cursor-pointer group"
          >
            <div className="relative flex items-center text-xl text-orange-500 group-hover:text-orange-700">
              {link.icon}
              {link.sup !== undefined && (
                <sup className="absolute top-0 -right-2 px-1 text-xs bg-orange-500 text-white rounded-full group-hover:bg-orange-700">
                  {link.sup}
                </sup>
              )}
            </div>
            <span className="text-gray-700 font-medium group-hover:text-orange-700">
              {link.name}
            </span>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Nav;
