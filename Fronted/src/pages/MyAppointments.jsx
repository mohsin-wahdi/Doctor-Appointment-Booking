import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
const MyAppointments = () => {
  const { doctors } = useContext(AppContext);
  return (
    <div>
      <p className="pb-3 mt-12 font-medium text-zinc-700 border-b">
        My Appointments
      </p>
      <div>
        {doctors.slice(0, 2).map((item, index) => (
          <div
            className="grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b border-zinc-200"
            key={index}
          >
            <div>
              <img className="w-32 bg-indigo-50" src={item.image} alt="" />
            </div>
            <div className="flex-1 text-sm text-zinc-600">
              <p className="text-neutral-600 font-semibold">{item.name}</p>
              <p>{item.speciality}</p>
              <p className="font-semibold">Address:</p>
              <p>{item.address.line1}</p>
              <p>{item.address.line2}</p>
              <p>
                <span className="font-semibold">Date & Time:</span> 26 Apr 2025
                | 01:30 PM
              </p>
            </div>
            <div></div>
            <div className="flex flex-col gap-2 justify-end">
              <button className="border hover:bg-primary cursor-pointer py-2 px-6 text-sm hover:text-white rounded text-zinc-400 border-zinc-400 transition-all duration-300 ">
                Pay Online
              </button>
              <button className="border text-zinc-400 rounded hover:bg-red-500 hover:text-white cursor-pointer py-2 px-6 text-sm transition-all duration-300 border-zinc-400">
                Cancel Appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointments;
