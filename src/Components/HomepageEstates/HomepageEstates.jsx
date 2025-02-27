import { useEffect, useState } from "react";
import { IoMdStar } from "react-icons/io";
import PropTypes from "prop-types";

const HomepageEstates = ({ estate }) => {
  const [sale, Setsale] = useState(false);
  const {
    id,
    image,
    estate_title,
    description,
    price,
    status,
    area,
    location,
    facilities,
    type,
    ratings,
  } = estate;

  useEffect(() => {
    if (status === "Sale") {
      Setsale(true);
    } else {
      Setsale(false);
    }
  }, [status]);

  return (
    <div className="max-w-7xl mx-auto cursor-pointer">
      <div className="card bg-base-100 border-2 border-slate-200">
        <figure>
          <img src={image} alt="Estate photo" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl">
            {estate_title}
            <div
              className={`badge text-white text-[16px] font-semibold ${
                sale ? "badge-success" : "badge-error"
              }`}
            >
              {status}
            </div>
          </h2>
          <p className="text-[17px] text-slate-500 font-semibold">
            {description.slice(0, 90)}...
            <span className="text-violet-700 font-semibold ml-1">
              Read More
            </span>
          </p>
          <div className="flex justify-between items-center text-[16px] border-t-2 border-slate-400 mt-1.5">
            <div className="mt-2">
              <IoMdStar className="inline text-[22px] text-[#FFD700]" />
              <span className="ml-1 font-semibold">
                Ratings :
                <span className="text-slate-600 font-dancingScript font-bold">
                  {ratings}
                </span>
              </span>
            </div>
            <div className="mt-2 font-semibold">{type}</div>
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
