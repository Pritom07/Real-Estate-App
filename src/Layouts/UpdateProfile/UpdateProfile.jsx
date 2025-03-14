import { NavLink, Outlet } from "react-router";
import { MdOutlineBrowserUpdated } from "react-icons/md";
import { FaCircleInfo } from "react-icons/fa6";
import { AiFillEdit } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

const UpdateProfile = () => {
  useEffect(() => {
    AOS.init({ duration: 700, easing: "ease-in-sine", once: true });
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="max-w-7xl mx-auto p-2.5">
      <section className="flex flex-col lg:grid lg:grid-cols-12 gap-4 min-h-screen">
        <div
          data-aos="fade-right"
          className="lg:col-span-3 border-2 rounded-lg border-slate-300 p-6 lg:p-8 mt-1"
        >
          <div className="flex items-center justify-between lg:justify-start">
            <div className="flex items-center">
              <MdOutlineBrowserUpdated className="text-4xl lg:text-5xl mr-3" />
              <div className="text-2xl lg:text-3xl font-semibold">
                Update <br className="hidden lg:block" /> Profile
              </div>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden border rounded p-2 text-lg font-semibold"
            >
              {isMenuOpen ? "Close" : "Menu"}
            </button>
          </div>

          <nav
            className={`mt-5 lg:mt-10 transition-all ${
              isMenuOpen ? "block" : "hidden lg:block"
            }`}
          >
            <ul className="space-y-1">
              <li className="text-lg lg:text-xl font-semibold">
                <NavLink
                  to="/updateProfile/about"
                  className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-200 transition"
                >
                  <FaCircleInfo />
                  About
                </NavLink>
              </li>
              <li className="text-lg lg:text-xl font-semibold">
                <NavLink
                  to="/updateProfile/editProfile"
                  className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-200 transition"
                >
                  <AiFillEdit />
                  Edit Profile
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>

        <div data-aos="fade-left" className="lg:col-span-9">
          <Outlet />
        </div>
      </section>
    </div>
  );
};

export default UpdateProfile;
