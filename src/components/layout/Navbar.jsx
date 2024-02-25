import React, { useState } from "react";
import LogoImg from "../../assets/logo/logo.jpg";
import { FaCaretDown } from "react-icons/fa";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
export const Menus = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "Product",
    link: "/product",
  },
  {
    id: 3,
    name: "About us",
    link: "/about-us",
  },
  {
    id: 4,
    name: "News",
    link: "/news",
  },
  {
    id: 5,
    name: "Contact us",
    link: "/contact-us",
  },
  {
    id: 6,
    name: "Join us",
    link: "/join-us",
  },
];
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleLanguage = () => {};
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <header className="mt-5 mb-20">
      <nav className="container h-[70px] py-2">
        {/* logo section  */}
        <div className="flex items-center justify-between gap-5">
          <a href="#" className="space-y-6">
            <img
              src={LogoImg}
              alt="DEMETER INTERNATIONAL"
              className="w-[245px]"
            />
            <h1 className="italic font-bold text-sm sm:text-md tracking-wider">
              DEMETER INTERNATIONAL., LTD
            </h1>
          </a>
          {/* navigation section  */}
          <div className="hidden md:block">
            <ul className="flex flex-wrap items-center gap-4">
              {Menus.map((data, index) => {
                return (
                  <li
                    key={index}
                    className="cursor pointer font-bold text-sm md:text-md  bg-primary rounded-3xl px-4 py-2"
                  >
                    <a href={data.link} className="">
                      {data.name}
                    </a>
                  </li>
                );
              })}
              <div className="group relative">
                <div className="text-white bg-[#cdb0b0] font-bold rounded-xl group-hover:rounded-t-xl group-hover:rounded-b-none px-4 py-2  cursor-pointer hover:bg-slate-700 w-full ">
                  <a
                    href="#"
                    className="flex items-center gap-[2px]"
                    onClick={toggleLanguage}
                  >
                    English
                    <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                  </a>
                </div>

                <div className="hidden bg-[#cdb0b0] text-white font-bold  group-hover:block hover:bg-slate-700 absolute z-[9999] -bottom-[100%] w-full rounded-b-xl px-4 py-2  ">
                  <a href="#" className="" onClick={toggleLanguage}>
                    Việt Nam
                  </a>
                </div>
              </div>
            </ul>
          </div>
          {/* Mobile view Drawer  */}
          <div className="flex items-center gap-4 md:hidden ">
            {/* Mobile Hamburger icon */}
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className=" cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </div>
        <ResponsiveMenu showMenu={showMenu} />
      </nav>
    </header>
  );
};

export default Navbar;
