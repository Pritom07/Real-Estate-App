import { useEffect, useState } from "react";
import { IoMdStar } from "react-icons/io";
import PropTypes from "prop-types";

const HomepageEstates = ({ estate }) => {
  const [sale, Setsale] = useState(false);
  const { id, image, estate_title, description, status, type, ratings } =
    estate;

  useEffect(() => {
    if (status === "Sale") {
      Setsale(true);
    } else {
      Setsale(false);
    }
  }, [status]);

  return (
    <div className="max-w-full cursor-pointer overflow-x-hidden">
      <div className="card bg-base-100 border border-slate-200 rounded-lg shadow-md">
        <figure className="w-full h-[200px] sm:h-[250px] md:h-[300px] overflow-hidden">
          <img
            src={image}
            alt="Estate photo"
            className="w-full h-full object-cover"
          />
        </figure>
        <div className="card-body p-4">
          <h2 className="card-title text-xl sm:text-2xl font-semibold">
            {estate_title}
            <div
              className={`badge text-white text-[14px] sm:text-[16px] font-semibold ${
                sale ? "badge-success" : "badge-error"
              }`}
            >
              {status}
            </div>
          </h2>
          <p className="text-[15px] sm:text-[17px] text-slate-500 font-medium mt-1">
            {description.slice(0, 90)}...
            <span className="text-violet-700 font-semibold ml-1">
              Read More
            </span>
          </p>
          <div className="flex justify-between items-center text-[14px] sm:text-[16px] border-t-2 border-slate-300 mt-2 pt-2">
            <div className="flex items-center">
              <IoMdStar className="text-[20px] sm:text-[22px] text-[#FFD700]" />
              <span className="ml-1 font-semibold">
                Ratings:
                <span className="text-slate-600 font-dancingScript font-bold">
                  {ratings}
                </span>
              </span>
            </div>
            <div className="font-semibold">{type}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

HomepageEstates.propTypes = {
  estate: PropTypes.object.isRequired,
};
export default HomepageEstates;
