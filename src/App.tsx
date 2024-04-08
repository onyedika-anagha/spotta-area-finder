import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Navigation from "./components/navigation";
import InitialState from "./components/toolkit/initial-state.component";
import Preloader from "./components/toolkit/preloader.component";

const Home = lazy(() => import("./routes/home"));
const Login = lazy(() => import("./routes/login"));
const Places = lazy(() => import("./routes/places"));
const PlaceDetails = lazy(() => import("./routes/places/place"));

function App() {
  return (
    <Suspense fallback={<Preloader />}>
      <InitialState />
      <Routes>
        <Route
          path="/"
          element={<Navigation />}>
          <Route
            index
            element={<Home />}
          />
          <Route
            path={"login"}
            element={<Login />}
          />
          <Route
            path={"places"}
            element={<Places />}
          />
        </Route>
        <Route
          path={"place/:slug"}
          element={<PlaceDetails />}
        />
      </Routes>
      <ToastContainer />
    </Suspense>
  );
}

export default App;
