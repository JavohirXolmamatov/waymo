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
        className="object-cover w-full md:h-screen h-[600px] blur-sm"
      />
      <div className="absolute w-full top-0 left-0 right-0 h-full text-white flex flex-col justify-center py-5">
        <div className="md:w-8/10 w-9/10 mx-auto flex md:flex-col flex-row flex-wrap md:gap-8 gap-3 justify-center items-center align-middle text-center ">
          <h1 className="md:text-6xl text-xl w-full font-medium md:px-20">
            Find your ideal journey and uncover unforgettable adventures with us
          </h1>
          <p className="md:text-2xl text-md md:w-5/10 w-full">
            Set off on a journey of discovery and thrill, with us guiding you to
            unforgettable experiences around the world
          </p>
          <div className="md:px-15 w-full flex justify-start align-middle items-center md:gap-8">
            <NavLink to={"/booking"} className="flex mx-auto">
              <div className="bg-white relative text-black flex justify-center md:gap-10 gap-5 align-middle items-center  font-medium md:py-2 py-1 md:px-5 px-3  text-center text-xl rounded-full shadow-md hover:bg-gray-100 transition-all duration-500 ease-in-out group">
                <span className="">Get started</span>
                <span className="flex justify-center align-middle items-center bg-black size-10 rounded-full text-white">
                  <MdOutlineArrowRightAlt className="size-6 -rotate-45" />
                </span>
              </div>
            </NavLink>
          </div>
        </div>
        <div className="w-9/10 mx-auto flex flex-wrap justify-between md:text-start text-center gap-3 md:gap-0 md:mt-20 mt-10 text-white">
          <div className="md:w-3/7 full ">
            <h1 className="md:text-4xl text-xl font-medium md:mb-3 mb-1">
              Waymo
            </h1>
            <p className="md:w-6/10 md:text-2xl text-md">
              Your gateway to the breathtaking beauty, rich culture, and
              thrilling adventures awaiting in Iceland’s stunning landscapes
            </p>
          </div>
          <div className="md:w-1/7 w-full hidden md:block ">
            <h1 className="md:text-4xl text-xl font-medium md:mb-3 mb-1">
              Navigations
            </h1>
            <div className="flex flex-col md:gap-2 md:text-2xl text-md">
              <NavLink to={"/destination"}>Destinations</NavLink>
              <NavLink to={"/gallery"}>Galery</NavLink>
              <NavLink to={"/travel"}>Travel Packages</NavLink>
              <NavLink to={"/contact"}>Contact</NavLink>
            </div>
          </div>
          <div className="md:w-1/7 w-full hidden md:block ">
            <h1 className="md:text-4xl text-xl font-medium md:mb-3 mb-1">
              Social
            </h1>
            <div className="flex flex-col md:gap-2 md:text-2xl text-md">
              <NavLink to={"/destination"}>Instagram</NavLink>
              <NavLink to={"/gallery"}>X</NavLink>
              <NavLink to={"/contact"}>YouTube</NavLink>
            </div>
          </div>
          <div className="md:w-2/7 w-full ">
            <h1 className="md:text-4xl text-xl font-medium md:mb-3 mb-1">
              Contact
            </h1>
            <div className="flex flex-col md:gap-2 md:text-2xl text-md">
              <p>Waymotravel@gmail.com</p>
              <p>(704)-223-0126</p>
              <p>9999 Thornridge Cir. Syracuse.</p>
              <p>Connecticut 35894</p>
            </div>
          </div>
        </div>
        <div className="w-9/10 mx-auto">
          <h1 className="md:text-[200px] text-4xl text-center">WAYMO</h1>
        </div>
        <div className="w-9/10 mx-auto flex justify-between items-center">
          <div className="flex md:flex-row flex-col justify-between md:gap-8 md:text-xl text-xs">
            <span>Privacy policy</span>
            <span>Terms & Conditions</span>
          </div>
          <div className="md:text-xl text-xs">
            <span>@SNAELAND 2024. All Rights Reserved</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
