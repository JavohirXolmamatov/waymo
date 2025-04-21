import React from "react";
import { contact } from "../assets";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function Contact() {
  return (
    <div className="w-full">
      <div className="w-full mt-20 relative">
        <img src={contact} alt="desc1" className="object-cover h-96 w-full" />
        <div className="absolute h-full w-full top-0 left-0 flex justify-center items-center">
          <h1 className="text-8xl text-white">Contact Us</h1>
        </div>
      </div>

      <div className="w-full bg-[#f3f3f3] py-16">
        <div className="md:w-8/10 w-9/10 mx-auto flex gap-4 items-center">
          <div className="w-2/6 mx-auto h-[550px] py-15 bg-[#011C2B] p-5 text-white/50 rounded-2xl overflow-hidden">
            <div className="relative w-2/3">
              <h1 className="text-2xl font-medium text-white">
                Contact Information
              </h1>
              <span>Say something to start a live chat!</span>
              <div className="pt-20 flex flex-col gap-6 text-lg">
                <div className="flex items-center gap-4 mt-10">
                  <FaPhoneVolume className="size-6" />
                  <span>+5013 2456 456</span>
                </div>
                <div className="flex items-center gap-4">
                  <FaRegEnvelope className="size-6" />
                  <span>demo@gmail.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <CiLocationOn className="size-12" />
                  <span>
                    132 Dartmouth Street Boston, Massachusetts 02156 United
                    States
                  </span>
                </div>
              </div>
              <div className="absolute bg-white/30 size-58 rounded-full -right-70 -bottom-55"></div>
              <div className="absolute bg-white/30 size-36 rounded-full -right-30 -bottom-55"></div>
            </div>
          </div>

          <div className="w-3/5 mx-auto">
            <form className="text-black/50 flex justify-between flex-wrap gap-y-16">
              <label className="flex flex-col w-1/2 px-10">
                <span>First Name</span>
                <input type="text" className="border-b-1 py-2 px-4 text-xl" />
              </label>
              <label className="flex flex-col w-1/2 px-10">
                <span>Last Name</span>
                <input type="text" className="border-b-1 py-2 px-4 text-xl" />
              </label>
              <label className="flex flex-col w-1/2 px-10">
                <span>Email</span>
                <input type="email" className="border-b-1 py-2 px-4 text-xl" />
              </label>
              <label className="flex flex-col w-1/2 px-10">
                <span>Phone Number</span>
                <input type="number" className="border-b-1 py-2 px-4 text-xl" />
              </label>
              <label className="flex flex-col w-full px-10">
                <span>Message</span>
                <textarea
                  className="border-b-1 py-2 px-4 text-xl h-12"
                  placeholder="Write your message..."
                ></textarea>
              </label>
              <button className="bg-[#011C2A] text-white font-medium py-3 px-10 rounded-xl mx-auto">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="md:w-8/10 w-9/10 mx-auto my-16">
        <div className="text-center flex flex-col gap-4">
          <h1 className="text-5xl">Find Us on Map</h1>
          <p className="w-2/3 mx-auto text-black/50">
            We are located in the heart of the city, easily accessible by public
            transport and just a few minutes away from major landmarks. Whether
            you’re traveling by car or train, finding us is simple and
            straightforward. Use the map below to get directions and plan your
            visit.
          </p>
        </div>
        <div className="w-full h-[600px] my-10 rounded-2xl overflow-hidden">
          <MapContainer
            center={[41.311081, 69.240562]}
            zoom={13}
            className="h-full w-full z-10"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
            />
            <Marker position={[41.311081, 69.240562]}>
              <Popup>Bu yer Toshkent!</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
}

export default Contact;
