import AOS from "aos";
import "aos/dist/aos.css";
import { useContext, useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { ThemeContext } from "../Provider/Provider";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const EditProf = () => {
  const navigate = useNavigate();
  const [visiblePass, SetVisiblepass] = useState(false);
  const { updateUserProfile } = useContext(ThemeContext);

  useEffect(() => {
    AOS.init({ duration: 700, easing: "ease-in-out-sine", once: true });
  }, []);

  const handleSeePassword = () => {
    SetVisiblepass(!visiblePass);
  };

  const handleUpdateForm = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const photoUrl = formData.get("photourl");
    const email = formData.get("email");
    const age = formData.get("age");
    const pass = formData.get("password");
    const city = formData.get("city");
    const phoneNumber = formData.get("contact");
    const address = formData.get("address");
    const cout = formData.get("cout");
    const profession = formData.get("profession");

    const userData = {
      displayName: name,
      photoURL: photoUrl,
      age: age,
      city: city,
      phoneNumber: phoneNumber,
      address: address,
      cout: cout,
      profession: profession,
    };

    updateUserProfile(userData)
      .then(() => {
        navigate("/updateProfile/about");
      })
      .catch((err) => {
        toast.error(`The error is ,"${err.message}"`);
      });
  };

  return (
    <div className="max-w-7xl mx-auto px-1">
      <h1 className="text-center text-3xl md:text-4xl font-semibold text-violet-700">
        Edit Your Profile Here !
      </h1>
      <div
        data-aos="fade-left"
        className="flex justify-center items-center border-2 border-slate-300 rounded-[7px] mt-6"
      >
        <form onSubmit={handleUpdateForm} className="p-5 rounded-[5px] ">
          <div className="flex flex-wrap sm:flex-nowrap gap-4 mt-2">
            <label className="w-full sm:w-[65%] font-semibold">
              Name :
              <input
                type="text"
                className="w-full focus:outline-none focus:ring-1 focus:ring-violet-700 p-1 rounded-[4px] font-normal"
                name="name"
              />
            </label>
            <label className="w-full sm:w-[65%] font-semibold">
              PhotoUrl :
              <input
                type="text"
                className="w-full focus:outline-none focus:ring-1 focus:ring-violet-700 p-1 rounded-[4px] font-normal"
                name="photourl"
              />
            </label>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap gap-4 mt-2">
            <label className="w-full sm:w-[65%] font-semibold">
              Email :
              <input
                type="email"
                className="w-full focus:outline-none focus:ring-1 focus:ring-violet-700 p-1 rounded-[4px] font-normal"
                name="email"
              />
            </label>
            <label className="w-full sm:w-[65%] font-semibold">
              Age :
              <input
                type="number"
                className="w-full focus:outline-none focus:ring-1 focus:ring-violet-700 p-1 rounded-[4px] font-normal"
                name="age"
              />
            </label>
          </div>

          <div className="mt-2 relative w-full sm:w-[90%]">
            <label className="w-full font-semibold">
              Password :
              <div className="relative">
                <input
                  type={visiblePass ? "text" : "password"}
                  className="w-full focus:outline-none focus:ring-1 focus:ring-violet-700 p-2 rounded-[4px] font-normal pr-10"
                  name="password"
                />
                <div
                  onClick={handleSeePassword}
                  className="cursor-pointer absolute top-1/2 right-3 transform -translate-y-1/2 text-xl text-gray-600"
                >
                  {visiblePass ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>
            </label>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap gap-4 mt-2">
            <label className="w-full sm:w-[65%] font-semibold">
              City :
              <input
                type="text"
                className="w-full focus:outline-none focus:ring-1 focus:ring-violet-700 p-1 rounded-[4px] font-normal"
                name="city"
              />
            </label>
            <label className="w-full sm:w-[65%] font-semibold">
              Contact no. :
              <input
                type="text"
                className="w-full focus:outline-none focus:ring-1 focus:ring-violet-700 p-1 rounded-[4px] font-normal"
                name="contact"
              />
            </label>
          </div>

          <div className="mt-2">
            <label className="w-full font-semibold">
              Address :
              <input
                type="text"
                className="w-full sm:w-[90%] focus:outline-none focus:ring-1 focus:ring-violet-700 p-1 rounded-[4px] font-normal"
                name="address"
              />
            </label>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap gap-4 mt-2">
            <label className="w-full sm:w-[65%] font-semibold">
              Cout :
              <input
                type="text"
                className="w-full focus:outline-none focus:ring-1 focus:ring-violet-700 p-1 rounded-[4px] font-normal"
                name="cout"
              />
            </label>
            <label className="w-full sm:w-[65%] font-semibold">
              Profession :
              <input
                type="text"
                className="w-full focus:outline-none focus:ring-1 focus:ring-violet-700 p-1 rounded-[4px] font-normal"
                name="profession"
              />
            </label>
          </div>

          <div className="flex justify-center mt-4">
            <button className="btn text-white bg-violet-700 px-6 py-2 rounded-md hover:bg-violet-800 transition  hover:scale-x-110 font-semibold">
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProf;
