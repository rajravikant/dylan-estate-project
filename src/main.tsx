import React from "react";
import ReactDOM from "react-dom/client";
import Home, { loader as propertiesLoader } from "./Home.tsx";
import { isAuthLoader } from "./utils.ts";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

import "./index.css";
import Root from "./routes/Root.tsx";
import Login from "./routes/Login.tsx";
import Register from "./routes/Register.tsx";
import AddProperty from "./routes/AddProperty.tsx";
import Confirmation from "./routes/Confirmation.tsx";
import PropertyDetails,{loader as propertyLoader} from "./routes/PropertyDetails.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} id="root">
      <Route path="" element={<Home />} loader={propertiesLoader} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Register />} />
      <Route path="property/:propertyID" element={<PropertyDetails />} loader={propertyLoader } />
      <Route path="add-property" element={<AddProperty /> } loader={isAuthLoader}/>
      <Route path="add-property/confirmation" element={<Confirmation />} loader={isAuthLoader} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
