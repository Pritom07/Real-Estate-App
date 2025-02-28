import { useLoaderData } from "react-router";
import Estates from "../../Components/Estates/Estates";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Allestates = () => {
  const data = useLoaderData();
  const [textData, setTextData] = useState("");
  const [nodata, setNodata] = useState(false);
  const [estates, SetEstates] = useState(data);

  useEffect(() => {
    if (textData) {
      const desiredArray = data.filter(
        (estate) => estate.type.toLowerCase() === textData.toLowerCase()
      );
      if (desiredArray.length !== 0) {
        SetEstates(desiredArray);
        setNodata(false);
      } else {
        setNodata(true);
      }
    } else {
      SetEstates(data);
      setNodata(false);
    }
  }, [data, textData]);

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-sine", once: true });
  }, []);

  return (
    <div className="max-w-7xl mx-auto overflow-x-hidden px-4">
      <div
        data-aos="zoom-in"
        className="flex justify-center items-center mt-2 mb-6"
      >
        <input
          type="text"
          className="w-full md:w-2/3 border-2 border-slate-300 rounded-lg p-3"
          placeholder="Search Your Desired Estate type e.g- Penthouse/ Mansion/ Villa/ Resort/ Private Island"
          onChange={(e) => setTextData(e.target.value)}
        />
      </div>
      {nodata ? (
        <div className="flex justify-center items-center">
          <img
            src="Images/nodata.png"
            className="h-[300px] md:h-[370px]"
            alt="No Data"
          />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 mb-6">
          {estates.map((estate) => (
            <Estates key={estate.id} estate={estate}></Estates>
          ))}
        </div>
      )}
    </div>
  );
};

export default Allestates;
