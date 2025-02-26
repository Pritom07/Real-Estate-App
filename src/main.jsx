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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Homelayouts></Homelayouts>}>
      <Route index element={<Home></Home>}></Route>
      <Route path="/allEstates" element={<Allestates></Allestates>}></Route>,
      <Route
        path="/updateProfile"
        element={<UpdateProfile></UpdateProfile>}
      ></Route>
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
