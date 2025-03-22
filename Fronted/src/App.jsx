import React from "react";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Doctor from "./pages/Doctor";
import About from "./pages/About";
import Login from "./pages/Login";
import MyAppointments from "./pages/MyAppointments";
import MyProfile from "./pages/MyProfile";
import Appointments from "./pages/Appointments";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctor/:speciality" element={<Doctor />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/my-appointments" element={<MyAppointments />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/my-profile" element={<MyProfile />} />
      </Routes>
    </div>
  );
};

export default App;
