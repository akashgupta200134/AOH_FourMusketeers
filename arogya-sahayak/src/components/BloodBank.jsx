import React, { useEffect, useState } from "react";
import { getAllBloodRecords, saveBloodRecords } from "../utils/firebaseFunctions";
import { useStateValue } from "../context/StateProvider";
import UpdateBloodRecordForm from "./UpdateBloodRecordForm";
import { data } from "../utils/sampleData";
import Bloodhero from '../images/blood3.png'



  const HospitalList = () => {
    const [allBloodRecords, setAllBloodRecords] = useState([]);
    const [{ user }, dispatch] = useStateValue();
    const [adminEmailData, setAdminEmailData] = useState();
  
    const fetchallRecords = async () => {
      const data = await getAllBloodRecords();
      setAllBloodRecords(data);
      if (user.email) {
        const filteredData = data.filter(record => record.adminEmail === user.email);
        setAdminEmailData(filteredData[0]);
      }
    };

    useEffect(() => {
      fetchallRecords();
    }, []);
  

    return (
      <div className="mt-4">
        <section className="flex items-center justify-center w-full md:pl-36 -mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-w-6xl" id="home">
            <div className="md:h-screen flex flex-col justify-center md:pb-36 pt-10 md:pt-0 md:gap-3 gap-1">
              <div className="flex"></div>
              <p className="md:text-7xl text-4xl font-extrabold mt-5">Give Blood, Save Lives&nbsp;</p>
              <p className="mt-5 md:mt-1 text-mediumGrey md:w-3/4 text-xl">
                We are committed to providing you with the best medical and healthcare services to help you live healthier and happier.
              </p>
            </div>
            <div className="relative">
              <div className="md:h-screen md:absolute flex items-center justify-center md:pb-36 h-96 w-[400px] mt-10">
                <img src={Bloodhero} alt="Hero" />
              </div>
            </div>
          </div>
        </section>
  
        <div className="-mt-24">
          <div className="flex flex-row gap-7 justify-center">
            <button className="bg-blue-500  hover:bg-blue-800 h-10 w-36 text-white text-xl font-semibold rounded-3xl shadow-2xl text-center" onClick={() => saveBloodRecords(data)}>Add Record</button>
            <button className="bg-blue-500  hover:bg-blue-800 h-10 w-48 text-white text-xl font-semibold rounded-3xl shadow-2xl text-center" onClick={getAllBloodRecords}>Log Blood Records</button>
          </div>
  
          <h2 className="text-5xl font-extrabold text-center mt-16">Blood Records</h2>
          <div className="flex flex-row justify-center mt-10 overflow-x-auto">
            <table className="border-collapse border border-gray-800 rounded-md ">
              <thead>
                <tr className="bg-blue-400 text-white  text-lg font-semibold">
                  <th className="border border-gray-800 px-4 py-2">Blood Type</th>
                  <th className="border border-gray-800 px-4 py-2">Quantity</th>
                  <th className="border border-gray-800 px-4 py-2">Availability</th>
                  <th className="border border-gray-800 px-4 py-2">Price</th>
                  <th className="border border-gray-800 px-4 py-2">Last Update</th>
                </tr>
              </thead>
              <tbody>
                {allBloodRecords.map(hospital =>
                  hospital.bloodRecords.map((record, index) => (
                    <tr key={`${hospital.adminEmail}-${record.bloodType}-${index}`} className=" text-md  font-medium">
                           {/* {index === 0 && (
                      <td rowSpan={hospital.bloodRecords.length}>
                        {hospital.host_name}
                      </td>
                    )} */}
                    {/* {index === 0 && (
                      <td rowSpan={hospital.bloodRecords.length}>
                        {hospital.adminEmail}
                      </td>
                    )} */}
                      <td className="border border-gray-800 px-4 py-2">{record.bloodType}</td>
                      <td className="border border-gray-800 px-4 py-2">{record.quantity}</td>
                      <td className="border border-gray-800 px-4 py-2">{record.availability}</td>
                      <td className="border border-gray-800 px-4 py-2">{record.price}</td>
                        {/* {index === 0 && (
                      <td rowSpan={hospital.bloodRecords.length}>
                        {hospital.last_update}
                      </td>
                    )} */}
                      <td className="border border-gray-800 px-4 py-2">{hospital.last_update}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
  
          {adminEmailData && <UpdateBloodRecordForm data={adminEmailData} />}
        </div>
      </div>
    );
  };
  
  export default HospitalList;
  

