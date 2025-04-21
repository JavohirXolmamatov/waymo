import React from "react";
import { desc1 } from "../assets";
import { TravelCard } from "../components";

function Travel() {
  return (
    <div className="w-full">
      <div className="w-full md:mt-20 relative">
        <img src={desc1} alt="desc1" className="object-cover md:h-96 w-full" />
        <div className="absolute h-full w-full top-0 left-0 flex justify-center items-center">
          <h1 className="md:text-8xl text-4xl text-white">Travel Packages</h1>
        </div>
      </div>
      <div className="md:w-8/10 w-9/10 mx-auto my-5 flex md:flex-row flex-col justify-between items-center">
        <div className="overflow-scroll hide-scrollbar xl:overflow-hidden w-full md:text-2xl text-xl flex justify-start md:gap-16 gap-5 items-center font-medium md:my-8 my-4">
          <span className="flex gap-5">
            All <span className="hidden md:block">Packages</span>
          </span>
          <span>America</span>
          <span>Turkey</span>
          <span>Japan</span>
          <span>Dubai</span>
          <span>Spain</span>
          <span>Italy</span>
        </div>
        <div className="relative w-full md:w-fit">
          <span className="absolute inset-y-0 right-5 flex items-center pl-3">
            🔍
          </span>
          <input
            type="text"
            className="border-1 md:py-3 py-2 md:px-4 px-2 rounded-xl md:text-xl md:w-68 w-full border-black/50"
            placeholder="Search"
          />
        </div>
      </div>

      <div className="md:w-8/10 w-9/10 mx-auto flex md:flex-row flex-col gap-10 flex-wrap justify-between items-center my-10 md:px-5">
        <TravelCard />
        <TravelCard />
        <TravelCard />
        <TravelCard />
        <TravelCard />
        <TravelCard />
        <TravelCard />
        <TravelCard />
      </div>
    </div>
  );
}

export default Travel;
