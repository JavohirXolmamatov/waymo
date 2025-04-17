import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="h-[80px] w-full bg-[#122525] text-white/90">
      <nav className="w-9/10 h-full mx-auto">
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
    </div>
  );
}

export default Header;
