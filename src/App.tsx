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
        </Route>
      </Routes>
      <ToastContainer />
    </Suspense>
  );
}

export default App;
