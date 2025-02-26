import { Link, NavLink } from "react-router";
import { ImHome } from "react-icons/im";
import { MdRealEstateAgent } from "react-icons/md";
import { MdOutlineBrowserUpdated } from "react-icons/md";
import { MdOutlineLogin } from "react-icons/md";

const Navbar = () => {
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
      <li>
        <NavLink to="/updateProfile" className="text-[16px] font-semibold">
          <MdOutlineBrowserUpdated></MdOutlineBrowserUpdated> Update Profile
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navlinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-4xl font-italianno text-violet-700">
            Real Estate
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navlinks}</ul>
        </div>
        <div className="navbar-end">
          <Link
            to="/signIn"
            className="btn bg-violet-700 text-white font-semibold hover:scale-105"
          >
            <MdOutlineLogin></MdOutlineLogin>
            SignIn
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
