import React, { useEffect, useState } from "react";
import {
  america,
  andes,
  desc1,
  frame1,
  frame2,
  japan1,
  japan2,
  pamir,
  rockies,
  travel1,
  tyanShan,
} from "../assets";
import { TravelCard } from "../components";

function Travel() {
  const [newItem, setNewItem] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const travelPackages = [
    {
      img: travel1,
      title: "American Adventures: A Road Trip Across the USA",
      destination: "America",
      duration: "8 days/7 nights",
      date: "Available from April to October",
      price: "$2500",
    },
    {
      img: america,
      title: "Romantic Paris Getaway",
      destination: "France",
      duration: "5 days/4 nights",
      date: "Available year-round",
      price: "$1800",
    },
    {
      img: japan1,
      title: "Tokyo Explorer: Discover Japan’s Capital",
      destination: "Japan",
      duration: "7 days/6 nights",
      date: "Available March to November",
      price: "$2300",
    },
    {
      img: tyanShan,
      title: "Wild Safari in Kenya",
      destination: "Kenya",
      duration: "6 days/5 nights",
      date: "Available June to September",
      price: "$2700",
    },
    {
      img: andes,
      title: "Luxury Retreat in the Maldives",
      destination: "Maldives",
      duration: "5 days/4 nights",
      date: "Available year-round",
      price: "$3500",
    },
    {
      img: pamir,
      title: "Bali Escape: Beaches & Temples",
      destination: "Indonesia",
      duration: "7 days/6 nights",
      date: "Available April to October",
      price: "$2000",
    },
    {
      img: japan2,
      title: "Cultural Tour of Italy",
      destination: "Italy",
      duration: "10 days/9 nights",
      date: "Available March to November",
      price: "$3200",
    },
    {
      img: rockies,
      title: "Mysteries of Ancient Egypt",
      destination: "Egypt",
      duration: "6 days/5 nights",
      date: "Available October to April",
      price: "$2100",
    },
    {
      img: frame1,
      title: "Icelandic Adventures: Northern Lights & More",
      destination: "Iceland",
      duration: "5 days/4 nights",
      date: "Available September to March",
      price: "$2900",
    },
    {
      img: frame2,
      title: "Thailand Cultural and Culinary Tour",
      destination: "Thailand",
      duration: "8 days/7 nights",
      date: "Available November to April",
      price: "$2200",
    },
  ];

  useEffect(() => {
    setNewItem(travelPackages); // Boshida barcha paketlar ko‘rsatiladi
  }, []);

  const handleFilter = (e) => {
    const value = e.target.textContent;

    if (value === "All" || value === "AllPackages") {
      setNewItem(travelPackages);
    } else {
      const filtered = travelPackages.filter(
        (item) => item.destination.toLowerCase() === value.toLowerCase()
      );
      setNewItem(filtered);
    }
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    const filtered = travelPackages.filter(
      (item) =>
        item.title.toLowerCase().includes(value.toLowerCase()) ||
        item.destination.toLowerCase().includes(value.toLowerCase())
    );

    setNewItem(filtered);
  };

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
          {["All", "America", "Turkey", "Japan", "Dubai", "Spain", "Italy"].map(
            (destination) => (
              <span
                key={destination}
                onClick={handleFilter}
                className="cursor-pointer"
              >
                {destination}
              </span>
            )
          )}
        </div>

        <div className="relative w-full md:w-fit">
          <span className="absolute inset-y-0 right-5 flex items-center pl-3">
            🔍
          </span>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            className="border-1 md:py-3 py-2 md:px-4 px-2 rounded-xl md:text-xl md:w-68 w-full border-black/50"
            placeholder="Search"
          />
        </div>
      </div>

      <div className="md:w-8/10 w-9/10 mx-auto flex md:flex-row flex-col gap-10 flex-wrap justify-between items-center my-10 md:px-5">
        {newItem &&
          newItem.map((item, index) => (
            <TravelCard
              index={index}
              src={item.img}
              title={item.title}
              destination={item.destination}
              duration={item.duration}
              dates={item.date}
              price={item.price}
            />
          ))}
      </div>
    </div>
  );
}

export default Travel;
