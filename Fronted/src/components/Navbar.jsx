import React from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className=" flex items-center justify-between text-sm py-4 mb-5 border-b border-gray-400">
      <img src={assets.logo} alt="logo" />
      <ul className="flex items-center justify-between gap-5">
        <NavLink>
          <li>HOME</li>
        </NavLink>
        <NavLink>
          <li>ALL-DOCTORS</li>
        </NavLink>
        <NavLink>
          <li>ABOUT</li>
        </NavLink>
        <NavLink>
          <li>CONTACT</li>
        </NavLink>
      </ul>
      <div>
        <button>Create Account</button>
      </div>
    </div>
  );
};

export default Navbar;
