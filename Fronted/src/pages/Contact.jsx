import React from "react";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div>
      <div>
        <p className="text-2xl text-center text-gray-500 pt-10">
          CONTACT<span className="text-black font-medium"> US</span>
        </p>
      </div>
      <div className=" my-10 flex md:flex-row flex-col justify-center gap-10 mb-28 text-sm">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.contact_image}
          alt=""
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-lg text-gray-600">OUR OFFICE</p>
          <p className="text-gray-500">
            00000 Willms <br />
            Suite 000, Washington, USA
          </p>
          <p className="text-gray-500">Tel: (000) 000-0000</p>
          <p className="text-gray-500">Email: greatstackdev@gmail.com</p>
          <p className="font-semibold text-lg text-gray-600">
            CAREERS AT PRESCRIPTO
          </p>
          <p className="text-gray-500">
            Learn more about our teams and job openings.
          </p>
          <button className="py-4 px-10 border text-sm hover:bg-black text-black hover:text-white transition-all duration-500 cursor-pointer">
            Explore job
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
