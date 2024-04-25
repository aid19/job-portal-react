// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { BiHomeAlt2 } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { PiChatCircleBold } from "react-icons/pi";
import { IoPricetagsOutline } from "react-icons/io5";

const nav = [
  {
    title: "Jobs",
    href: "#",
    Icon: BiHomeAlt2,
  },
  {
    title: "Companies",
    href: "#",
    Icon: FiSearch,
  },
  {
    title: "About",
    href: "#",
    Icon: IoPricetagsOutline,
  },
  {
    title: "Contact",
    href: "#",
    Icon: PiChatCircleBold,
  },
  {
    title: "Blog",
    href: "#",
    Icon: PiChatCircleBold,
  },
  {
    title: "Login",
    href: "#",
    Icon: PiChatCircleBold,
  },
];

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navBar flex justify-between items-center p-[3rem] ">
      <div className="logoDiv">
        <h1 className="logo text-[25px] text-greenColor">
          <strong>Jobs</strong>Portal
        </h1>
      </div>
      {/* Burger menu icon for smaller screens */}
      <div className="burger-menu lg:hidden" onClick={toggleMenu}>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </div>
      {/* Menu for larger screens */}
      <div className={`menu lg:flex gap-8 ${isMenuOpen ? 'flex flex-col' : 'hidden'}`}>
        <li className="menuList text-[#6f6f6f] hover:text-greenColor">Jobs</li>
        <li className="menuList text-[#6f6f6f] hover:text-greenColor">Companies</li>
        <li className="menuList text-[#6f6f6f] hover:text-greenColor">About</li>
        <li className="menuList text-[#6f6f6f] hover:text-greenColor">Contact</li>
        <li className="menuList text-[#6f6f6f] hover:text-greenColor">Blog</li>
        <li className="menuList text-[#6f6f6f] hover:text-greenColor">Login</li>
      </div>
    </div>
  );
};

export default NavBar;
