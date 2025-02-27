import { MdRadioButtonChecked } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Packages = () => {
  useEffect(() => {
    AOS.init({ duration: 400 });
  }, []);
  return (
    <div className="max-w-7xl mx-auto">
      <section className="flex">
        <div
          data-aos="fade-right"
          className="card w-96 h-[360px] bg-violet-400 border-2 border-slate-200 mx-4 mt-12 hover:scale-y-105 cursor-pointer"
        >
          <div className="card-body">
            <span className="badge badge-sm font-bold badge-accent">
              Recomended
            </span>
            <h1 className="text-2xl font-bold">Platinum Paradise Package</h1>
            <div className="flex justify-between mt-1.5">
              <h2 className="text-xl font-bold">Regular</h2>
              <span className="text-xl text-white font-medium">$5 Million</span>
            </div>
            <ul className="mt-4 flex flex-col gap-2">
              <li>
                <MdRadioButtonChecked className="inline mr-1 text-white text-xl"></MdRadioButtonChecked>
                <span className="font-semibold text-[16px]">
                  Exclusive Oceanfront View
                </span>
              </li>
              <li>
                <MdRadioButtonChecked className="inline mr-1 text-white text-xl"></MdRadioButtonChecked>
                <span className="font-semibold text-[16px]">
                  Infinity Pool & Jacuzz
                </span>
              </li>
              <li>
                <MdRadioButtonChecked className="inline mr-1 text-white text-xl"></MdRadioButtonChecked>
                <span className="font-semibold text-[16px]">
                  Smart Home Automation for lighting
                </span>
              </li>
              <li>
                <MdRadioButtonChecked className="inline mr-1 text-white text-xl"></MdRadioButtonChecked>
                <span className="font-semibold text-[16px]">
                  Private Home Cinema
                </span>
              </li>
              <li>
                <MdRadioButtonChecked className="inline mr-1 text-white text-xl"></MdRadioButtonChecked>
                <span className="font-semibold text-[16px]">
                  24/7 Concierge & Security Services
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* 2nd package */}

        <div
          data-aos="fade-up"
          className="card w-96 h-[450px] bg-pink-400 border-2 border-slate-200 hover:scale-y-105 cursor-pointer"
        >
          <div className="card-body">
            <span className="badge badge-sm font-bold badge-warning">
              Royal VIP
            </span>
            <h1 className="text-2xl font-bold"> Royal Grandeur Package</h1>
            <div className="flex justify-between mt-1.5">
              <h2 className="text-xl font-bold">Royal</h2>
              <span className="text-xl text-white font-medium">
                $20 Million
              </span>
            </div>
            <ul className="mt-4 flex flex-col gap-2">
              <li>
                <MdRadioButtonChecked className="inline mr-1 text-white text-xl"></MdRadioButtonChecked>
                <span className="font-semibold text-[16px]">
                  Expansive Estate Grounds
                </span>
              </li>
              <li>
                <MdRadioButtonChecked className="inline mr-1 text-white text-xl"></MdRadioButtonChecked>
                <span className="font-semibold text-[16px]">
                  Helipad & Luxury Car Garage
                </span>
              </li>
              <li>
                <MdRadioButtonChecked className="inline mr-1 text-white text-xl"></MdRadioButtonChecked>
                <span className="font-semibold text-[16px]">
                  Wine Cellar & Tasting Room
                </span>
              </li>
              <li>
                <MdRadioButtonChecked className="inline mr-1 text-white text-xl"></MdRadioButtonChecked>
                <span className="font-semibold text-[16px]">
                  Home Office Suite & Library
                </span>
              </li>
              <li>
                <MdRadioButtonChecked className="inline mr-1 text-white text-xl"></MdRadioButtonChecked>
                <span className="font-semibold text-[16px]">
                  VIP Entertainment Area
                </span>
              </li>
              <li>
                <MdRadioButtonChecked className="inline mr-1 text-white text-xl"></MdRadioButtonChecked>
                <span className="font-semibold text-[16px]">
                  Personal Gym & Fitness Studio
                </span>
              </li>
              <li>
                <MdRadioButtonChecked className="inline mr-1 text-white text-xl"></MdRadioButtonChecked>
                <span className="font-semibold text-[16px]">
                  Indoor & Outdoor Swimming Pools
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* 3rd package */}

        <div
          data-aos="fade-left"
          className="card w-96 h-[360px] bg-violet-400 border-2 border-slate-200 mx-4 mt-12 hover:scale-y-105 cursor-pointer"
        >
          <div className="card-body">
            <span className="badge badge-sm font-bold badge-accent">
              Luxuries
            </span>
            <h1 className="text-2xl font-bold">Diamond Elite Package</h1>
            <div className="flex justify-between mt-1.5">
              <h2 className="text-xl font-bold">Regular</h2>
              <span className="text-xl text-white font-medium">
                $10 Million
              </span>
            </div>
            <ul className="mt-4 flex flex-col gap-2">
              <li>
                <MdRadioButtonChecked className="inline mr-1 text-white text-xl"></MdRadioButtonChecked>
                <span className="font-semibold text-[16px]">
                  Panoramic City & Ocean Views
                </span>
              </li>
              <li>
                <MdRadioButtonChecked className="inline mr-1 text-white text-xl"></MdRadioButtonChecked>
                <span className="font-semibold text-[16px]">
                  Personalized Interior Design
                </span>
              </li>
              <li>
                <MdRadioButtonChecked className="inline mr-1 text-white text-xl"></MdRadioButtonChecked>
                <span className="font-semibold text-[16px]">
                  Private Elevator Access
                </span>
              </li>
              <li>
                <MdRadioButtonChecked className="inline mr-1 text-white text-xl"></MdRadioButtonChecked>
                <span className="font-semibold text-[16px]">
                  Gourmet Chef's Kitchen
                </span>
              </li>
              <li>
                <MdRadioButtonChecked className="inline mr-1 text-white text-xl"></MdRadioButtonChecked>
                <span className="font-semibold text-[16px]">
                  Exclusive Access to Golf Course & Spa
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Packages;
