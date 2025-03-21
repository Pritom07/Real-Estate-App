import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import Homelayouts from "./Layouts/Homelayouts/Homelayouts";
import Home from "./Components/Home/Home";
import Allestates from "./Layouts/Allestates/Allestates";
import UpdateProfile from "./Layouts/UpdateProfile/UpdateProfile";
import Auth from "./Layouts/Auth/Auth";
import SignIn from "./Components/Pages/SignIn/SignIn";
import SignUp from "./Components/Pages/SignUp/SignUp";
import Provider from "./Components/Provider/Provider";
import EstateDetailinfo from "./Layouts/EstateDetailInfo/EstateDetailinfo";
import { ToastContainer, Zoom } from "react-toastify";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Favourities from "./Layouts/Favourities/Favourities";
import About from "./Components/About/About";
import EditProf from "./Components/EditProf/EditProf";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Homelayouts></Homelayouts>}>
        <Route
          index
          element={<Home></Home>}
          loader={() => fetch("/Data/data.json")}
        ></Route>
        <Route
          path="/allEstates"
          element={<Allestates></Allestates>}
          loader={() => fetch("/Data/data.json")}
        ></Route>
        <Route
          path="/updateProfile"
          element={
            // <PrivateRoute>
            //   <UpdateProfile></UpdateProfile>
            // </PrivateRoute>
            <UpdateProfile></UpdateProfile>
          }
        >
          <Route path="/updateProfile/about" element={<About></About>}></Route>
          <Route
            path="/updateProfile/editProfile"
            element={<EditProf></EditProf>}
          ></Route>
        </Route>
      </Route>
      ,
      <Route path="/auth" element={<Auth></Auth>}>
        <Route path="/auth/signIn" element={<SignIn></SignIn>}></Route>
        <Route path="/auth/signUp" element={<SignUp></SignUp>}></Route>
      </Route>
      ,
      <Route
        path="/estateDetailInfo/:idx"
        element={
          <PrivateRoute>
            <EstateDetailinfo></EstateDetailinfo>
          </PrivateRoute>
        }
        loader={() => fetch("/Data/data.json")}
      ></Route>
      ,
      <Route
        path="/favourities"
        element={
          // <PrivateRoute>
          //   <Favourities></Favourities>
          // </PrivateRoute>
          <Favourities></Favourities>
        }
        loader={() => fetch("/Data/data.json")}
      ></Route>
    </>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <ToastContainer
        position="top-center"
        autoClose={4000}
        theme="dark"
        transition={Zoom}
      />
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </StrictMode>
);
