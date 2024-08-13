import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../About/About";
import Alumni from "../Alumni/Alumni";
import Gallery from "../Gallery/Gallery";
import Home from "../Home/Home";
import Jobs from "../Jobs/Jobs";
import Addj from "./Addj";
import Addjob from "./Addjob/Addjob";
import Contact from "./Contact/Contact";
import Dashboard from "./Dashboard/Dashboard";
import Signup from "./Signup/Signup";
import Update from "./updateprofile/Update";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Payment from "./Payment/Payment";

const App = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/alumni" element={<Alumni />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
          <Route path="/jobs" element={<Jobs />}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/Signup" element={<Signup></Signup>}></Route>
          <Route path="/profile" element={<Dashboard/>}></Route>
          <Route path="/update" element={<Update/>}></Route>
          <Route path="/addjob" element={<Addjob/>}></Route>
          <Route path="/payment" element={<Payment></Payment>}></Route>
        </Routes>
        <ToastContainer />
      </div>
    </>
  );
};

export default App;
