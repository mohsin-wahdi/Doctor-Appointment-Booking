import React from "react";
import { assets } from "../assets/assets";
import { useState } from "react";
const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Edward Vincent",
    image: assets.profile_pic,
    email: "Test@gamil.com",
    phone: "1234567890",
    address: {
      line1: "1234, 56th Street",
      line2: "Near XYZ",
    },
    gender: "Male",
    dob: "2000-01-01",
  });
  const [isEdit, setIsEdit] = useState(false);
  return (
    <div className="max-w-lg flex flex-col gap-2 text-sm">
      <img className="w-36 rounded" src={userData.image} alt="" />
      {isEdit ? (
        <input
          className="border text-3xl font-medium max-w-60 mt-4"
          type="text"
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, name: e.target.value }))
          }
          value={userData.name}
        />
      ) : (
        <p className="font-medium text-3xl tect-neutral-800 mt-4">
          {userData.name}
        </p>
      )}
      <hr />

      <div>
        <p className="text-neutral-500 mt-3 underline">CONTACT INFORMATION</p>
        <div className=" grid gridTemplateColumn grid-cols-[1fr,3fr] gap-y-2 mt-3 text-neutral-700">
          <p>Email id:</p>
          <p className="text-primary">{userData.email}</p>

          <p>Phone:</p>
          {isEdit ? (
            <input
              type="text"
              className="border  max-w-60"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, phone: e.target.value }))
              }
              value={userData.phone}
            />
          ) : (
            <p>{userData.phone}</p>
          )}
          <p>Address:</p>
          {isEdit ? (
            <p>
              <input
                className="border  max-w-60"
                type="text"
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line1: e.target.value },
                  }))
                }
                value={userData.address.line1}
              />
              <br />
              <input
                type="text"
                className="border  max-w-60"
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line2: e.target.value },
                  }))
                }
                value={userData.address.line2}
              />
            </p>
          ) : (
            <p>
              {userData.address.line1}
              <br />
              {userData.address.line2}
            </p>
          )}
        </div>
        <div>
          <p className="text-neutral-500 mt-3 underline">Basics INFORMATION</p>
          <div className=" grid gridTemplateColumn grid-cols-[1fr,3fr] gap-y-2 mt-3 text-neutral-700">
            <p>Gender:</p>
            {isEdit ? (
              <select
                className="border  max-w-60"
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    gender: e.target.value,
                  }))
                }
                value={userData.gender}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            ) : (
              <p>{userData.gender}</p>
            )}
            <p>DOB:</p>
            {isEdit ? (
              <input
                type="date"
                className="border  max-w-60"
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, dob: e.target.value }))
                }
                value={userData.dob}
              />
            ) : (
              <p>{userData.dob}</p>
            )}
          </div>
        </div>
        <div >
          {isEdit ? (
            <button className="border-primary border py-2 px-8 rounded-2xl" onClick={() => setIsEdit(false)}>Save</button>
          ) : (
            <button className="border-primary border py-2 px-8 rounded-2xl" onClick={() => setIsEdit(true)}>Edit</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
