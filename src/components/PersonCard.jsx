import React from "react";

function PersonCard({ img, name, description }) {
  return (
    <div className="w-96 h-50 flex flex-col gap-5 p-5 border-1 border-black/30 rounded-2xl md:mx-3 mx-2">
      <div className="flex justify-start  items-center md:gap-3 gap-2">
        <img
          src={img}
          alt={img}
          className="rounded-full object-cover size-10 bg-red-500"
        />
        <h1 className="text-xl font-medium">{name}</h1>
      </div>
      <p className="w-full">{description}</p>
    </div>
  );
}

export default PersonCard;
