import { useContext, useEffect, useState } from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import { getFavouritiesList } from "../../Components/LocalStorage/LocalStorage";
import SingleFavourite from "../../Components/SingleFavourite/SingleFavourite";
import { useLoaderData } from "react-router";
import { ThemeContext } from "../../Components/Provider/Provider";

const Favourities = () => {
  const dataArray = useLoaderData();
  const [Favourities, setFavourities] = useState([]);
  const { afterRemoveFavArray } = useContext(ThemeContext);

  useEffect(() => {
    setFavourities(getFavouritiesList());
  }, []);

  useEffect(() => {
    if (afterRemoveFavArray.length > 0) {
      setFavourities(afterRemoveFavArray);
    } else {
      setFavourities(getFavouritiesList());
    }
  }, [afterRemoveFavArray]);

  return (
    <div className="max-w-7xl mx-auto min-h-screen flex flex-col px-4 md:px-6">
      <Navbar />

      <section className="flex-grow flex justify-center items-center h-full">
        {Favourities.length > 0 ? (
          <ul className="space-y-4 w-full">
            {Favourities.map((favourite, idx) => (
              <SingleFavourite
                key={idx}
                favouriteId={favourite}
                dataArray={dataArray}
                Favourities={Favourities}
              />
            ))}
          </ul>
        ) : (
          <div className="flex flex-col justify-center items-center h-full">
            <img
              src="Images/nodata2.png"
              alt="No Data"
              className="w-40 sm:w-48 md:w-60 lg:w-72 max-w-full object-contain"
            />
            <p className="text-gray-500 mt-2 text-lg sm:text-xl font-semibold">
              No Estate in the Favourities list
            </p>
          </div>
        )}
      </section>

      <div className="w-full mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Favourities;
