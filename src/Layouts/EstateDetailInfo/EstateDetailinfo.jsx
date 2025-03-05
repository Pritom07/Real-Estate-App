import { useLoaderData, useNavigate, useParams } from "react-router";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { IoIosStar } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import { useEffect, useState } from "react";
import Map from "../../Components/Map/Map";
import AOS from "aos";
import "aos/dist/aos.css";

const EstateDetailinfo = () => {
  const data = useLoaderData();
  const { idx } = useParams();
  const [sale, setSale] = useState(false);
  const navigate = useNavigate();

  const desiredEstateobj = data.find((estate) => estate.id === parseInt(idx));
  const {
    estate_title,
    segment_name,
    description,
    price,
    status,
    area,
    location,
    facilities,
    type,
    image,
    ratings,
    position,
  } = desiredEstateobj;

  useEffect(() => {
    if (status === "Sale") {
      setSale(true);
    } else {
      setSale(false);
    }
  }, [status]);

  const gotoAllEstates = () => {
    navigate("/allEstates");
  };

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out-sine", once: true });
  }, []);

  return (
    <div className="min-h-screen flex flex-col max-w-7xl mx-auto">
      <Navbar></Navbar>
      <section className="mx-2 md:mx-0 mt-0.5 grid grid-cols-12 gap-3 mb-8 flex-grow">
        <div
          data-aos="fade-right"
          className="card border-2 border-slate-200 col-span-12 md:col-span-8"
        >
          <figure>
            <img
              src={image}
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] p-3 object-cover"
              alt="Luxury Estates"
            />
          </figure>

          <div className="card-body -mt-4">
            <h2 className="card-title text-2xl sm:text-3xl md:text-4xl font-semibold">
              {estate_title}
              <div
                className={`badge text-white text-[14px] sm:text-[16px] md:text-[17px] font-semibold ${
                  sale ? "badge-success" : "badge-error"
                }`}
              >
                {status}
              </div>
            </h2>

            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">
              Location : <span className="text-slate-500">{location}</span>
            </h2>

            <div className="flex flex-col sm:flex-row items-start sm:items-center">
              <h2 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-0">
                Area : <span className="text-slate-500">{area}</span>
              </h2>
              <h2 className="ml-0 sm:ml-7 text-lg sm:text-xl font-semibold">
                Price : <span className="text-slate-500">{price} TK.</span>
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row text-lg sm:text-xl font-semibold text-nowrap">
              Facilities :
              <ul className="flex flex-wrap text-lg sm:text-xl">
                {facilities.map((facility, id) => (
                  <li key={id} className="ml-1.5 text-slate-500">
                    {facility} ,
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-lg sm:text-xl font-semibold">
              Description :
              <span className="text-slate-500 text-[14px] sm:text-[16px]">
                {description}
              </span>
            </p>

            <div className="border-t-2 border-slate-200 mt-3 flex flex-col sm:flex-row justify-between items-start sm:items-center pt-3.5 text-[14px] sm:text-[16px] font-semibold">
              <div>
                Ratings : <IoIosStar className="inline mr-1 text-orange-400" />
                <span className="text-slate-500">{ratings}</span>
              </div>
              <div>
                Type : <span className="text-slate-500">{type}</span>
              </div>
              <div>
                Segment Name :
                <span className="text-slate-500">{segment_name}</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center">
              <button
                onClick={gotoAllEstates}
                className="bg-violet-700 text-white font-semibold w-full py-3 mt-2 rounded-[6px] cursor-pointer hover:scale-x-95 duration-150"
              >
                <FaArrowLeft className="inline mr-2" /> View All Estates
              </button>
              <button className="bg-emerald-400 text-white font-semibold w-full py-3 mt-2 rounded-[6px] ml-0 sm:ml-5 cursor-pointer hover:scale-x-95 duration-150">
                Add to Favourities <FaCartArrowDown className="inline ml-2" />
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4 mt-3 md:mr-2 md:mt-0">
          <Map position={position} location={location}></Map>
        </div>
      </section>
      <div className="w-full">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default EstateDetailinfo;
