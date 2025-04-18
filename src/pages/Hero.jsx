import {
  cl1,
  cl2,
  frame,
  frame1,
  frame2,
  frame3,
  frame4,
  frame5,
  hero,
  person1,
} from "../assets";
import { CiInstagram } from "react-icons/ci";
import { BsTwitterX } from "react-icons/bs";
import { FiFacebook } from "react-icons/fi";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { NavLink } from "react-router-dom";
import Marquee from "react-fast-marquee";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import PersonCard from "../components/PersonCard";
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
          <div className="flex flex-wrap justify-between align-middle items-center w-8/10 mx-auto h-full text-white pt-30">
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
        <div className="w-8/10 mx-auto my-20">
          <div className="text-black/50 text-2xl flex justify-start gap-5 items-center font-medium my-8">
            <div className="w-28 h-0.5 bg-black/50"></div>
            <h1>About Us</h1>
          </div>
          <h1 className="text-4xl py-5  leading-14">
            Our adventure started with a deep love for travel and a mission to
            share the world's beauty with others. Over the years, we’ve grown
            into a trusted travel agency, celebrated for our dedication,
            expertise, and commitment to delivering exceptional experiences.
          </h1>
          <div className="w-full">
            <div className="flex justify-between gap-28 my-14">
              <div className="w-0.5 h-22 bg-black/15"></div>
              <div className="flex flex-col justify-center items-center align-middle">
                <span className="text-5xl font-normal">200+</span>
                <span className="text-2xl">Happy Customer</span>
              </div>
              <div className="w-0.5 h-22 bg-black/15"></div>
              <div className="flex flex-col justify-center items-center align-middle">
                <span className="text-5xl font-normal">40+</span>
                <span className="text-2xl">Top Hotels</span>
              </div>
              <div className="w-0.5 h-22 bg-black/15"></div>
              <div className="flex flex-col justify-center items-center align-middle">
                <span className="text-5xl font-normal">World</span>
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
        <div className="w-8/10 mx-auto overflow-hidden relative">
          <div className="w-full relative h-30">
            <div className="absolute -left-20 top-0 bottom-0 w-40 h-30 bg-white blur-xl z-40"></div>
            <div className="absolute -right-20 top-0 bottom-0 w-40 h-30 bg-white blur-xl z-40"></div>
          </div>
          <div className="absolute top-0 h-full w-full flex justify-between items-center">
            <Marquee speed={50} className="">
              <img src={cl1} alt="cl1" className="mx-16" />
              <img src={cl2} alt="cl1" className="mx-16" />
              <img src={cl1} alt="cl1" className="mx-16" />
              <img src={cl2} alt="cl1" className="mx-16" />
              <img src={cl1} alt="cl1" className="mx-16" />
              <img src={cl2} alt="cl1" className="mx-16" />
              <img src={cl1} alt="cl1" className="mx-16" />
              <img src={cl2} alt="cl1" className="mx-16" />
              <img src={cl1} alt="cl1" className="mx-16" />
              <img src={cl2} alt="cl1" className="mx-16" />
            </Marquee>
          </div>
        </div>
      </section>

      {/* popular section */}
      <section className="w-full">
        <div className="w-8/10 mx-auto my-20">
          <div className="text-black/50 text-2xl flex justify-start gap-5 items-center font-medium my-5">
            <div className="w-28 h-0.5 bg-black/50"></div>
            <h1>Popular Destinations</h1>
          </div>

          <div className="flex justify-between py-15">
            <h1 className="text-5xl w-2/4 pr-10">
              A seamless blend of adventure, culture, and natural wonders
            </h1>
            <div className="w-1/4"></div>
            <p className="w-1/4 text-md text-black/50 pl-10">
              Explore a blend of adventure, rich culture, and breathtaking
              landscapes across our diverse destinations, where every journey
              promises unforgettable memories
            </p>
          </div>

          <div className="w-full grid grid-cols-2 grid-rows-2 gap-8">
            <div className="size-40  w-full h-full rounded-xl row-span-2">
              <img
                src={frame}
                className="w-full h-full object-cover"
                alt="frame1"
              />
            </div>
            <div className="size-40  w-full h-full rounded-xl">
              <img
                src={frame1}
                className="w-full h-full object-cover"
                alt="frame2"
              />
            </div>
            <div className="size-40  w-full h-full rounded-xl">
              <img
                src={frame2}
                className="w-full h-full object-cover"
                alt="frame2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Packages section */}
      <section className="w-full">
        <div className="w-8/10 mx-auto ">
          <div className="text-black/50 text-2xl flex justify-start gap-5 items-center font-medium my-5">
            <div className="w-28 h-0.5 bg-black/50"></div>
            <h1>Packages</h1>
          </div>

          <div className="flex justify-between py-10">
            <h1 className="text-5xl w-2/4 pr-10">
              Browse our selection of carefully curated travel packages
            </h1>
            <div className="w-1/4"></div>
            <p className="w-1/4 text-md text-black/50 pl-10">
              Discover a collection of expertly designed packages, combining
              adventure, culture, and stunning landscapes, each promising a
              journey to remember.
            </p>
          </div>

          <div className="w-full grid grid-cols-3 items-center gap-8">
            <div className="relative size-40  w-full h-5/6 rounded-xl">
              <img
                src={frame3}
                className="w-full h-full object-cover rounded-2xl"
                alt="frame1"
              />
              <div className="absolute w-full bottom-1 p-8 flex flex-col gap-2">
                <div className="flex gap-4">
                  <button className="border-1 border-white text-white hover:bg-white/30 hover:text-white/90 hover:border-black transition-all duration-250 ease-linear py-2 rounded-2xl px-4 font-medium text-md">
                    6 Days, 5 Nights
                  </button>
                  <button className="border-1 border-black text-black bg-white hover:bg-white/30 hover:text-black/70 hover:border-white transition-all duration-250 ease-linear py-2 rounded-2xl px-4 font-medium text-md">
                    $850/Night
                  </button>
                </div>
                <h1 className="text-white text-3xl">
                  Chasing the Northern Lights
                </h1>
                <p className="text-md text-white/90">
                  Embark on a mesmerizing journey to witness the stunning Aurora
                  Borealis in the magical landscapes of Iceland.
                </p>
              </div>
            </div>
            <div className="size-40  w-full h-5/6 rounded-xl relative">
              <img
                src={frame4}
                className="w-full h-full object-cover rounded-2xl"
                alt="frame2"
              />
              <div className="absolute w-full bottom-1 p-8 flex flex-col gap-2">
                <div className="flex gap-4">
                  <button className="border-1 border-white text-white hover:bg-white/30 hover:text-white/90 hover:border-black transition-all duration-250 ease-linear py-2 rounded-2xl px-4 font-medium text-md">
                    3 Days, 2Nights
                  </button>
                  <button className="border-1 border-black text-black bg-white hover:bg-white/30 hover:text-black/70 hover:border-white transition-all duration-250 ease-linear py-2 rounded-2xl px-4 font-medium text-md">
                    $620/Night
                  </button>
                </div>
                <h1 className="text-white text-3xl">
                  Aurora Hunting in Iceland
                </h1>
                <p className="text-md text-white/90">
                  Experience the thrill of chasing the Aurora Borealis across
                  the magical skies of Iceland.
                </p>
              </div>
            </div>
            <div className="size-40  w-full h-5/6 rounded-xl relative">
              <img
                src={frame5}
                className="w-full h-full object-cover rounded-2xl"
                alt="frame2"
              />
              <div className="absolute w-full bottom-1 p-8 flex flex-col gap-2">
                <div className="flex gap-4">
                  <button className="border-1 border-white text-white hover:bg-white/30 hover:text-white/90 hover:border-black transition-all duration-250 ease-linear py-2 rounded-2xl px-4 font-medium text-md">
                    4 Days, 3 Nights
                  </button>
                  <button className="border-1 border-black text-black bg-white hover:bg-white/30 hover:text-black/70 hover:border-white transition-all duration-250 ease-linear py-2 rounded-2xl px-4 font-medium text-md">
                    $1,250/Night
                  </button>
                </div>
                <h1 className="text-white text-3xl">
                  Catching the Northern Lights
                </h1>
                <p className="text-md text-white/90">
                  Witness the captivating beauty of the Northern Lights as you
                  journey through Iceland’s awe-inspiring landscapes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages section */}
      <section className="w-full">
        <div className="w-8/10 mx-auto my-20">
          <div className="text-black/50 text-2xl flex justify-start gap-5 items-center font-medium my-5">
            <div className="w-28 h-0.5 bg-black/50"></div>
            <h1>FAQs</h1>
          </div>

          <div className="flex justify-between py-10">
            <h1 className="text-5xl w-2/4 pr-10">Frequently Asked Questions</h1>
            <div className="w-1/4"></div>
            <p className="w-1/4 text-md text-black/50 pl-10">
              Explore our comprehensive FAQ section, designed to answer all your
              queries and help you plan a seamless and unforgettable journey.
            </p>
          </div>

          <div className="w-full flex gap-10">
            <div className="w-full flex flex-col gap-5">
              <Accordion className="border-1 border-black/20 py-2">
                <AccordionSummary
                  expandIcon={<AddIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography
                    component="span"
                    fontWeight={"bold"}
                    fontSize={20}
                  >
                    How do I book a trip with your travel service?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className="text-xl text-black/50">
                  You can book a trip through our website, by calling our
                  customer service hotline, or by visiting one of our offices.
                  Simply choose your destination, travel dates, and preferred
                </AccordionDetails>
              </Accordion>
              <Accordion className="border-1 border-black/20 py-2">
                <AccordionSummary
                  expandIcon={<AddIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography
                    component="span"
                    fontWeight={"bold"}
                    fontSize={20}
                  >
                    What payment methods do you accept?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className="text-xl text-black/50">
                  You can book a trip through our website, by calling our
                  customer service hotline, or by visiting one of our offices.
                  Simply choose your destination, travel dates, and preferred
                </AccordionDetails>
              </Accordion>
              <Accordion className="border-1 border-black/20 py-2">
                <AccordionSummary
                  expandIcon={<AddIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography
                    component="span"
                    fontWeight={"bold"}
                    fontSize={20}
                  >
                    How do I know if my booking is confirmed
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className="text-xl text-black/50">
                  You can book a trip through our website, by calling our
                  customer service hotline, or by visiting one of our offices.
                  Simply choose your destination, travel dates, and preferred
                </AccordionDetails>
              </Accordion>
              <Accordion className="border-1 border-black/20 py-2">
                <AccordionSummary
                  expandIcon={<AddIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography
                    component="span"
                    fontWeight={"bold"}
                    fontSize={20}
                  >
                    Do you offer group travel packages
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className="text-xl text-black/50">
                  You can book a trip through our website, by calling our
                  customer service hotline, or by visiting one of our offices.
                  Simply choose your destination, travel dates, and preferred
                </AccordionDetails>
              </Accordion>
            </div>
            <div className="w-full flex flex-col gap-5">
              <Accordion className="border-1 border-black/20 py-2">
                <AccordionSummary
                  expandIcon={<AddIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography
                    component="span"
                    fontWeight={"bold"}
                    fontSize={20}
                  >
                    What destinations do you offer?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className="text-xl text-black/50">
                  You can book a trip through our website, by calling our
                  customer service hotline, or by visiting one of our offices.
                  Simply choose your destination, travel dates, and preferred
                </AccordionDetails>
              </Accordion>
              <Accordion className="border-1 border-black/20 py-2">
                <AccordionSummary
                  expandIcon={<AddIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography
                    component="span"
                    fontWeight={"bold"}
                    fontSize={20}
                  >
                    Do you offer travel insurance?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className="text-xl text-black/50">
                  You can book a trip through our website, by calling our
                  customer service hotline, or by visiting one of our offices.
                  Simply choose your destination, travel dates, and preferred
                </AccordionDetails>
              </Accordion>
              <Accordion className="border-1 border-black/20 py-2">
                <AccordionSummary
                  expandIcon={<AddIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography
                    component="span"
                    fontWeight={"bold"}
                    fontSize={20}
                  >
                    What is included in the travel packages?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className="text-xl text-black/50">
                  You can book a trip through our website, by calling our
                  customer service hotline, or by visiting one of our offices.
                  Simply choose your destination, travel dates, and preferred
                </AccordionDetails>
              </Accordion>
              <Accordion className="border-1 border-black/20 py-2">
                <AccordionSummary
                  expandIcon={<AddIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography
                    component="span"
                    fontWeight={"bold"}
                    fontSize={20}
                  >
                    How do I know which package is right for me?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className="text-xl text-black/50">
                  You can book a trip through our website, by calling our
                  customer service hotline, or by visiting one of our offices.
                  Simply choose your destination, travel dates, and preferred
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Customer section */}
      <section className="w-full py-1">
        <div className="w-8/10 mx-auto my-20">
          <div className="text-black/50 text-2xl flex justify-start gap-5 items-center font-medium my-5">
            <div className="w-28 h-0.5 bg-black/50"></div>
            <h1>Customer Testimonials</h1>
          </div>

          <div className="flex justify-between py-5 mb-20">
            <h1 className="text-5xl w-2/4 pr-10">
              What Our Customers Are Saying
            </h1>
            <div className="w-1/4"></div>
            <p className="w-1/4 text-md text-black/50 pl-10">
              Our customers’ experiences help us continually improve our
              services. Here’s what some of them have to say about their travels
              with us.
            </p>
          </div>

          <div className="w-full flex flex-col gap-5">
            <div className="">
              <Marquee pauseOnClick pauseOnHover>
                <PersonCard
                  img={person1}
                  name={"Alex Buckmaster"}
                  description={
                    "Traveling with this service was a game-changer for me. The customized itinerary perfectly matched my interests, and I was able to explore hidden gems."
                  }
                />
                <PersonCard
                  img={person1}
                  name={"Alex Buckmaster"}
                  description={
                    "Traveling with this service was a game-changer for me. The customized itinerary perfectly matched my interests, and I was able to explore hidden gems."
                  }
                />
                <PersonCard
                  img={person1}
                  name={"Alex Buckmaster"}
                  description={
                    "Traveling with this service was a game-changer for me. The customized itinerary perfectly matched my interests, and I was able to explore hidden gems."
                  }
                />
                <PersonCard
                  img={person1}
                  name={"Alex Buckmaster"}
                  description={
                    "Traveling with this service was a game-changer for me. The customized itinerary perfectly matched my interests, and I was able to explore hidden gems."
                  }
                />
                <PersonCard
                  img={person1}
                  name={"Alex Buckmaster"}
                  description={
                    "Traveling with this service was a game-changer for me. The customized itinerary perfectly matched my interests, and I was able to explore hidden gems."
                  }
                />
                <PersonCard
                  img={person1}
                  name={"Alex Buckmaster"}
                  description={
                    "Traveling with this service was a game-changer for me. The customized itinerary perfectly matched my interests, and I was able to explore hidden gems."
                  }
                />
              </Marquee>
            </div>
            <div className="w-full">
              <Marquee direction="right" pauseOnClick pauseOnHover>
                <PersonCard
                  img={person1}
                  name={"Alex Buckmaster"}
                  description={
                    "Traveling with this service was a game-changer for me. The customized itinerary perfectly matched my interests, and I was able to explore hidden gems."
                  }
                />
                <PersonCard
                  img={person1}
                  name={"Alex Buckmaster"}
                  description={
                    "Traveling with this service was a game-changer for me. The customized itinerary perfectly matched my interests, and I was able to explore hidden gems."
                  }
                />
                <PersonCard
                  img={person1}
                  name={"Alex Buckmaster"}
                  description={
                    "Traveling with this service was a game-changer for me. The customized itinerary perfectly matched my interests, and I was able to explore hidden gems."
                  }
                />
                <PersonCard
                  img={person1}
                  name={"Alex Buckmaster"}
                  description={
                    "Traveling with this service was a game-changer for me. The customized itinerary perfectly matched my interests, and I was able to explore hidden gems."
                  }
                />
                <PersonCard
                  img={person1}
                  name={"Alex Buckmaster"}
                  description={
                    "Traveling with this service was a game-changer for me. The customized itinerary perfectly matched my interests, and I was able to explore hidden gems."
                  }
                />
                <PersonCard
                  img={person1}
                  name={"Alex Buckmaster"}
                  description={
                    "Traveling with this service was a game-changer for me. The customized itinerary perfectly matched my interests, and I was able to explore hidden gems."
                  }
                />
              </Marquee>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
