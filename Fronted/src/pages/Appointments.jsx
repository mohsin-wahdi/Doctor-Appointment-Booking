import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";

const Appointments = () => {
  const { docId } = useParams();
  const { doctors, CurrencySymbol } = useContext(AppContext);

  const [doctorsInfo, setDoctorsInfo] = useState(null);

  useEffect(() => {
    if (doctors && doctors.length) {
      const foundDoctor = doctors.find((doc) => doc._id === docId);
      setDoctorsInfo(foundDoctor || null);
      console.log(foundDoctor);
    }
  }, [doctors, docId]);
  return (
    doctorsInfo && (
      <div>
        {/* --------Doctors details -------- */}
        <div className="flex flex-col sm:flex-row gap-4 ">
          <div>
            <img
              className="bg-primary w-full sm:max-w-72 rounded-lg"
              src={doctorsInfo.image}
              alt=""
            />
          </div>

          <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
            {/* ------Doc Info : name , degree experience...----- */}
            <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
              {doctorsInfo.name}{" "}
              <img className="w-5 " src={assets.verified_icon} alt="" />
            </p>
            <div className="flex items-center gap-2 text-sm mt-1 text-gray-600 ">
              <p>
                {doctorsInfo.degree} - {doctorsInfo.speciality}
              </p>
              <button className="py-0.5 px-2 border rounded-full text-xs">
                {doctorsInfo.experience}
              </button>
            </div>
            {/* -----Doctor About-- */}
            <div>
              <p className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-3  ">
                About <img src={assets.info_icon} alt="" />
              </p>
              <p className="text-sm text-gray-500 max-w--[700px] mt-1">
                {doctorsInfo.about}
              </p>
            </div>
            <p className="text-gray-500 font-medium mt-4">
              Appointment fee:
              <span className="text-gray-600">
                {" "}
                {CurrencySymbol}
                {doctorsInfo.fees}
              </span>
            </p>
          </div>
        </div>
      </div>
    )
  );
};
export default Appointments;
