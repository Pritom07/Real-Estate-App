import { Outlet } from "react-router";
import Navbar from "../../Components/Navbar/Navbar";

const Auth = () => {
  return (
    <div
      className="min-h-screen w-full flex flex-col bg-cover bg-center bg-no-repeat md:bg-fixed"
      style={{ backgroundImage: "url('/Images/authBackground.jpg')" }}
    >
      <div className="backdrop-blur-xs">
        <Navbar />
      </div>
      <div className="flex flex-grow justify-center items-center px-4 sm:px-8 md:px-12">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Auth;
