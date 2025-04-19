import React from "react";

function DestinitionCard({ src, title, description }) {
  return (
    <div className="relative md:h-[600px] h-[300px] md:w-[470px] w-full">
      <img
        src={src}
        alt={src}
        className="object-cover w-full h-full rounded-xl"
      />
      <div className="absolute bottom-1 text-white left-0 w-full p-5">
        <h1 className="text-3xl font-medium">{title}</h1>
        <p className="text-white/90 ">{description}</p>
      </div>
    </div>
  );
}

export default DestinitionCard;
