import React from "react";
import { contact } from "../assets";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import Toastify from "toastify-js";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const email = e.target.email.value;
    const number = e.target.phoneNumber.value;
    const message = e.target.message.value;

    const token = "7593360870:AAGzGobs9r4Mcux4F6TsMzG7064F1xXk9iQ";
    const chat_id = 5895156876;
    const text = `Ism: ${firstName}\nFamiliya: ${lastName}\nEmail: ${email}\nNumber: ${number}\nXabar: ${message}`;

    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    axios({
      url: url,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        chat_id: chat_id,
        text: text,
      },
    })
      .then((res) => {
        // toastify
        e.target.reset();
        Toastify({
          text: "Successfully message",
          duration: 3000,
          // destination: "https://github.com/apvarun/toastify-js",
          newWindow: true,
          close: true,
          gravity: "top", // `top` or `bottom`
          position: "right", // `right`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
          style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          },
          onClick: function () {}, // Callback after click
        }).showToast();
      })
      .catch((error) => {
        console.log(error);
        Toastify({
          text: "Error message",
          duration: 3000,
          // destination: "https://github.com/apvarun/toastify-js",
          newWindow: true,
          close: true,
          gravity: "top", // `top` or `bottom`
          position: "right", // `right`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
          style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          },
          onClick: function () {}, // Callback after click
        }).showToast();
      });
  };
  return (
    <div className="w-full">
      <div className="w-full mt-20 relative">
        <img
          src={contact}
          alt="desc1"
          className="object-cover md:h-96 h-48 w-full"
        />
        <div className="absolute h-full w-full top-0 left-0 flex justify-center items-center">
          <h1 className="md:text-8xl text-3xl text-white">Contact Us</h1>
        </div>
      </div>

      <div className="w-full bg-[#f3f3f3] py-16">
        <div className="md:w-8/10 w-9/10 mx-auto flex md:flex-row flex-col gap-4 items-center">
          <div className="md:w-2/6 w-full mx-auto md:h-[550px] py-15 bg-[#011C2B] p-5 text-white/50 rounded-2xl overflow-hidden">
            <div className="relative md:w-2/3">
              <h1 className="text-2xl font-medium text-white">
                Contact Information
              </h1>
              <span>Say something to start a live chat!</span>
              <div className="md:pt-20 flex flex-col md:gap-6 gap-4 text-lg">
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

          <div className="md:w-3/5 w-full mx-auto">
            <form
              className="text-black/50 flex justify-between flex-wrap md:gap-y-16 gap-y-4"
              onSubmit={handleSubmit}
            >
              <label className="flex flex-col md:w-1/2 w-full md:px-10">
                <span>First Name</span>
                <input
                  type="text"
                  name="firstName"
                  className="border-b-1 py-2 md:px-4 text-xl"
                  required
                />
              </label>
              <label className="flex flex-col md:w-1/2 w-full md:px-10">
                <span>Last Name</span>
                <input
                  name="lastName"
                  type="text"
                  className="border-b-1 py-2 px-4 text-xl"
                  required
                />
              </label>
              <label className="flex flex-col md:w-1/2 w-full md:px-10">
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  className="border-b-1 py-2 px-4 text-xl"
                  required
                />
              </label>
              <label className="flex flex-col md:w-1/2 w-full md:px-10">
                <span>Phone Number</span>
                <input
                  // defaultValue={+998}
                  type="number"
                  name="phoneNumber"
                  className="border-b-1 py-2 px-4 text-xl"
                  required
                />
              </label>
              <label className="flex flex-col w-full md:px-10">
                <span>Message</span>
                <textarea
                  name="message"
                  className="border-b-1 py-2 px-4 text-xl h-12"
                  placeholder="Write your message..."
                  required
                ></textarea>
              </label>
              <button
                type="submit"
                className="bg-[#011C2A] text-white font-medium py-3 px-10 rounded-xl mx-auto"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="md:w-8/10 w-9/10 mx-auto my-16">
        <div className="text-center flex flex-col gap-4">
          <h1 className="text-5xl">Find Us on Map</h1>
          <p className="md:w-2/3 w-full mx-auto text-black/50">
            We are located in the heart of the city, easily accessible by public
            transport and just a few minutes away from major landmarks. Whether
            you’re traveling by car or train, finding us is simple and
            straightforward. Use the map below to get directions and plan your
            visit.
          </p>
        </div>
        <div className="w-full md:h-[600px] h-[250px] my-10 rounded-2xl overflow-hidden">
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
