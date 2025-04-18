import { cl1, hero } from "../assets";
import { CiInstagram } from "react-icons/ci";
import { BsTwitterX } from "react-icons/bs";
import { FiFacebook } from "react-icons/fi";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { NavLink } from "react-router-dom";
function Hero() {
  return (
    <div className="w-full h-full relative">
      <section className="w-full h-full relative">
        <img
          src={hero}
          alt="hero"
          className="object-cover md:h-screen w-full"
        />
        <div className="absolute top-0 left-0 w-full md:h-screen bg-black/10">
          <div className="flex flex-wrap justify-between align-middle items-center w-9/10 mx-auto h-full text-white pt-30">
            <h1 className="md:w-3/4 w-full md:text-8xl text-2xl font-medium md:p-16 ">
              Weawing Your Dreams Into Unforgettable Adventures
            </h1>
            <div className="md:w-1/4 flex flex-col gap-8 items-end">
              <div className="size-10 rounded-full flex items-center align-middle justify-center border-white border-2">
                <NavLink to={"/"}>
                  <CiInstagram className="size-5" />
                </NavLink>
              </div>
              <div className="size-10 rounded-full flex items-center align-middle justify-center border-white border-2">
                <NavLink to={"/"}>
                  <BsTwitterX className="size-5" />
                </NavLink>
              </div>
              <div className="size-10 rounded-full flex items-center align-middle justify-center border-white border-2">
                <NavLink to={"/"}>
                  <FiFacebook className="size-5" />
                </NavLink>
              </div>
            </div>
            <div className="px-16 flex justify-start align-middle items-center gap-8">
              <NavLink to={"/booking"}>
                <div className="bg-white relative text-black flex justify-center gap-5 align-middle items-center  font-medium py-2 px-5 text-center text-xl rounded-full shadow-md hover:bg-gray-100 transition-all duration-500 ease-in-out group">
                  <span className="">Booking Now</span>
                  <span className="flex justify-center align-middle items-center bg-black size-10 rounded-full text-white">
                    <MdOutlineArrowRightAlt className="size-6 -rotate-45" />
                  </span>
                </div>
              </NavLink>
              <p className="w-1/2 text-xl">
                Discover the magic of remote destinations, where nature's beuty
                meets cultural richness, offering a journey that will stay with
                you forever
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About section */}
      <section className="w-full">
        <div className="w-9/10 mx-auto my-20">
          <div className="text-black/50 text-2xl flex justify-start gap-5 items-center font-medium my-5">
            <div className="w-28 h-0.5 bg-black/50"></div>
            <h1>About Us</h1>
          </div>
          <h1 className="text-6xl py-5  leading-18">
            Our adventure started with a deep love for travel and a mission to
            share the world's beauty with others. Over the years, we’ve grown
            into a trusted travel agency, celebrated for our dedication,
            expertise, and commitment to delivering exceptional experiences.
          </h1>
          <div className="w-full">
            <div className="flex justify-between gap-28 my-10">
              <div className="w-0.5 h-22 bg-black/15"></div>
              <div className="flex flex-col justify-center items-center align-middle">
                <span className="text-6xl font-normal">200+</span>
                <span className="text-2xl">Happy Customer</span>
              </div>
              <div className="w-0.5 h-22 bg-black/15"></div>
              <div className="flex flex-col justify-center items-center align-middle">
                <span className="text-6xl font-normal">40+</span>
                <span className="text-2xl">Top Hotels</span>
              </div>
              <div className="w-0.5 h-22 bg-black/15"></div>
              <div className="flex flex-col justify-center items-center align-middle">
                <span className="text-6xl font-normal">World</span>
                <span className="text-2xl">Top Class Destination</span>
              </div>
              <div className="w-0.5 h-22 bg-black/15"></div>
            </div>
            <hr className="text-black/30 my-10" />
          </div>
        </div>
      </section>

      {/* Logos */}
      <section className="w-full overflow-hidden my-10">
        <div className="w-9/10 mx-auto overflow-hidden relative">
          <div className="w-full relative h-30">
            <div className="absolute -left-20 top-0 bottom-0 w-40 h-30 bg-white blur-xl z-40"></div>
            <div className="absolute -right-20 top-0 bottom-0 w-40 h-30 bg-white blur-xl z-40"></div>
          </div>
          <div className="absolute top-0 h-full w-full flex justify-between items-center animate-slide">
            <img src={cl1} alt="cl1" />
            <img src={cl1} alt="cl1" />
            <img src={cl1} alt="cl1" />
            <img src={cl1} alt="cl1" />
            <img src={cl1} alt="cl1" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
