import React, { useState } from "react";
import { app } from "../firebase.config";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { saveDoctorData } from "../utils/firebaseFunctions";

const auth = getAuth(app);

const Signup = () => {
  const [docInfo, setDocInfo] = useState({
    doctorName: "",
    email: "",
    password: "",
    speciality: "",
  });

  const userSignUp = () => {
    createUserWithEmailAndPassword(auth, docInfo.email, docInfo.password)
      .then((value) => {
        console.log(value);
      })
      .catch((error) => {
        console.error("Error signing up:", error);
      });

    saveDoctorData(docInfo);

    console.log("done");
    localStorage.setItem("doctor", JSON.stringify(docInfo));
    setDocInfo({
      doctorName: "",
      email: "",
      password: "",
      speciality: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDocInfo((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="w-[800px] h-[650px] ml-[180px]   ">
      <p className=" text-2xl text-center font-bold mt-16">
        {" "}
        Start Your Health Journey with Arogya Sahayak !!
      </p>
      <div className="flex flex-col items-center justify-center h-[500px] w-[500px] border mt-8 ml-[150px] bg-blue-200 shadow-xl rounded-2xl border-gray-400">
        <div className="mb-4">
          <label htmlFor="doctorName" className="block mb-1 mt-10">
            Name
          </label>
          <input
            type="text"
            name="doctorName"
            id="doctorName"
            className="border border-gray-400 rounded-md px-3 py-2 w-64 focus:outline-none focus:ring focus:border-blue-400"
            onChange={handleChange}
            value={docInfo.doctorName}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="border border-gray-400 rounded-md px-3 py-2 w-64 focus:outline-none focus:ring focus:border-blue-400"
            onChange={handleChange}
            value={docInfo.email}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-1">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="border border-gray-400 rounded-md px-3 py-2 w-64 focus:outline-none focus:ring focus:border-blue-400"
            onChange={handleChange}
            value={docInfo.password}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="speciality" className="block mb-1">
            Speciality
          </label>
          <input
            type="text"
            name="speciality"
            id="speciality"
            className="border border-gray-400 rounded-md px-3 py-2 w-64 focus:outline-none focus:ring focus:border-blue-400"
            onChange={handleChange}
            value={docInfo.speciality}
          />
        </div>
        <button
          onClick={userSignUp}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-400"
        >
          Sign Up
        </button>
        <div className="mt-4">
          <span>Already have an account?</span>
          <Link
            to="/signin"
            className="ml-1 text-blue-500 hover:underline focus:outline-none focus:ring"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
