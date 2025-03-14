import moment from "moment";
import { ThemeContext } from "../Provider/Provider";
import { useContext } from "react";
import { IoHappyOutline } from "react-icons/io5";
import Marquee from "react-fast-marquee";
import { FaUserTie } from "react-icons/fa";
import { IoMicOutline } from "react-icons/io5";
import { Link } from "react-router";

const About = () => {
  const { User } = useContext(ThemeContext);

  return (
    <div className="max-w-7xl mx-auto p-1">
      <div className="flex flex-col items-center text-center">
        <h1 className="mt-2.5 lg:mt-0 text-3xl md:text-4xl font-semibold text-violet-700 flex flex-wrap items-center justify-center">
          Have a Good Day, Sir
          <span className="inline-flex ml-2 md:ml-3">
            <IoHappyOutline className="text-2xl md:text-4xl" />
          </span>
        </h1>

        <h1 className="mt-2 text-lg md:text-xl font-semibold px-4">
          <span className="text-2xl md:text-3xl font-dancingScript font-extrabold text-violet-700">
            Real Estate
          </span>
          - Where dreams find an address, and luxury feels like home.
        </h1>

        <h1 className="mt-1 text-lg md:text-xl font-semibold">
          {moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}
        </h1>
      </div>

      <div className="flex  items-center bg-violet-100 p-3 mt-6 lg:mt-5 rounded-lg w-full">
        <button className="bg-black text-white px-4 py-2 font-medium mr-2 rounded">
          Latest
        </button>
        <Marquee className="text-lg md:text-xl w-full">
          <p className="ml-2">
            Explore the finest luxury estates with world-class amenities!
          </p>
          <p className="ml-2">
            Find the perfect blend of elegance, comfort, and prestige.
          </p>
          <p className="ml-2">
            Experience the ultimate luxury lifestyle with breathtaking
            properties.
          </p>
          <p className="ml-2">
            Let us help you find a home that defines sophistication!
          </p>
          <p className="ml-2">
            Invest in elegance, style, and timeless architecture today!
          </p>
        </Marquee>
      </div>

      <div className="border-2 border-slate-200 mt-8 rounded-lg p-6 flex flex-col lg:flex-row items-center">
        <div className="flex flex-col items-center text-center lg:w-1/3">
          <FaUserTie className="text-6xl md:text-7xl" />
          <p className="mt-4 text-xl md:text-2xl font-bold">
            {User.displayName}
          </p>
          <p className="text-lg md:text-xl font-semibold">
            Profession : {User.profession ? User.profession : "Reputed Person"}
          </p>
          <Link
            to="/updateProfile/editProfile"
            className="font-semibold hover:underline"
          >
            <IoMicOutline className="inline text-xl font-bold" /> Add your own
            quote
          </Link>
        </div>

        <div className="divider lg:divider-horizontal"></div>

        <div className="mt-6 lg:mt-0 lg:w-2/3">
          <h2 className="text-lg md:text-xl font-semibold">
            <span className="font-bold">Email :</span> {User.email}
          </h2>
          <h2 className="text-lg md:text-xl font-semibold">
            <span className="font-bold mr-1">City :</span>
            {User.city ? User.city : "Not modified"}
          </h2>
          <h2 className="text-lg md:text-xl font-semibold">
            <span className="font-bold mr-1">Address :</span>
            {User.address ? User.address : "Not modified"}
          </h2>
          <h2 className="text-lg md:text-xl font-semibold">
            <span className="font-bold mr-1">Contact Info :</span>
            {User.contact ? User.contact : "Not modified"}
          </h2>
          <h2 className="text-lg md:text-xl font-semibold">
            <span className="font-bold mr-1">Age :</span>
            {User.age ? User.age : "Not modified"}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default About;
