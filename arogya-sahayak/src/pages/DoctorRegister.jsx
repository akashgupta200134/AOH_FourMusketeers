import React, { useState } from "react";
import { saveDoctorData, saveRegisteredData } from "../utils/firebaseFunctions";
import { useStateValue } from "../context/StateProvider";

const DoctorRegister = () => {
  const [{ user }, dispatch] = useStateValue();

  const [imageUplaod, setimageUplaod] = useState([]);

  const upsetImage = (file) => {
    setimageUplaod((prev) => {
      return [...prev, file];
    });
  };

  const [userInfo, setuserInfo] = useState({
    name: user ? user.displayName : "",
    specialization: "",
    image: "",
    position: "",
    email: user ? user.email : "",
    phone: "",
    address: "",
    position: "",
    experience_institution: "",
    start_date: "",
    end_date: "",
    degree: "",
    institution: "",
    year: "",
    biography: "",
  });

  const handleChange = (e) => {
    let fieldName = e.target.name;
    let newValue = e.target.value;
    setuserInfo((currData) => {
      currData[fieldName] = newValue;
      return { ...currData };
    });

    console.log(userInfo);
  };

  const writeData = async (e) => {
    e.preventDefault();

    await saveDoctorData(userInfo).then((res)=>{
        console.log("the data has been saved");
    })
  };


  return (
    <form className="mt-20">
      <h2 className="text-xl font-bold">Doctor Details</h2>
      <div className="grid grid-cols-1 gap-4">
        <div className="flex items-center">
          <label htmlFor="name" className="w-1/4 mr-2 text-sm font-medium">
            Name:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            onChange={handleChange}
            value={userInfo.name}
            required
          />
        </div>
        <div className="flex items-center">
          <label htmlFor="email" className="w-1/4 mr-2 text-sm font-medium">
            email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            onChange={handleChange}
            value={userInfo.email}
            required
          />
        </div>
        <div className="flex items-center">
          <label htmlFor="phone" className="w-1/4 mr-2 text-sm font-medium">
            phone:
          </label>
          <input
            type="phone"
            name="phone"
            id="phone"
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            onChange={handleChange}
            value={userInfo.phone}
            required
          />
        </div>
        <div className="flex items-center">
          <label htmlFor="phone" className="w-1/4 mr-2 text-sm font-medium">
            phone:
          </label>
          <input
            type="phone"
            name="phone"
            id="phone"
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            onChange={handleChange}
            value={userInfo.phone}
            required
          />
        </div>
        <div className="flex items-center">
          <label
            htmlFor="specialization"
            className="w-1/4 mr-2 text-sm font-medium"
          >
            Specialization:
          </label>
          <input
            type="text"
            name="specialization"
            id="specialization"
            onChange={handleChange}
            value={userInfo.specialization}
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            required
          />
        </div>
        <div className="flex items-center">
          <label htmlFor="image" className="w-1/4 mr-2 text-sm font-medium">
            Image URL:
          </label>
          <input
            type="url"
            name="image"
            id="image"
            onChange={handleChange}
            value={userInfo.image}
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            required
          />
        </div>
      </div>
      {/* Education Section */}
      <h3 className="text-xl font-bold">Experience</h3>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div className="flex items-center">
          <label htmlFor="position" className="w-1/4 mr-2 text-sm font-medium">
            position:
          </label>
          <input
            type="text"
            name="position"
            id="position"
            onChange={handleChange}
            value={userInfo.position}
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            required
          />
        </div>
        <div className="flex items-center">
          <label
            htmlFor="experience-institution"
            className="w-1/4 mr-2 text-sm font-medium"
          >
            Institution:
          </label>
          <input
            type="text"
            name="experience_institution"
            id="experience_institution"
            onChange={handleChange}
            value={userInfo.experience_institution}
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            required
          />
        </div>
        <div className="flex items-center">
          <label
            htmlFor="start_date"
            className="w-1/4 mr-2 text-sm font-medium"
          >
            start_date:
          </label>
          <input
            type="date"
            name="start_date"
            id="start_date"
            onChange={handleChange}
            value={userInfo.start_date}
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            required
          />
        </div>
        <div className="flex items-center">
          <label htmlFor="end_date" className="w-1/4 mr-2 text-sm font-medium">
            end_date:
          </label>
          <input
            type="date"
            name="end_date"
            id="end_date"
            onChange={handleChange}
            value={userInfo.end_date}
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            required
          />
        </div>
      </div>
      <h3 className="text-xl font-bold">Education</h3>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div className="flex items-center">
          <label htmlFor="degree-0" className="w-1/4 mr-2 text-sm font-medium">
            Degree:
          </label>
          <input
            type="text"
            name="degree"
            id="degree"
            onChange={handleChange}
            value={userInfo.degree}
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            required
          />
        </div>
        <div className="flex items-center">
          <label
            htmlFor="institution"
            className="w-1/4 mr-2 text-sm font-medium"
          >
            Institution:
          </label>
          <input
            type="text"
            name="institution"
            id="institution"
            onChange={handleChange}
            value={userInfo.institution}
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            required
          />
        </div>
        <div className="flex items-center">
          <label htmlFor="year" className="w-1/4 mr-2 text-sm font-medium">
            Year:
          </label>
          <input
            type="number"
            name="year"
            id="year"
            onChange={handleChange}
            value={userInfo.year}
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            required
          />
        </div>
      </div>
      {/* Education Section */}
      <h3 className="text-xl font-bold">Miscelenius</h3>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div className="flex items-center">
          <label htmlFor="biography" className="w-1/4 mr-2 text-sm font-medium">
            biography:
          </label>
          <textarea
            name="biography"
            id="biography"
            cols="30"
            rows="10"
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            onChange={handleChange}
            value={userInfo.biography}
            required
          ></textarea>
        </div>
      </div>

      <div className="flex items-center justify-end space-x-4">
        <button
          type="button"
          className="text-sm font-semibold text-gray-600 hover:text-gray-800 focus:outline-none focus:ring focus:text-gray-800"
        >
          Cancel
        </button>
        <button
          type="submit"
          onClick={writeData}
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default DoctorRegister;
