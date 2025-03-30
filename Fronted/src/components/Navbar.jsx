import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false); // State to toggle menu visibility
  const [token, setToken] = useState(true);

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-gray-400">
      <img
        onClick={() => navigate("/")}
        className="w-44 cursor-pointer"
        src={assets.logo}
        alt="logo"
      />

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-start gap-4 font-medium">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-primary py-1" : "py-1"
          }
        >
          <li>HOME</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink
          to="/doctor"
          className={({ isActive }) =>
            isActive ? "text-primary py-1" : "py-1"
          }
        >
          <li>ALL-DOCTORS</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-primary py-1" : "py-1"
          }
        >
          <li>ABOUT</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-primary py-1" : "py-1"
          }
        >
          <li>CONTACT</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
      </ul>

      {/* Mobile Menu Toggle */}
      <div className="flex items-center gap-3">
        {token ? (
          <div className="flex items-center gap-2 group relative cursor-pointer">
            <img
              className="w-8 rounded-full"
              src={assets.profile_pic}
              alt="Profile-pic"
            />
            <img className="w-2.5" src={assets.dropdown_icon} alt="" />
            <div className="absolute top-0 right-0 pt-14 text-base font-medium z-20 text-gray-600 hidden group-hover:block">
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                <p
                  onClick={() => navigate("/my-profile")}
                  className="cursor-pointer hover:text-black"
                >
                  My Profile
                </p>
                <p
                  onClick={() => navigate("/my-appointments")}
                  className="hover:text-black cursor-pointer"
                >
                  My Appointments
                </p>
                <p
                  onClick={() => setToken(false)}
                  className="hover:text-black cursor-pointer"
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-primary text-white px-6 py-2 hidden md:block font-light rounded-full"
          >
            Create Account
          </button>
        )}
        <img
          onClick={() => setShowMenu(!showMenu)} // Toggle menu visibility
          className="w-6 md:hidden cursor-pointer"
          src={showMenu ? assets.cross_icon : assets.menu_icon} // Toggle between menu and cross icon
          alt="menu"
        />
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <ul className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-4 md:hidden">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-primary py-1" : "py-1"
            }
            onClick={() => setShowMenu(false)} // Close menu on click
          >
            <li>HOME</li>
          </NavLink>
          <NavLink
            to="/doctor"
            className={({ isActive }) =>
              isActive ? "text-primary py-1" : "py-1"
            }
            onClick={() => setShowMenu(false)} // Close menu on click
          >
            <li>ALL-DOCTORS</li>
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-primary py-1" : "py-1"
            }
            onClick={() => setShowMenu(false)} // Close menu on click
          >
            <li>ABOUT</li>
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-primary py-1" : "py-1"
            }
            onClick={() => setShowMenu(false)} // Close menu on click
          >
            <li>CONTACT</li>
          </NavLink>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
