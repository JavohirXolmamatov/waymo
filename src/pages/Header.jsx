import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-[80px] w-full bg-[#122525] text-white/90">
      <nav className="w-9/10 h-full mx-auto hidden md:block">
        <ul className="h-full w-full flex gap-8 justify-center align-middle items-center text-xl font-medium">
          <li className="mr-auto text-3xl">
            <NavLink to={"/"}>Waymo</NavLink>
          </li>
          <li className="">
            <NavLink to={"/destination"}>Destination</NavLink>
          </li>
          <li className="">
            <NavLink to={"/gallery"}>Gallery</NavLink>
          </li>
          <li className="">
            <NavLink to={"/travel"}>Travel Packages</NavLink>
          </li>
          <li className="">
            <NavLink to={"/contact"}>Contact</NavLink>
          </li>
          <select name="languages" className="ml-auto bg-[#122525]">
            <option value="en">EN</option>
            <option value="ru">RU</option>
            <option value="uz">UZ</option>
          </select>
        </ul>
      </nav>

      {/* Mobile */}
      <nav className="w-full h-full mx-auto md:hidden relative">
        <ul className="w-9/10 mx-auto h-full flex justify-between items-center gap-6">
          <li className="text-2xl font-medium">
            <NavLink to={"/"}>Waymo</NavLink>
          </li>
          <select name="languages" className="ml-auto bg-[#122525]">
            <option value="en">EN</option>
            <option value="ru">RU</option>
            <option value="uz">UZ</option>
          </select>
          <button
            onClick={(e) => setIsOpen(!isOpen)}
            className={` text-2xl font-medium ${
              isOpen ? "rotate-0" : "rotate-90"
            } transition-all duration-300 ease-in`}
          >
            {isOpen ? "X" : "|||"}
          </button>
        </ul>
        <div
          className={`absolute bg-[#122525] h-screen w-1/2 top-20 ${
            isOpen ? "left-0" : "-left-1/2"
          } transition-all duration-300 ease-in`}
        >
          <ul className="h-full w-full flex flex-col gap-4 py-10 px-5  text-xl font-medium">
            <li className="">
              <NavLink to={"/destination"}>Destination</NavLink>
            </li>
            <li className="">
              <NavLink to={"/gallery"}>Gallery</NavLink>
            </li>
            <li className="">
              <NavLink to={"/travel"}>Travel Packages</NavLink>
            </li>
            <li className="">
              <NavLink to={"/contact"}>Contact</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
