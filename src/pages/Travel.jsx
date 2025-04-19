import React from "react";
import { desc1 } from "../assets";

function Travel() {
  return (
    <div className="w-full">
      <div className="w-full md:mt-20 relative">
        <img src={desc1} alt="desc1" className="object-cover md:h-96 w-full" />
        <div className="absolute h-full w-full top-0 left-0 flex justify-center items-center">
          <h1 className="md:text-8xl text-4xl text-white">
            Explore Destinations
          </h1>
        </div>
      </div>
      <div className="md:w-8/10 w-9/10 mx-auto my-5 flex justify-between items-center">
        <div className="text-black/50 text-2xl flex justify-start gap-5 items-center font-medium my-8">
          <div className="md:w-28 w-14 h-0.5 bg-black/50"></div>
          <h1>About Us</h1>
        </div>
        <div className="relative">
          <span className="absolute inset-y-0 right-5 flex items-center pl-3">
            🔍
          </span>
          <input
            type="text"
            className="border-1 md:py-3 py-2 md:px-4 px-2 rounded-xl md:text-xl md:w-68 w-40 border-black/50"
            placeholder="Search"
          />
        </div>
      </div>
    </div>
  );
}

export default Travel;
