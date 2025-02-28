import { MdRadioButtonChecked } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Packages = () => {
  useEffect(() => {
    AOS.init({ duration: 400, once: true, easing: "ease-in-out-sine" });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 overflow-x-hidden">
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* 1st Package  */}
        <div
          data-aos="fade-right"
          className="card bg-violet-400 border-2 border-slate-200 cursor-pointer"
        >
          <div className="card-body">
            <span className="badge badge-sm font-bold badge-accent">
              Recommended
            </span>
            <h1 className="text-2xl font-bold text-center">
              Platinum Paradise Package
            </h1>
            <div className="flex justify-between mt-1.5">
              <h2 className="text-xl font-bold">Regular</h2>
              <span className="text-xl text-white font-medium">$5 Million</span>
            </div>
            <ul className="mt-4 flex flex-col gap-2">
              <li>
                <MdRadioButtonChecked className="inline mr-1 text-white text-xl" />
                <span className="font-semibold text-[16px]">
                  Exclusive Oceanfront View
                </span>
              </li>
              <li>
                <MdRadioButtonChecked className="inline mr-1 text-white text-xl" />
                <span className="font-semibold text-[16px]">
                  Infinity Pool & Jacuzzi
                </span>
              </li>
              <li>
                <MdRadioButtonChecked className="inline mr-1 text-white text-xl" />
                <span className="font-semibold text-[16px]">
                  Smart Home Automation
                </span>
              </li>
              <li>
                <MdRadioButtonChecked className="inline mr-1 text-white text-xl" />
                <span className="font-semibold text-[16px]">
                  Private Home Cinema
                </span>
              </li>
              <li>
                <MdRadioButtonChecked className="inline mr-1 text-white text-xl" />
                <span className="font-semibold text-[16px]">
                  24/7 Concierge & Security
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* 2nd Package */}
        <div
          data-aos="fade-up"
          className="card bg-pink-400 border-2 border-slate-200  cursor-pointer"
        >
          <div className="card-body">
            <span className="badge badge-sm font-bold badge-warning">
              Royal VIP
            </span>
            <h1 className="text-2xl font-bold">Royal Grandeur Package</h1>
            <div className="flex justify-between mt-1.5">
              <h2 className="text-xl font-bold">Royal</h2>
              <span className="text-xl text-white font-medium">
                $20 Million
              </span>
            </div>
            <ul className="mt-4 flex flex-col gap-2">
              <li>
                <MdRadioButtonChecked className="inline mr-1 text-white text-xl" />
                <span className="font-semibold text-[16px]">
                  Expansive Estate Grounds
                </span>
              </li>
              <li>
                <MdRadioButtonChecked className="inline mr-1 text-white text-xl" />
                <span className="font-semibold text-[16px]">
                  Helipad & Luxury Garage
                </span>
              </li>
              <li>
                <MdRadioButtonChecked className="inline mr-1 text-white text-xl" />
                <span className="font-semibold text-[16px]">
                  Wine Cellar & Tasting Room
                </span>
              </li>
              <li>
                <MdRadioButtonChecked className="inline mr-1 text-white text-xl" />
                <span className="font-semibold text-[16px]">
                  Home Office Suite & Library
                </span>
              </li>
              <li>
                <MdRadioButtonChecked className="inline mr-1 text-white text-xl" />
                <span className="font-semibold text-[16px]">
                  VIP Entertainment Area
                </span>
              </li>
              <li>
                <MdRadioButtonChecked className="inline mr-1 text-white text-xl" />
                <span className="font-semibold text-[16px]">
                  Personal Gym & Fitness Studio
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* 3rd Package */}
        <div
          data-aos="fade-left"
          className="card bg-violet-400 border-2 border-slate-200 cursor-pointer"
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
                <MdRadioButtonChecked className="inline mr-1 text-white text-xl" />
                <span className="font-semibold text-[16px]">
                  Panoramic City & Ocean Views
                </span>
              </li>
              <li>
                <MdRadioButtonChecked className="inline mr-1 text-white text-xl" />
                <span className="font-semibold text-[16px]">
                  Personalized Interior Design
                </span>
              </li>
              <li>
                <MdRadioButtonChecked className="inline mr-1 text-white text-xl" />
                <span className="font-semibold text-[16px]">
                  Private Elevator Access
                </span>
              </li>
              <li>
                <MdRadioButtonChecked className="inline mr-1 text-white text-xl" />
                <span className="font-semibold text-[16px]">
                  Gourmet Chef's Kitchen
                </span>
              </li>
              <li>
                <MdRadioButtonChecked className="inline mr-1 text-white text-xl" />
                <span className="font-semibold text-[16px]">
                  Exclusive Golf Course & Spa
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
