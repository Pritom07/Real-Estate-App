import { useEffect, useState } from "react";
import { IoMdStar } from "react-icons/io";
import PropTypes from "prop-types";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router";

const Estates = ({ estate }) => {
  const [sale, Setsale] = useState(false);
  const { id, image, estate_title, description, status, type, ratings } =
    estate;
  const navigate = useNavigate();

  useEffect(() => {
    if (status === "Sale") {
      Setsale(true);
    } else {
      Setsale(false);
    }
  }, [status]);

  useEffect(() => {
    AOS.init({ duration: 500, once: true, easing: "ease-in-sine" });
  }, []);

  const viewEstateDetails = () => {
    navigate(`/estateDetailInfo/${id}`);
  };

  return (
    <div className="w-full cursor-pointer overflow-x-hidden">
      <div
        data-aos="fade-right"
        className="card bg-base-100 border border-slate-200 rounded-lg"
      >
        <figure className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] overflow-hidden">
          <img
            src={image}
            alt="Estate photo"
            className="w-full h-full object-cover"
          />
        </figure>
        <div className="card-body p-4">
          <h2 className="card-title text-lg sm:text-xl md:text-2xl font-semibold">
            {estate_title}
            <div
              className={`badge text-white text-[12px] sm:text-[14px] md:text-[16px] font-semibold ${
                sale ? "badge-success" : "badge-error"
              }`}
            >
              {status}
            </div>
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px] text-slate-500 font-medium mt-1">
            {description.slice(0, 90)}...
            <span className="text-violet-700 font-semibold ml-1">
              Read More
            </span>
          </p>
          <div className="flex justify-between items-center text-[13px] sm:text-[14px] md:text-[16px] border-t-2 border-slate-300 mt-2 pt-2">
            <div className="flex items-center">
              <IoMdStar className="text-[18px] sm:text-[20px] md:text-[22px] text-[#FFD700]" />
              <span className="ml-1 font-semibold">
                Ratings:
                <span className="text-slate-600 font-dancingScript font-bold">
                  {ratings}
                </span>
              </span>
            </div>
            <div className="font-semibold">{type}</div>
            <button
              onClick={viewEstateDetails}
              className="bg-violet-700 text-white font-semibold px-3 py-2 rounded-[5px] cursor-pointer"
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Estates.propTypes = {
  estate: PropTypes.object.isRequired,
};

export default Estates;
