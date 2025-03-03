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
    </>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
