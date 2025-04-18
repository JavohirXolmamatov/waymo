import React from "react";
import { footer } from "../assets";
import { NavLink } from "react-router-dom";
import { MdOutlineArrowRightAlt } from "react-icons/md";

function Footer() {
  return (
    <div className="relative w-full ">
      <img
        src={footer}
        alt="footer images"
        className="object-cover w-full h-screen blur-sm"
      />
      <div className="absolute w-full top-0 left-0 right-0 h-full text-white flex flex-col justify-center py-5">
        <div className="w-8/10 mx-auto flex flex-col gap-8 justify-center items-center align-middle text-center ">
          <h1 className="text-6xl font-medium px-20">
            Find your ideal journey and uncover unforgettable adventures with us
          </h1>
          <p className="text-2xl w-5/10">
            Set off on a journey of discovery and thrill, with us guiding you to
            unforgettable experiences around the world
          </p>
          <div className="px-15 flex justify-start align-middle items-center gap-8">
            <NavLink to={"/booking"}>
              <div className="bg-white relative text-black flex justify-center gap-10 align-middle items-center  font-medium py-2 px-5  text-center text-xl rounded-full shadow-md hover:bg-gray-100 transition-all duration-500 ease-in-out group">
                <span className="">Get started</span>
                <span className="flex justify-center align-middle items-center bg-black size-10 rounded-full text-white">
                  <MdOutlineArrowRightAlt className="size-6 -rotate-45" />
                </span>
              </div>
            </NavLink>
          </div>
        </div>
        <div className="w-9/10 mx-auto flex justify-between mt-20 text-white">
          <div className="w-3/7 ">
            <h1 className="text-4xl font-medium mb-3">Waymo</h1>
            <p className="w-6/10 text-2xl">
              Your gateway to the breathtaking beauty, rich culture, and
              thrilling adventures awaiting in Iceland’s stunning landscapes
            </p>
          </div>
          <div className="w-1/7 ">
            <h1 className="text-4xl font-medium mb-3">Navigations</h1>
            <div className="flex flex-col gap-2 text-2xl">
              <NavLink to={"/destination"}>Destinations</NavLink>
              <NavLink to={"/gallery"}>Galery</NavLink>
              <NavLink to={"/travel"}>Travel Packages</NavLink>
              <NavLink to={"/contact"}>Contact</NavLink>
            </div>
          </div>
          <div className="w-1/7 ">
            <h1 className="text-4xl font-medium mb-3">Social</h1>
            <div className="flex flex-col gap-2 text-2xl">
              <NavLink to={"/destination"}>Instagram</NavLink>
              <NavLink to={"/gallery"}>X</NavLink>
              <NavLink to={"/contact"}>YouTube</NavLink>
            </div>
          </div>
          <div className="w-2/7 ">
            <h1 className="text-4xl font-medium mb-3">Contact</h1>
            <div className="flex flex-col gap-2 text-2xl">
              <p>Waymotravel@gmail.com</p>
              <p>(704)-223-0126</p>
              <p>9999 Thornridge Cir. Syracuse.</p>
              <p>Connecticut 35894</p>
            </div>
          </div>
        </div>
        <div className="w-9/10 mx-auto">
          <h1 className="text-[200px] text-center">WAYMO</h1>
        </div>
        <div className="w-9/10 mx-auto flex justify-between">
          <div className="flex justify-between gap-8 text-xl">
            <span>Privacy policy</span>
            <span>Terms & Conditions</span>
          </div>
          <div className="text-xl">
            <span>@SNAELAND 2024. All Rights Reserved</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
