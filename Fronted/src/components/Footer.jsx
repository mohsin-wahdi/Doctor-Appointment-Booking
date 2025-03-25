import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] mt-40 gap-14 my-10 text-sm md:mx-10">
        {/* **********Left***** */}
        <div className="">
          <img className="mb-5 w-40" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting{" "}
            <br />
            industry. Lorem Ipsum has been the industry's standard dummy <br />{" "}
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </p>
        </div>
        {/* **********Center***** */}
        <div>
          <p className=" text-xl font-medium mb-5 "> COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600 ">
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        {/* **********Right***** */}
        <div>
          <p className=" text-xl font-medium mb-5 ">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600 cursor-pointer">
            <li>+0-000-000-000</li>
            <li>Test@gmail.com</li>
          </ul>
        </div>
      </div>
      {/* -----------Copyright--------- */}
      <hr className="w-full bg-gray-400" />
      <p className="text-gray-600 py-5 text-center">
        Copyright 2025 Test.dev - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
