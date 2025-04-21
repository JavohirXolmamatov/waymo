import React from "react";
import { travel1 } from "../assets";
import { IoLocationOutline } from "react-icons/io5";

function TravelCard() {
  return (
    <div className="md:w-[450px] w-full h-auto rounded-xl overflow-hidden border-1">
      <img
        src={travel1}
        alt={travel1}
        className="w-full  object-cover  md:h-[400px]"
      />
      <div className="p-5">
        <h1 className="text-xl font-medium">
          American Adventures: A Road Trip Across the USA
        </h1>
        <div className="my-5 flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 text-lg">
              <IoLocationOutline />
              <span>Destination:</span>
            </div>
            <span className="text-black/70">America</span>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 text-lg">
              <IoLocationOutline />
              <span>Duration:</span>
            </div>
            <span className="text-black/70">8 days/7 nights</span>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 text-lg">
              <IoLocationOutline />
              <span>Dates:</span>
            </div>
            <span className="text-black/70">
              Available from Aprel to October
            </span>
          </div>
        </div>

        <div className="flex justify-between font-medium text-xl">
          <span>Price:</span>
          <span>$2500</span>
        </div>
      </div>
    </div>
  );
}

export default TravelCard;
