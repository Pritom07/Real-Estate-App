import { Outlet } from "react-router";
import Navbar from "../../Components/Navbar/Navbar";

const Homelayouts = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Homelayouts;
