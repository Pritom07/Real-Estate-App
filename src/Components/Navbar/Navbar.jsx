import { Link, NavLink, useNavigate } from "react-router";
import { ImHome } from "react-icons/im";
import { MdRealEstateAgent } from "react-icons/md";
import { MdOutlineBrowserUpdated } from "react-icons/md";
import { MdOutlineLogin } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { useContext, useState } from "react";
import "animate.css";
import { ThemeContext } from "../Provider/Provider";
import { toast } from "react-toastify";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const { User, signOUT } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  const [hoverOnPhoto, setHoverOnPhoto] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navlinks = (
    <>
      <li>
        <NavLink to="/" className="text-[16px] font-semibold">
          <ImHome></ImHome> Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/allEstates" className="text-[16px] font-semibold">
          <MdRealEstateAgent></MdRealEstateAgent> All Estates
        </NavLink>
      </li>
      {User && (
        <li>
          <NavLink to="/updateProfile" className="text-[16px] font-semibold">
            <MdOutlineBrowserUpdated></MdOutlineBrowserUpdated> Update Profile
          </NavLink>
        </li>
      )}
    </>
  );

  const handlesignOut = () => {
    signOUT()
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div className="relative z-[999]">
      <div className="navbar overflow-x-hidden">
        <div className="navbar-start">
          <button
            onClick={toggleMenu}
            className="btn btn-ghost lg:hidden"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          <ul
            className={`menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow-lg transition-all duration-500 absolute z-[50] ${
              isOpen
                ? "top-[60px] left-6 opacity-100 visible"
                : "-top-32 left-6 opacity-0 invisible"
            }`}
          >
            {navlinks}
          </ul>

          <a className="btn btn-ghost text-4xl font-italianno text-violet-700 animate__animated animate__pulse">
            Real Estate
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navlinks}</ul>
        </div>
        <div className="navbar-end">
          {User ? (
            <>
              <button
                onMouseEnter={() => setHoverOnPhoto(true)}
                onMouseLeave={() => setHoverOnPhoto(false)}
                className="mr-3 invisible md:visible"
              >
                {hoverOnPhoto ? (
                  <p className="font-semibold text-[16px]">
                    {User.displayName}
                  </p>
                ) : (
                  <FaUserCircle className="text-4xl" />
                )}
              </button>
              <Link
                onClick={handlesignOut}
                className="btn bg-violet-700 text-white font-semibold hover:scale-105"
              >
                <CiLogout className="font-extrabold text-2xl"></CiLogout>
                SignOut
              </Link>
            </>
          ) : (
            <Link
              to="/auth/signIn"
              className="btn bg-violet-700 text-white font-semibold hover:scale-105"
            >
              <MdOutlineLogin className="font-semibold text-2xl"></MdOutlineLogin>
              SignIn
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
