import React from "react";
import { desc1 } from "../assets";

function Gallery() {
  return (
    <div className="w-full">
      <div className="w-full mt-20 relative">
        <img src={desc1} alt="desc1" className="object-cover h-96 w-full" />
        <div className="absolute h-full w-full top-0 left-0 flex justify-center items-center">
          <h1 className="text-8xl text-white">Explore Destinations</h1>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
