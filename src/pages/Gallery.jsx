import React from "react";
import { america, gallery, japan1, japan2, japan3, japan4 } from "../assets";
import { Swipers } from "../components";

function Gallery() {
  return (
    <div className="w-full my-10">
      <div className="w-full md:mt-20 relative">
        <img
          src={gallery}
          alt="desc1"
          className="object-cover md:h-96 w-full"
        />
        <div className="absolute h-full w-full top-0 left-0 flex justify-center items-center">
          <h1 className="md:text-8xl text-4xl text-white">Travel Gallery</h1>
        </div>
      </div>
      <div className="md:w-8/10 w-9/10 mx-auto my-5 flex justify-between items-center">
        <div className="text-black/50 text-2xl flex justify-start gap-5 items-center font-medium my-8">
          <div className="md:w-28 w-14 h-0.5 bg-black/50"></div>
          <h1>Gallery</h1>
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

      <div className="md:w-8/10 w-9/10 md:h-[640px] mx-auto flex flex-col md:grid md:grid-rows-2 grid-rows-3 md:grid-cols-3 grid-cols-1 md:gap-8 gap-4 justify-center md:my-15 my-5">
        <div className="w-full md:h-full h-[320px] rounded-md md:row-span-2">
          <img
            src={japan1}
            alt="japan1"
            className="rounded-md object-cover h-full w-full"
          />
        </div>
        <div className="w-full md:h-full h-[320px] rounded-md">
          <img
            src={japan3}
            alt="japan2"
            className="rounded-md object-cover h-full w-full"
          />
        </div>
        <div className="w-full md:h-full h-[320px] rounded-md md:row-span-2">
          <img
            src={japan4}
            alt="japan3"
            className="rounded-md object-cover h-full w-full"
          />
        </div>
        <div className="w-full md:h-full h-[320px] rounded-md ">
          <img
            src={japan2}
            alt="japan4"
            className="rounded-md object-cover h-full w-full"
          />
        </div>
      </div>

      <div className="w-full bg-[#F3F3F3] py-10">
        <div className="md:w-8/10 w-9/10 mx-auto">
          <h1 className="md:text-5xl text-3xl text-center pb-10">
            Journey in <span className="font-medium"> America</span>
          </h1>
          <div className="md:h-[600px] h-[300px] w-full">
            <Swipers
              slidesPerView={1}
              images={[america, japan2, japan3, japan4]}
            />
          </div>
        </div>
      </div>

      <div className="md:w-8/10 w-9/10 mx-auto py-5">
        <h1 className="md:text-5xl text-3xl text-center my-5">
          Journey in <span className="font-medium"> Turkey</span>
        </h1>
        <div className="h-[300px] w-full">
          <Swipers
            slidesPerView={3}
            images={[japan1, japan2, japan3, japan4, japan1, japan2, japan3]}
          />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
