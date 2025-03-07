import PropTypes from "prop-types";
import AOS from "aos";
import "aos/dist/aos.css";
import { useContext, useEffect } from "react";
import { removeEstate } from "../LocalStorage/LocalStorage";
import { ThemeContext } from "../Provider/Provider";

const SingleFavourite = ({ favouriteId, dataArray }) => {
  const desiredData = dataArray.find((estate) => estate.id === favouriteId);
  const { id, estate_title, description, price, area, location, image } =
    desiredData;
  const { calculateNum, handleAfterRemoveFavList } = useContext(ThemeContext);

  useEffect(() => {
    AOS.init({ duration: 500, easing: "ease-in-sine", once: true });
  }, []);

  const handleRemove = () => {
    const remainingEstateTotal = removeEstate(id);
    // console.log(remainingEstateTotal.getFavouritiesList);
    calculateNum(remainingEstateTotal.len);
    handleAfterRemoveFavList(remainingEstateTotal.getFavouritiesList);
  };

  return (
    <li className="mx-2.5">
      <div
        data-aos="zoom-in"
        className="card bg-base-100 border-2 border-slate-300 mb-4 p-4 md:p-5 rounded-lg flex flex-col md:flex-row items-center md:items-stretch"
      >
        <img
          src={image}
          alt={estate_title}
          className="w-full h-32 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 xl:w-48 xl:h-48 rounded-lg object-cover"
        />

        <div className="md:ml-6 flex flex-col justify-between text-center md:text-left w-full">
          <h1 className="text-lg sm:text-xl md:text-2xl font-semibold">
            {estate_title}
          </h1>

          <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-2 text-sm md:text-base">
            <h1 className="font-semibold">
              Location: <span className="text-slate-500">{location}</span>
            </h1>
            <h1 className="font-semibold">
              Area: <span className="text-slate-500">{area}</span>
            </h1>
            <h1 className="font-semibold">
              Price: <span className="text-slate-500">{price}</span>
            </h1>
          </div>

          <p className="mt-2 text-slate-600 font-medium text-sm md:text-base">
            {description}
          </p>

          <div className="flex justify-center md:justify-end mt-3">
            <button
              onClick={handleRemove}
              className="bg-red-700 text-white px-4 py-2 rounded-md hover:bg-red-800 transition font-semibold"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

SingleFavourite.propTypes = {
  favouriteId: PropTypes.number.isRequired,
  dataArray: PropTypes.array.isRequired,
};

export default SingleFavourite;
