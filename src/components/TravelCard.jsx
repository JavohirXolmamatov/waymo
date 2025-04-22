import React from "react";
import { IoLocationOutline } from "react-icons/io5";

function TravelCard({
  src,
  title,
  destination,
  price,
  duration,
  dates,
  index,
}) {
  return (
    <div
      className="md:w-[450px] w-full h-auto rounded-xl overflow-hidden border-1"
      key={index}
    >
      <img
        src={src}
        alt={src}
        className="w-full  object-cover  md:h-[400px] h-[300px]"
      />
      <div className="p-5">
        <h1 className="text-xl font-medium">{title}</h1>
        <div className="my-5 flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 text-lg">
              <IoLocationOutline />
              <span>Destination:</span>
            </div>
            <span className="text-black/70">{destination}</span>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 text-lg">
              <IoLocationOutline />
              <span>Duration:</span>
            </div>
            <span className="text-black/70">{duration}</span>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 text-lg">
              <IoLocationOutline />
              <span>Dates:</span>
            </div>
            <span className="text-black/70">{dates}</span>
          </div>
        </div>

        <div className="flex justify-between font-medium text-xl">
          <span>Price:</span>
          <span>{price}</span>
        </div>
      </div>
    </div>
  );
}

export default TravelCard;
