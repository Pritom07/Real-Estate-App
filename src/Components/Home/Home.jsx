import { useLoaderData } from "react-router";
import Swipper from "../Swipper/Swipper";
import HomepageEstates from "../HomepageEstates/HomepageEstates";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Packages from "../Packages/Packages";
import Timeline from "../Timeline/Timeline";
import { useNavigate } from "react-router";

const Home = () => {
  const data = useLoaderData();
  const slicedData = data.slice(0, 6);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-in-out-sine" });
  }, []);

  const seeAllEstates = () => {
    navigate("/allEstates");
  };

  return (
    <div className="max-w-7xl mx-auto overflow-x-hidden px-4">
      <div className="relative z-0">
        <Swipper></Swipper>
      </div>

      <section className="mt-6">
        <h1
          data-aos="fade-right"
          className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center"
        >
          Some of Our Popular Estates
        </h1>
        <p
          data-aos="fade-right"
          className="mt-1 text-slate-500 font-medium text-center"
        >
          Choose estates from that you best suits
        </p>

        <div
          data-aos="fade-up"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-7"
        >
          {slicedData.map((estate) => (
            <HomepageEstates key={estate.id} estate={estate}></HomepageEstates>
          ))}
        </div>
      </section>

      <div className="flex justify-center items-center mt-7">
        <button
          onClick={seeAllEstates}
          className="bg-violet-700 text-white font-semibold px-4 py-2 rounded-md hover:scale-105 transition-transform duration-300 cursor-pointer"
        >
          View All Estates
          <FaArrowRightLong className="inline ml-1" />
        </button>
      </div>

      <section className="mt-8">
        <h1
          data-aos="zoom-in-up"
          className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center"
        >
          Our Packages for Respected Customers
        </h1>
        <p
          data-aos="zoom-in-up"
          className="text-center text-slate-500 mt-1 font-medium"
        >
          Choose one of our premium package that suits you the best
        </p>

        <div className="flex flex-col lg:flex-row items-center justify-center mt-7 gap-6">
          <Packages></Packages>
        </div>

        <h1
          data-aos="flip-right"
          className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center mt-8"
        >
          We Value Your Trust
        </h1>
        <p
          data-aos="flip-right"
          className="text-center text-slate-500 mt-1 font-medium"
        >
          Stay connected with us
        </p>

        <div className="mt-7">
          <Timeline></Timeline>
        </div>
      </section>
    </div>
  );
};

export default Home;
