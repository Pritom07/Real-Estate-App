import { useLoaderData } from "react-router";
import Swipper from "../Swipper/Swipper";
import HomepageEstates from "../HomepageEstates/HomepageEstates";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Packages from "../Packages/Packages";

const Home = () => {
  const data = useLoaderData();
  const slicedData = data.slice(0, 6);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
      <Swipper></Swipper>
      <section className="mt-6">
        <h1
          data-aos="fade-right"
          className="text-4xl font-semibold text-center"
        >
          Some of Our Popular Estates
        </h1>
        <div data-aos="fade-up" className="grid grid-cols-3 gap-4 mt-7">
          {slicedData.map((estate) => (
            <HomepageEstates key={estate.id} estate={estate}></HomepageEstates>
          ))}
        </div>
      </section>

      <div className="flex justify-center items-center mt-6">
        <button className=" bg-violet-500 text-white font-semibold px-3 py-2 rounded-[5px] hover:scale-x-105 cursor-pointer">
          View All Estates
          <FaArrowRightLong className="inline ml-1" />
        </button>
      </div>
      <section className="mt-8">
        <h1 className="text-4xl font-semibold text-center">Our Packages</h1>
        <p className="text-center text-slate-500 mt-1 font-medium">
          Choose one of our premium package that suits you the best
        </p>
        <div className="flex items-center mt-7">
          <Packages></Packages>
        </div>
      </section>
    </div>
  );
};

export default Home;
