import {
  booking,
  booking1,
  booking2,
  booking3,
  frame,
  frame1,
  frame2,
} from "../assets";
import { CiLocationOn } from "react-icons/ci";
import { BiTimer } from "react-icons/bi";
import { IoCalendarOutline } from "react-icons/io5";
import { MdOutlineGroups2 } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";
import AddIcon from "@mui/icons-material/Add";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Accordion from "@mui/material/Accordion";
import Typography from "@mui/material/Typography";

function Booking() {
  return (
    <div className="w-full mt-20">
      <div className="text-center md:py-20 py-10">
        <h1 className="md:text-5xl text-3xl md:w-1/3 mx-auto">
          Turkish Delights: Discover the Wonders of Turkey
        </h1>
      </div>

      <div className="w-full md:h-[600px] h-full">
        <img
          src={booking}
          alt="booking"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="md:w-8/10 w-9/10 mx-auto my-20 bg-[#cfcece] py-5 md:px-10 rounded-xl">
        <div className="w-full h-full flex md:flex-row flex-col gap-4 md:gap-0 justify-between my-10 px-10">
          <div className="flex">
            <div className="flex flex-col justify-center items-center">
              <div className="flex gap-2 font-medium text-xl items-center">
                <span>
                  <CiLocationOn />
                </span>
                <h1>Destination:</h1>
              </div>
              <span className="text-black/50 text-lg">Turkey, Istanbul</span>
            </div>
          </div>
          <div className="md:h-20 h-0.5 md:w-0.5 w-full bg-black/50"></div>

          <div className="flex">
            <div className="flex flex-col justify-center items-center">
              <div className="flex gap-2 font-medium text-xl items-center">
                <span>
                  <BiTimer />
                </span>
                <h1>Duration:</h1>
              </div>
              <span className="text-black/50 text-lg">7 days/6 nights</span>
            </div>
          </div>
          <div className="md:h-20 h-0.5 md:w-0.5 w-full bg-black/50"></div>

          <div className="flex">
            <div className="flex flex-col justify-center items-start">
              <div className="flex gap-2 font-medium text-xl items-center">
                <span>
                  <IoCalendarOutline />
                </span>
                <h1>Duration:</h1>
              </div>
              <span className="text-black/50 text-lg">
                Available from Aprel to October
              </span>
            </div>
          </div>

          <div className="md:h-20 h-0.5 md:w-0.5 w-full bg-black/50"></div>

          <div className="flex">
            <div className="flex flex-col justify-center items-center">
              <div className="flex gap-2 font-medium text-xl items-center">
                <span>
                  <MdOutlineGroups2 />
                </span>
                <h1>Group size:</h1>
              </div>
              <span className="text-black/50 text-lg">Max 16 people</span>
            </div>
          </div>
        </div>
        <hr className="my-10 text-black/30" />

        <h1 className="text-center text-2xl font-medium">Price: $3500</h1>
        <div className="w-full flex gap-6 justify-center my-8">
          <NavLink
            to={""}
            className="py-2 md:px-8 px-6 font-medium bg-[#141B34] text-white hover:border-2 hover:border-[#141B34] hover:bg-white hover:text-black rounded-md transition-all duration-600 ease-in-out"
          >
            Book Now
          </NavLink>
          <NavLink
            to={"/contact"}
            className="py-2 md:px-8 px-6 font-medium border-2 border-[#141B34] text-black hover:text-white hover:border-0 hover:bg-[#141B34] rounded-md transition-all duration-600 ease-in-out"
          >
            Contact us
          </NavLink>
        </div>
      </div>

      <div className=" w-9/10 mx-auto my-16">
        <div className="text-black/50 text-2xl flex justify-start gap-5 items-center font-medium my-8">
          <div className="md:w-28 w-14 h-0.5 bg-black/50"></div>
          <h1>Details</h1>
        </div>

        <div className="md:w-9/10 mx-auto flex flex-col gap-8">
          <div className="">
            <h1 className="md:text-3xl font-medium my-3">What’s Included:</h1>
            <div className="w-full flex flex-col gap-2">
              <div className="flex md:items-center items-start gap-2">
                <span>
                  <FaCheckCircle />
                </span>
                <p className="text-lg font-semibold">
                  Transportation: Comfortable transportation throughout the tour
                  in a modern vehicle.
                </p>
              </div>

              <div className="flex md:items-center items-start gap-2">
                <span>
                  <FaCheckCircle />
                </span>
                <p className="text-lg font-semibold">
                  Accommodation: Accommodation in centrally located hotels or
                  charming châteaux with breakfast included.
                </p>
              </div>

              <div className="flex md:items-center items-start gap-2">
                <span>
                  <FaCheckCircle />
                </span>
                <p className="text-lg font-semibold">
                  Guided Tours: Expertly guided tours of iconic landmarks,
                  historical sites, and cultural attractions.
                </p>
              </div>

              <div className="flex md:items-center items-start gap-2">
                <span>
                  <FaCheckCircle />
                </span>
                <p className="text-lg font-semibold">
                  Activities: Exciting activities such as wine tastings, cooking
                  classes, and river cruises.
                </p>
              </div>

              <div className="flex md:items-center items-start gap-2">
                <span>
                  <FaCheckCircle />
                </span>
                <p className="text-lg font-semibold">
                  Meals: Some meals included as specified in the itinerary.
                </p>
              </div>

              <div className="flex md:items-center items-start gap-2">
                <span>
                  <FaCheckCircle />
                </span>
                <p className="text-lg font-semibold">
                  Entrance Fees: Entrance fees to attractions and monuments
                  included.
                </p>
              </div>
            </div>
          </div>

          <div className="">
            <h1 className="md:text-3xl font-medium my-3">What’s Excluded:</h1>
            <div className="w-full flex flex-col gap-2">
              <div className="flex md:items-center items-start gap-2">
                <span>
                  <FaCircleXmark />
                </span>
                <p className="text-lg font-semibold">
                  International Flights: Flights to and from France are not
                  included.
                </p>
              </div>

              <div className="flex md:items-center items-start gap-2">
                <span>
                  <FaCircleXmark />
                </span>
                <p className="text-lg font-semibold">
                  Meals: Meals not specified in the itinerary are excluded.
                </p>
              </div>

              <div className="flex md:items-center items-start gap-2">
                <span>
                  <FaCircleXmark />
                </span>
                <p className="text-lg font-semibold">
                  Personal Expenses: Expenses such as souvenirs, additional
                  activities, and gratuities are not included.
                </p>
              </div>
            </div>
          </div>

          <div className="">
            <h1 className="md:text-3xl font-medium my-3">Activities:</h1>
            <div className="w-full flex flex-col gap-2">
              <div className="flex md:items-center items-start gap-2">
                <p className="text-lg font-semibold">
                  Guided tour of the Eiffel Tower and Louvre Museum in Paris.
                </p>
              </div>

              <div className="flex md:items-center items-start gap-2">
                <p className="text-lg font-semibold">
                  Wine tasting in the vineyards of Bordeaux.
                </p>
              </div>

              <div className="flex md:items-center items-start gap-2">
                <p className="text-lg font-semibold">
                  Cooking class in Provence.
                </p>
              </div>

              <div className="flex md:items-center items-start gap-2">
                <p className="text-lg font-semibold">
                  Visit to the lavender fields of Provence.
                </p>
              </div>

              <div className="flex md:items-center items-start gap-2">
                <p className="text-lg font-semibold">
                  River cruise along the Seine River in Paris.
                </p>
              </div>

              <div className="flex md:items-center items-start gap-2">
                <p className="text-lg font-semibold">
                  Explore the charming villages of Normandy.
                </p>
              </div>

              <div className="flex md:items-center items-start gap-2">
                <p className="text-lg font-semibold">
                  Visit to the Mont-Saint-Michel abbey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" w-9/10 mx-auto md:my-20 my-5">
        <div className="text-black/50 text-2xl flex justify-start gap-5 items-center font-medium my-5">
          <div className="md:w-28 w-14 h-0.5 bg-black/50"></div>
          <h1>Travel Plans</h1>
        </div>

        <div className="w-9/10 mx-auto flex flex-col md:flex-row md:gap-10 gap-5 py-5 md:py-0">
          <div className="w-full flex flex-col  gap-5">
            <Accordion className="border-1 border-black/20 py-2">
              <AccordionSummary
                expandIcon={<AddIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography
                  component="span"
                  fontSize={20}
                  className="flex md:justify-start justify-between gap-20 md:gap-52 "
                >
                  <span className="font-bold">DAY 01 </span>
                  <span className="font-medium">Arrival in Bali</span>
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="text-xl text-black/50 flex flex-col gap-2">
                <p>1 . Enjoy a welcome drink</p>
                <p>2 . Take a leisurely stroll</p>
                <p>3 . Have a delightful dinner</p>
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
                  fontSize={20}
                  className="flex md:justify-start justify-between gap-20 md:gap-52 "
                >
                  <span className="font-bold">DAY 02 </span>
                  <span className="font-medium">Beach Exploration</span>
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="text-xl text-black/50 flex flex-col gap-2">
                <p>1 . Enjoy a welcome drink</p>
                <p>2 . Take a leisurely stroll</p>
                <p>3 . Have a delightful dinner</p>
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
                  fontSize={20}
                  className="flex md:justify-start justify-between gap-20 md:gap-52 "
                >
                  <span className="font-bold">DAY 03 </span>
                  <span className="font-medium">Cultural Encounter</span>
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="text-xl text-black/50 flex flex-col gap-2">
                <p>1 . Enjoy a welcome drink</p>
                <p>2 . Take a leisurely stroll</p>
                <p>3 . Have a delightful dinner</p>
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
                  fontSize={20}
                  className="flex md:justify-start justify-between gap-20 md:gap-52 "
                >
                  <span className="font-bold">DAY 04 </span>
                  <span className="font-medium">Island Adventure</span>
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="text-xl text-black/50 flex flex-col gap-2">
                <p>1 . Enjoy a welcome drink</p>
                <p>2 . Take a leisurely stroll</p>
                <p>3 . Have a delightful dinner</p>
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
                  fontSize={20}
                  className="flex md:justify-start justify-between gap-20 md:gap-52 "
                >
                  <span className="font-bold">DAY 05 </span>
                  <span className="font-medium">Island Hopping</span>
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="text-xl text-black/50 flex flex-col gap-2">
                <p>1 . Enjoy a welcome drink</p>
                <p>2 . Take a leisurely stroll</p>
                <p>3 . Have a delightful dinner</p>
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
                  fontSize={20}
                  className="flex md:justify-start justify-between gap-20 md:gap-52 "
                >
                  <span className="font-bold">DAY 07 </span>
                  <span className="font-medium">Departure from Bali</span>
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="text-xl text-black/50 flex flex-col gap-2">
                <p>1 . Enjoy a welcome drink</p>
                <p>2 . Take a leisurely stroll</p>
                <p>3 . Have a delightful dinner</p>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>

      <div className="w-9/10 mx-auto md:my-20">
        <div className="text-black/50 text-2xl flex justify-start gap-5 items-center font-medium my-10">
          <div className="md:w-28 w-14 h-0.5 bg-black/50"></div>
          <h1>Gallery</h1>
        </div>

        <div className="w-9/10 mx-auto md:grid md:grid-cols-2 md:grid-rows-2 flex flex-col md:gap-8 gap-3">
          <div className="md:h-[800px] md:w-[720px] h-[300px]  rounded-xl overflow-hidden md:row-span-2">
            <img
              src={booking1}
              className="w-full h-full object-cover"
              alt="frame1"
            />
          </div>
          <div className="md:h-[380px] h-[300px] w-full rounded-xl overflow-hidden">
            <img
              src={booking2}
              className="w-full h-full object-cover"
              alt="frame2"
            />
          </div>
          <div className=" md:h-[380px] h-[300px] w-full  rounded-xl overflow-hidden">
            <img
              src={booking3}
              className="w-full h-full object-cover"
              alt="frame2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;
