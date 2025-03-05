import { useContext } from "react";
import { ThemeContext } from "../Provider/Provider";
import { Navigate, useLocation } from "react-router";
import PropTypes from "prop-types";
import Loader from "../Loader/Loader";

const PrivateRoute = ({ children }) => {
  const { User, loading } = useContext(ThemeContext);
  const Location = useLocation();

  if (loading) {
    return <Loader></Loader>;
  } else {
    if (User) {
      return children;
    }
    return <Navigate state={Location.pathname} to="/auth/signIn"></Navigate>;
  }
};

PrivateRoute.propTypes = {
  children: PropTypes.object.isRequired,
};

export default PrivateRoute;
