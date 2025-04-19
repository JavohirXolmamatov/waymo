import React from "react";
import {
  alp,
  altay,
  andes,
  carpat,
  caucases,
  desc1,
  himolay,
  pamir,
  rockies,
  tyanShan,
} from "../assets";
import { DestinitionCard } from "../components";

function Destination() {
  return (
    <div className="w-full my-15">
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
      <div className="md:w-8/10 w-9/10 mx-auto">
        <div className="w-full flex justify-between items-center md:gap-y-12 gap-4 flex-wrap">
          <DestinitionCard
            src={himolay}
            title={"Himolay"}
            description={
              "24/7 support for your travel needs — from start to finish."
            }
          />
          <DestinitionCard
            src={alp}
            title={"Alps"}
            description={
              "Round-the-clock assistance for a hassle-free journey."
            }
          />
          <DestinitionCard
            src={andes}
            title={"Andes"}
            description={"Support before, during, and after every trip."}
          />
          <DestinitionCard
            src={rockies}
            title={"Rockies"}
            description={"24/7 help at every step of your adventure."}
          />
          <DestinitionCard
            src={caucases}
            title={"Caucasus"}
            description={"Non-stop support from booking to your return home."}
          />
          <DestinitionCard
            src={carpat}
            title={"Carpathians"}
            description={"We’re here for you — anytime, anywhere."}
          />
          <DestinitionCard
            src={tyanShan}
            title={"Tian Shan"}
            description={"24/7 care for a seamless travel experience."}
          />
          <DestinitionCard
            src={altay}
            title={"Altai"}
            description={
              "Help at every moment, wherever your travels take you."
            }
          />
          <DestinitionCard
            src={pamir}
            title={"Pamir"}
            description={"Around-the-clock assistance for stress-free travel."}
          />
        </div>
      </div>
    </div>
  );
}

export default Destination;
