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
          element={<UpdateProfile></UpdateProfile>}
        ></Route>
      </Route>
      ,
      <Route path="/auth" element={<Auth></Auth>}>
        <Route path="/auth/signIn" element={<SignIn></SignIn>}></Route>
        <Route path="/auth/signUp" element={<SignUp></SignUp>}></Route>
      </Route>
      ,
      <Route
        path="/estateDetailInfo/:idx"
        element={<EstateDetailinfo></EstateDetailinfo>}
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
        autoClose={5000}
        theme="dark"
        transition={Zoom}
      />
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </StrictMode>
);
