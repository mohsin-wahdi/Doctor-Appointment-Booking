import React, { useEffect } from "react";
import { useState, useContext } from "react";
import { useParams } from "react-router";
import { AppContext } from "../context/AppContext.jsx";
import { useNavigate } from "react-router";
const Doctor = () => {
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const { doctors } = useContext(AppContext);
  const navigate = useNavigate();

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  return (
    <div>
      <p className="text-gray-600">Browse through the doctors specialist.</p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        <div className="flex flex-col gap-4 text-gray-600 text-sm">
          <p
            onClick={() =>
              speciality === "General physician"
                ? navigate("/doctor")
                : navigate("/doctor/General physician")
            }
            className={` w-[96vw] sm:w-auto pl-3 pr-16 border border-gray-300 rounded transition-all cursor-pointer py-1.5 ${
              speciality === "General physician"
                ? " bg-indigo-100 text-black"
                : ""
            }`}
          >
            General physician
          </p>
          <p
            onClick={() =>
              speciality === "Gynecologist"
                ? navigate("/doctor")
                : navigate("/doctor/Gynecologist")
            }
            className={` w-[96vw] sm:w-auto pl-3 pr-16 border border-gray-300 rounded transition-all cursor-pointer py-1.5 ${
              speciality === "Gynecologist" ? " bg-indigo-100 text-black" : ""
            }`}
          >
            Gynecologist
          </p>
          <p
            onClick={() =>
              speciality === "Dermatologist"
                ? navigate("/doctor")
                : navigate("/doctor/Dermatologist")
            }
            className={` w-[96vw] sm:w-auto pl-3 pr-16 border border-gray-300 rounded transition-all cursor-pointer py-1.5 ${
              speciality === "Dermatologist" ? " bg-indigo-100 text-black" : ""
            }`}
          >
            Dermatologist
          </p>
          <p
            onClick={() =>
              speciality === "Pediatricians"
                ? navigate("/doctor")
                : navigate("/doctor/Pediatricians")
            }
            className={` w-[96vw] sm:w-auto pl-3 pr-16 border border-gray-300 rounded transition-all cursor-pointer py-1.5 ${
              speciality === "Pediatricians" ? " bg-indigo-100 text-black" : ""
            }`}
          >
            Pediatricians
          </p>
          <p
            onClick={() =>
              speciality === "Neurologist"
                ? navigate("/doctor")
                : navigate("/doctor/Neurologist")
            }
            className={` w-[96vw] sm:w-auto pl-3 pr-16 border border-gray-300 rounded transition-all cursor-pointer py-1.5 ${
              speciality === "Neurologist" ? " bg-indigo-100 text-black" : ""
            }`}
          >
            Neurologist
          </p>
          <p
            onClick={() =>
              speciality === "Gastroenterologist"
                ? navigate("/doctor")
                : navigate("/doctor/Gastroenterologist")
            }
            className={` w-[96vw] sm:w-auto pl-3 pr-16 border border-gray-300 rounded transition-all cursor-pointer py-1.5 ${
              speciality === "Gastroenterologist"
                ? " bg-indigo-100 text-black"
                : ""
            }`}
          >
            Gastroenterologist
          </p>
        </div>
        <div className="w-full grid gridTemplateColumn gap-4 gap-y-6 ">
          {filterDoc.map((item, index) => (
            <div
              onClick={() => navigate(`/appointments/${item._id}`)}
              key={index}
              className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
            >
              <img className="bg-blue-50" src={item.image} alt="" />
              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-green-500 text-center">
                  <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                  <p>Available</p>
                </div>
                <p className="text-lg text-gray-900 font-medium">{item.name}</p>
                <p className="text-sm text-gray-600">{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctor;
