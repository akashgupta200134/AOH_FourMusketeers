import React, { useState } from "react";
import { Link } from "react-router-dom";
import BloodBank from "../components/BloodBank";
import Department from "./Department";
import DoctorProfile from "./DoctorProfile";
import Pricingplans from "./Pricingplans";
import Gallery from "./Gallery";
import TimeTable from "./Timetable";



const AllPages = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <div
      className="relative"
      onMouseEnter={toggleDropdown}
      onMouseLeave={toggleDropdown}
    >
      <label className="cursor-pointer">Pages</label>
      {isDropdownVisible && (
        <div className="absolute bg-white mt-2 py-2 w-40 rounded-lg shadow-lg">
          <ul>
            <li>
              <Link
                to="/blood-bank"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                <BloodBank />
              </Link>
            </li>
            <li>
              <Link
                to="/department"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                <Department />
              </Link>
            </li>
            <li>
              <Link
                to="/doctor-profile"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                <DoctorProfile />
              </Link>
            </li>
            <li>
              <Link
                to="/pricing-plans"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                <Pricingplans />
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="block px-4 py-2 hover:bg-gray-100">
                <Gallery />
              </Link>
            </li>
            <li>
              <Link
                to="/timetable"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                <TimeTable />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default AllPages;
